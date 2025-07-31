import React, { useState, useRef, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  useEffect(() => {
    if (done) {
      const timer = setTimeout(() => setDone(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [done]);

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleChange}
            />
            {notDone && (
              <span className="not-done">
                 Please, fill all the input fields.
              </span>
            )}
            <Button type="submit" className="button" disabled={done}>
              Send
            </Button>
            {done && (
              <span className="done">
                 Your message was sent successfully! <br />
                I appreciate you reaching out. If this was a test, rest assured everything is working perfectly. <br />
                For serious inquiries or collaborations, I’ll get back to you as soon as possible. <br />
                 You can also connect with me on{' '}
                <a
                  href="https://www.linkedin.com/in/omar-khaled-20210317b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  LinkedIn
                </a>.
              </span>
            )}
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
