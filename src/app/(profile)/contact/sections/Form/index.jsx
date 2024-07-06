"use client";
import React, { useMemo, useState, useEffect } from 'react'

//components
import Grid from '@/app/components/Grid'
import SectionBox from '@/app/components/SectionBox'
import Input from '@/app/components/Input'
import Alert from '@/app/components/Alert';
//icons
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
//validation shcema
import { validationSchema } from "../../Schema";

import "./index.scss"

const BASE_CLASSNAME = 'contact_from_container'

const Tags = ({
  classNames = "",
  title = "",
  tags = [],
  selectMultiple = false,
  tagClassName = "",
  onUpdate = () => {},
  error = "",
  isValueCleared = false
}) => {

  const [mappedTags , setMappedTags] = useState(() => tags.map(t => ({
    title: t,
    isSelected: false
  })));

  useEffect(() => {
    if(isValueCleared){
      setMappedTags(tags.map(t =>  ({
        title: t,
        isSelected: false
      })))
    }
  }, [isValueCleared]);

  const onTagClick = (key) => {
    const updatedTags = mappedTags.map(mt => {
      if(mt.title === key){
        return {
          ...mt,
          isSelected: !mt.isSelected
        }
      }
      
      if(selectMultiple){
        return mt
      }

      return {
        ...mt,
        isSelected: false
      }
    });
    
    setMappedTags(updatedTags)
    const resultingTags = updatedTags.filter(t => t.isSelected).map(t => t.title);
    onUpdate(selectMultiple ? resultingTags : resultingTags[0]);
  }
  
  return (
    <SectionBox
      title={title}
      containerClass={`tags ${classNames}`}
    >
      <div className={`tags_list`}>
        {mappedTags.map((t, index) => (
          <div
            key={index}
            className={`tag ${tagClassName} ${t.isSelected ? "selected" : ""}`}
            onClick={() => onTagClick(t.title)}  
          >{t.title}</div>
        ))}
      </div>
      {error !== "" && (
        <p className='error'>{error}</p>
      )}
    </SectionBox>
  )
}

const defaultErrorState = {
  name: "",
  company: "",
  email: "",
  comment: "",
  categoryTags: "",
  priceRange: ""
}

const defaultMessageState = {
  type: "",
  text: ""
}

const icons = {
  "info": InfoOutlinedIcon,
  "success": TaskAltIcon,
  "error": WarningAmberIcon
}

const Form = ({
  data = {}
}) => {

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [categoryTags, setCategoryTags] = useState([]);
  const [priceRange, setPriceRange] = useState(null);
  const [errors, setErrors] = useState(defaultErrorState);
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState(defaultMessageState)
  const [notification, setNotification] = useState(defaultMessageState)

  const clearForm = () => {
    setName("");
    setCompany("");
    setEmail("");
    setComment("");
    setCategoryTags([]);
    setPriceRange("");
  }

  const handleChange = (key, value) => {
    const updateFuncs = {
      "name": setName,
      "company": setCompany,
      "email": setEmail,
      "comment": setComment,
      "categoryTags": setCategoryTags,
      "priceRange": setPriceRange
    }

    updateFuncs[key](value)
  }

  const validateFeilds = async (key = undefined) => {
    const stateKeys = {
      "name": name,
      "company": company,
      "email": email,
      "comment": comment,
      "categoryTags": categoryTags,
      "priceRange": priceRange
    }
    try {
      if(key){
        await validationSchema.validateAt(key, {
          [key]: stateKeys[key]
        });
      } else {
        await validationSchema.validate({
          name,
          company,
          email,
          comment,
          categoryTags,
          priceRange,
        }, { abortEarly: false })
      }
  
      setErrors((prev) => key ? ({
        ...prev,
        [key]: ""
      }) : defaultErrorState);
      return true
    } catch (err) {
      const errors = [];
      if(key){
        errors.push(err)
      } else {
        errors.push(...err.inner)
      }
      const validationErrors = {};
      errors.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(() => ({
        ...defaultErrorState,
        ...validationErrors
      }));
      return false
    }
  }

  const handleSubmit = async (e) => {
    if(isProcessing) return

    e.preventDefault();
    const isValidData = await validateFeilds();
    if(!isValidData) return

    setIsProcessing(true);
    try {
      const response = await fetch('/contact/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          company,
          email,
          comment,
          categoryTags,
          priceRange
        }),
      });
  
      const result = await response.json();
  
      if (response.ok && result?.success) {
        const msg = {
          type: "success",
          text: "Thanks for reaching out, Your response has been submitted!"
        }
        setMessage(msg)
        setNotification({
          ...msg,
          text: "Email send successfully"
        })
        clearForm();
      } else {
        const msg = {
          type: "error",
          text: "Something went wrong"
        }
        setMessage(msg)
        setNotification(msg)
      }
    } catch (error) {
      const msg = {
        type: "error",
        text: error?.message ?? "Something went wrong"
      }
      setMessage(msg);
      setNotification(msg)
    } finally {
      setIsProcessing(false)
      setTimeout(() => {
        clearMessage()
      }, 30000);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  const Icon = useMemo(() => {
    if(message.type === ""){
      return () => <React.Fragment></React.Fragment>
    }

    return icons[message.type]
  }, [message.type]);

  Icon?.displayName = "Icon"

  const clearMessage = () => setMessage(defaultMessageState);

  const clearNotifications = () => setNotification(defaultMessageState);

  return (
    <div
      className={BASE_CLASSNAME}
      onKeyDown={handleKeyDown}
    > 
      <Alert 
        show={notification.type !== ""}
        type={notification.type}
        text={notification.text}
        onClose={clearNotifications}
        duration={20000}
      />
      {message.type !== "" && (
        <div className={`${BASE_CLASSNAME}_msg ${message.type}`}>
          <div className='left'>
            <Icon className="icon" />
            <p>{message.text}</p>
          </div>
          <HighlightOffIcon className='right' onClick={clearMessage} />
        </div>
      )}
      <Tags 
        classNames={`${BASE_CLASSNAME}-tags`}
        tags={data.serviceTags.list}
        selectMultiple
        title={data.serviceTags.title}
        error={errors.categoryTags}
        onUpdate={(value) => handleChange("categoryTags", value)}
        isValueCleared={categoryTags.length < 1}
      />
      <SectionBox
        title={data.title}
        containerClass={`${BASE_CLASSNAME}_form_box`}
      >
        <Grid
          classNames={`${BASE_CLASSNAME}_form_box_grid`}
        >
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xlg={6}
          >
            <Input
              id="name"
              required
              value={name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => validateFeilds("name")}
              placeholder="Name"
              type="text"
              error={errors.name}
            />
          </Grid.Item>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xlg={6}
          >
            <Input
              id="company"
              value={company}
              onChange={(e) => handleChange("company", e.target.value)}
              onBlur={() => validateFeilds("company")}
              placeholder="Company"
              type="text"
              error={errors.company}
            />
          </Grid.Item>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xlg={12}
          >
            <Input
              id="email"
              required
              value={email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => validateFeilds("email")}
              placeholder="Email"
              type="email"
              error={errors.email}
            />
          </Grid.Item>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xlg={12}
          >
            <Input
              id="comment"
              textarea
              value={comment}
              onChange={(e) => handleChange("comment", e.target.value)}
              onBlur={() => validateFeilds("comment")}
              placeholder="Comment"
              type="text"
              required
              error={errors.comment}
            />
          </Grid.Item>
        </Grid>
      </SectionBox>
      <Tags
        classNames={`${BASE_CLASSNAME}-tags`}
        tags={data.priceTags.list}
        title={data.priceTags.title}
        error={errors.priceRange}
        onUpdate={(value) => handleChange("priceRange", value)}
        isValueCleared={priceRange === ""}
      />
      <button 
        type="submit" 
        className={`${BASE_CLASSNAME}_submit-btn`}
        onClick={handleSubmit}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <div>Processing...</div>
        ) : (
          <div>
            <span>{data.btnText}</span>
          </div>
        )}
      </button>
    </div>
  )
}

export default Form