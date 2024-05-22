import React from "react";
import Image from "next/image";
import "./page.scss";
import contactImg from "../../../../public/assets/contact.jpg";
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
import CTA from "@/app/components/CTA";

//TODO:: The child page of contact route
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-area position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11">
              <div className="row align-items-center">
                <div className="col-xl-9 col-lg-10">
                  <div
                    className="contact-top-section-title-box"
                    style={{ marginBottom: "70px" }}
                  >
                    <span className="contact-subtitle">Contact Us</span>
                    <h4 className="contact-title">
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">L</div>
                        <div className="animated-letter">e</div>
                        <div className="animated-letter">t</div>
                        <div className="animated-letter">'</div>
                        <div className="animated-letter">s</div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">T</div>
                        <div className="animated-letter">a</div>
                        <div className="animated-letter">l</div>
                        <div className="animated-letter">k</div>
                      </div>
                      <span>
                        <Image src={contactImg} alt="cotact-img" />
                      </span>
                      <br />
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">A</div>
                        <div className="animated-letter">b</div>
                        <div className="animated-letter">o</div>
                        <div className="animated-letter">u</div>
                        <div className="animated-letter">t</div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">y</div>
                        <div className="animated-letter">o</div>
                        <div className="animated-letter">u</div>
                        <div className="animated-letter">r</div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "30px",
                        }}
                      >
                        <div className="animated-letter">p</div>
                        <div className="animated-letter">r</div>
                        <div className="animated-letter">o</div>
                        <div className="animated-letter">j</div>
                        <div className="animated-letter">e</div>
                        <div className="animated-letter">c</div>
                        <div className="animated-letter">t</div>
                      </div>
                    </h4>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 d-none d-sm-block text-end">
                  <div className="contact-shape-1 text-center text-lg-end">
                    <Image
                      src={FlowerImg}
                      className="flower-img"
                      alt="flower-img"
                    />
                    <Image src={FlowerText} alt="flower-text" />
                  </div>
                </div>
              </div>

              <div
                className="contact-mail-box"
                style={{ marginBottom: "90px" }}
              >
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-mail-info">
                      <span>Email Me:</span>
                      <a href="#">hello@diego.com</a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <p>
                      Interested in working with me? Submit your <br />
                      project inquiry using the form below.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ContactCategory />

            <form>
              <h4 className="contact-category-title">Request A Quote</h4>
              <Row className="g-4 mb-5">
                <Col md>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Enter Name"
                  >
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
        </div>
      </div>
      <FooterService />
    </>
  );
};

export default Contact;
