import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactSection = () => {



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
  if (submitted) {
    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 5000);
    return () => clearTimeout(timer);
  }
}, [submitted]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_yu967z8",
        "template_pq70w98",
        form.current,
        "D7zmfv3_WKw91pQbn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        },
        (error) => {
          console.log(error.text);
          setSending(false);
        }
      );
      
  };

  return (
    <div className="contact-section">
        
      <div className="contact-header">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">Feel free to drop me a message!</p>
      </div>

      <div className="contact-container">
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-button" disabled={sending}>
            {sending ? (
              <span className="airplane-animation">
                <i className="fa-solid fa-paper-plane"></i>
                <span className="sending-text">Sending...</span>
              </span>
            ) : (
              "Send Message"
            )}
          </button>



          {submitted && (
            <p className="contact-success">Success! Your message is on its way. <i class="fa-solid fa-circle-check"></i> </p>
          )}
        </form>

        <div className="contact-info">
          <h1>Let's Connect!</h1>
          <div className="contact-socials">
            <a
              href="https://github.com/Jeevan-2023"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jeevan-varghese-26265a280/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
   </div>
  );
};

export default ContactSection;
