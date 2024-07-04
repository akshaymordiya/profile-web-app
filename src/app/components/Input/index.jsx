"use client";
import React from 'react'

import "./index.scss";

const BASE_CLASSNAME = "input_box"

const Input = ({
  containerClass = "",
  labelClass = "",
  inputClass = "",
  id = "",
  value,
  onChange = () => {},
  onBlur = () => {},
  error = "",
  type,
  placeholder,
  textarea = false,
  textareaClass = "",
  ...props
}) => {

  const classNames = {
    input: `${BASE_CLASSNAME}_wrapper_input ${inputClass}`,
    textarea: `${BASE_CLASSNAME}_wrapper_textarea ${textareaClass}`
  } 
  
  return (
    <div className={`${BASE_CLASSNAME} ${containerClass}`}>
      <div className={`${BASE_CLASSNAME}_wrapper`}>
        {React.createElement(
          textarea ? "textarea" : "input",
          {
            id,
            className: `${classNames[textarea ? "textarea" : "input"]} ${value !== "" ? "filled" : ""}`,
            value,
            onChange,
            onBlur,
            type,
            ...props
          }
        )}
        <label className={`${BASE_CLASSNAME}_wrapper_label ${textarea ? "textarea_label" : ""} ${labelClass}`}>{placeholder}</label>
      </div>
      {error !== "" && (
        <p className={`${BASE_CLASSNAME}_error_text`}>{error}</p>
      )}
    </div>
  )
}

export default Input
