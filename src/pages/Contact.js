import React, { useState } from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhone,
  faHome,
  faMessage,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { Alert } from '../components/Alert';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
    to_name: 'Sharambea',
    to_email: 'smgjohannes@gmail.com',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:4343/api/v1/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccessMessage('Message sent successfully!');
        setFormData({
          ...formData,
          from_name: '',
          from_email: '',
          subject: '',
          message: '',
        });
      } else {
        setErrorMessage('Failed to send message.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const handleCloseAlert = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  return (
    <div className='contact-container-main'>
      <div className='contact-container-title'>
        <div className='contact-container-title-overlay'></div>
        <h2>Feel free to contact us</h2>
      </div>
      <div className='contact-container'>
        <div className='contact-left'>
          <h1>We Provide The Most Suitable And Quality Real Estate.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
            tristique metus proin id lorem odio.
          </p>
          <div className='contact-info'>
            <div className='contact-info-item'>
              <i>
                {' '}
                <FontAwesomeIcon icon={faHouse} />
              </i>
              <div>
                <p>Office address</p>
                <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
              </div>
            </div>
            <div className='contact-info-item'>
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <div>
                <p>Office phone</p>
                <p>314-555-0123</p>
              </div>
            </div>
            <div className='contact-info-item'>
              <i>
                {' '}
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <div>
                <p>Email us</p>
                <p>Sharambeaproperties@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-right'>
          <h2>Contact us</h2>
          <p>We will respond as soon as we receive your message.</p>
          {successMessage && (
            <Alert
              message={successMessage}
              type={'success'}
              onClose={handleCloseAlert}
            />
          )}
          {errorMessage && (
            <Alert
              message={errorMessage}
              type={'error'}
              onClose={handleCloseAlert}
            />
          )}
          <form className='form-container ' onSubmit={handleSubmit}>
            <div className='form-group-row'>
              <div className='form-group form-group-column'>
                <label>Your name</label>
                <div className='input-with-icon'>
                  <FontAwesomeIcon icon={faUser} />
                  <input
                    type='text'
                    placeholder='Your name'
                    name='from_name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='form-group form-group-column'>
                <label>Email</label>
                <div className='input-with-icon'>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input
                    type='email'
                    placeholder='Email'
                    name='from_email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className='form-group form-group-column'>
              <label>Subject</label>
              <div className='input-with-icon'>
                <FontAwesomeIcon icon={faHome} />
                <input
                  type='text'
                  placeholder='Subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group form-group-column'>
              <label>Message</label>
              <div className='input-with-icon'>
                <FontAwesomeIcon icon={faMessage} />
                <textarea
                  placeholder='Your message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}></textarea>
              </div>
            </div>
            <button type='submit'>Send Request</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
