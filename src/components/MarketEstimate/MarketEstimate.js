import React, { useState } from 'react';
import './MarketEstimate.css';

function MarketEstimate() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className='list-your-property-container'>
      <div className='list-your-property-container-title'>
        <div className='list-your-property-container-title-overlay'></div>
        <h2>Market Estimate</h2>
      </div>
      <div className='market-estimate'>
        <form onSubmit={handleSubmit}>
          <h2>
            Request a free market estimate from one of our real estate experts
            to discover the value of your property.
          </h2>
          <div className='form-group'>
            <input
              type='text'
              id='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Name'
            />
            <input
              type='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              id='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Phone'
            />
            <input
              type='text'
              id='address'
              value={formData.address}
              onChange={handleChange}
              placeholder='Property Address or Area'
            />
          </div>
          <textarea
            id='comments'
            value={formData.comments}
            onChange={handleChange}
            placeholder='Comments'
          />
          <div className='form-group'>
            <input type='checkbox' id='robot' />
            <label htmlFor='robot'>I'm not a robot</label>
          </div>
          <p>By clicking on "submit" you agree to our privacy policy.</p>
          <button type='submit'>Send Your Details</button>
        </form>
      </div>
    </div>
  );
}

export default MarketEstimate;
