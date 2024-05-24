import React from "react";
import Image from "next/image";
import "./page.scss";
import FlowerImg from "../../../../public/assets/contact-flower.png";
import FlowerText from "../../../../public/assets/contact-flower-text.png";
import Navbar from "@/app/components/Navbar";
import ContactCategory from "@/app/components/contactCategory/ContactCategory";
import FooterService from "@/app/components/footerservice/FooterService";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ContactBuget from "@/app/components/contactbuget/ContactBuget";
import CustomCursor from "@/app/components/MouseCursor/MouseCursor";
import Grid from "@/app/components/Grid";
import AnimatedCharactors from "@/app/components/AnimatedCharactors";
import IMG from "@/app/components/IMG";

//TODO:: The child page of contact route
const Contact = () => {
  const BASE_CLASSNAME = "contact-area";
  return (
    <>
      <Navbar />
      <div className="contact-area position-relative">
        <div className="container">
          <span className="contact-subtitle">Contact Us</span>
          <Grid classNames={`${BASE_CLASSNAME}_wrapper`}>
            <Grid.Item xs={12} sm={12} md={12} lg={11} xlg={11}>
              <Grid>
                <Grid.Item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={9}
                  xlg={10}
                  itemClass="contact-title"
                >
                  <AnimatedCharactors
                    // wrapperClass="contact-title"
                    charactorClass="animated-letter"
                    capitlized
                    charactors="Let's"
                    leftSpaceOnLastCharactor
                  />
                  <AnimatedCharactors
                    // wrapperClass="contact-title"
                    charactorClass="animated-letter"
                    capitlized
                    leftSpaceOnLastCharactor
                    charactors="talk"
                  />
                  <IMG
                    src="/assets/contact.jpg"
                    alt="contactImg"
                    useRawImgTag
                    imageClasses="contact-img"
                  />
                  <AnimatedCharactors
                    charactorClass="animated-letter"
                    capitlized
                    charactors="About"
                    leftSpaceOnLastCharactor
                  />
                  <AnimatedCharactors
                    charactorClass="animated-letter"
                    capitlized
                    leftSpaceOnLastCharactor
                    charactors="your"
                  />
                  <AnimatedCharactors
                    charactorClass="animated-letter"
                    capitlized
                    charactors="project"
                    leftSpaceOnLastCharactor
                  />
                </Grid.Item>
                <Grid.Item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={3}
                  xlg={2}
                  itemClass="contactShape d-sm-block"
                >
                  <div className="contactshape1 text-lg-end">
                    <Image
                      src={FlowerImg}
                      className="flower-img"
                      alt="flower-img"
                    />
                    <Image src={FlowerText} alt="flower-text" />
                  </div>
                </Grid.Item>
              </Grid>
            </Grid.Item>
          </Grid>
          <ContactCategory />
          <form>
            <h4 className="contact-category-title">Request A Quote</h4>
            <Row className="g-4 mb-5">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Enter Name">
                  <Form.Control type="text" placeholder="Jinkal" />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Company">
                  <Form.Control type="email" placeholder="ArithBird" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Enter Email"
                >
                  <Form.Control type="text" placeholder="abc@gmail.com" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-5">
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "150px" }}
                />
              </FloatingLabel>
            </Row>
          </form>
          <ContactBuget />
        </div>
        <FooterService />
      </div>
      <CustomCursor />
    </>
  );
};

export default Contact;
