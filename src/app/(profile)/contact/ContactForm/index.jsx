import CTA from "@/app/components/CTA";
import SectionTitle from "@/app/components/SectionTitle";
import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import contact from "../../../../data/contact.page.json";
import ContactBuget from "./Client/ContactBuget";

const ContactForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [comment, setCommet] = useState("");
  // const [error, setError] = useState("");

  return (
    <>
    <div className="contact-wrapper">
      <div className="container">
        <Form >
          <h4 className="contact-category-title">
            {contact.requestForm.title}
          </h4>
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
              <FloatingLabel controlId="floatingInputGrid" label="Enter Email">
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

          <div className="contact-category">
            <SectionTitle
              title="Project budget (USD)"
              interClass="contact-category-title"
            />
            <ContactBuget />
          </div>
          <div className="footer-btn">
            <CTA
              linkClass="btn-black-xl"
              linkHref="/contact"
              linkText={contact.button.text}
            />
          </div>
        </Form>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
