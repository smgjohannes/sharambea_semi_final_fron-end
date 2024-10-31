import React, { useState } from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faHome,
  faMessage,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Alert } from "../components/Alert";
import { HttpClient } from "../utils/HttpClient";
import {
  HeadingSecondary,
  PageHeaderOverlay,
  PageHeaderContainer,
} from "../components/HeadingElements";
import { MainContainer } from "../components/Styles";
const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
    to_name: "Sharambea",
    to_email: "smgjohannes@gmail.com",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const httpClient = new HttpClient();
    e.preventDefault();
    try {
      const response = await httpClient.post(
        "/email/send",
        JSON.stringify(formData)
      );
      setSuccessMessage("Message sent successfully!");
      setFormData({
        ...formData,
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleCloseAlert = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div className="contact-container-main">
      <PageHeaderContainer>
        <PageHeaderOverlay />
        <HeadingSecondary fontColor="#fff">
          Feel free to contact us
        </HeadingSecondary>
      </PageHeaderContainer>
      <MainContainer>
        <div className="contact-container">
          <div className="contact-left">
            <h1>
              We Provide The Most Suitable And Quality Real Estate Services.
            </h1>
            <p>
              Contact us for the best deals on properties. Whether you're
              buying, selling, or renting, we're here to assist you with your
              real estate needs.
            </p>
            <div className="contact-info">
              <div className="contact-info-item">
                <i>
                  <FontAwesomeIcon icon={faHouse} />
                </i>
                <div>
                  <p>Postal address</p>
                  <p>P.O Box 21889, Windhoek</p>
                </div>
              </div>
              <div className="contact-info-item">
                <i>
                  <FontAwesomeIcon icon={faPhone} />
                </i>
                <div>
                  <p>phone</p>
                  <p>+264 85 3833201</p>
                </div>
              </div>
              <div className="contact-info-item">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <div>
                  <p>Email us</p>
                  <p>chelsea@sharambeaprop.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <h2>Contact us</h2>
            <p>We will respond as soon as we receive your message.</p>
            {successMessage && (
              <Alert
                message={successMessage}
                type={"success"}
                onClose={handleCloseAlert}
              />
            )}
            {errorMessage && (
              <Alert
                message={errorMessage}
                type={"error"}
                onClose={handleCloseAlert}
              />
            )}
            <form className="form-container " onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-group form-group-column">
                  <label>Your name</label>
                  <div className="input-with-icon">
                    <FontAwesomeIcon icon={faUser} />
                    <input
                      type="text"
                      placeholder="Your name"
                      name="from_name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group form-group-column">
                  <label>Email</label>
                  <div className="input-with-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input
                      type="email"
                      placeholder="Email"
                      name="from_email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group form-group-column">
                <label>Subject</label>
                <div className="input-with-icon">
                  <FontAwesomeIcon icon={faHome} />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group form-group-column">
                <label>Message</label>
                <div className="input-with-icon">
                  <FontAwesomeIcon icon={faMessage} />
                  <textarea
                    placeholder="Your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <button type="submit">Send Request</button>
            </form>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Contact;
