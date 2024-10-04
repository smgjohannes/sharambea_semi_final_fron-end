import React, { useState } from 'react';
import axios from 'axios';
import './ListYourProperty.css';

function ListYourProperty() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    price: '',
    location: '',
    description: '',
    category_type: '',
    property_type: '',
    images: [],
    proof_of_funds: null, // Updated: Change proof_of_funds to null to store the file
    pre_approval: '',
    date_of_moving_in: '',
  });

  const [propertyType, setPropertyType] = useState(''); // State to track property type selection
  const [error, setError] = useState(''); // State for error message

  const handleChange = (e) => {
    const { id, value, files } = e.target;

    if (files) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: files.length > 1 ? files : files[0], // Handle single and multiple file inputs
      }));
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }

    if (id === 'property_type') {
      setPropertyType(value); // Update property type state
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'images' && formData.images && formData.images.length > 0) {
        Array.from(formData.images).forEach((file) =>
          data.append('images', file)
        ); // Handle multiple image uploads
      } else if (formData[key] instanceof File) {
        data.append(key, formData[key]); // Handle file uploads like proof_of_funds
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        'http://127.0.0.1:4343/api/v1/requests',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 201) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          description: '',
          images: [],
          category_type: '',
          property_type: '',
          location: '',
          price: '',
          proof_of_funds: null,
          pre_approval: '',
          date_of_moving_in: '',
        });

        alert('Request sent successfully!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='list-your-property-container'>
      <div className='list-your-property-container-title'>
        <div className='list-your-property-container-title-overlay'></div>
        <h2>List Your Property</h2>
      </div>
      <div className='list-your-property'>
        <form onSubmit={handleSubmit}>
          <h2>
            List to sell or request a property with the help of our qualified
            real estate professionals.
          </h2>

          {error && <p className='error-message'>{error}</p>}
          <div className='form-group'>
            <input
              type='text'
              id='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Name'
              required
            />
            <input
              type='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              id='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Phone'
              required
            />
            <input
              type='text'
              id='price'
              value={formData.price}
              onChange={handleChange}
              placeholder='Estimated Asking Price'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              id='location'
              value={formData.location}
              onChange={handleChange}
              placeholder='Property location or Area'
              required
            />
          </div>
          <div className='form-group'>
            <select
              id='property_type'
              value={formData.property_type}
              onChange={handleChange}
              required>
              <option value='' disabled>
                Select a property type
              </option>
              <option value='rent'>Rent</option>
              <option value='sell'>Sell</option>
              <option value='buy'>Buy</option>
              <option value='comercial'>Comercial</option>
            </select>

            <select
              id='category_type'
              value={formData.category_type}
              onChange={handleChange}
              required>
              <option value='' disabled>
                Select a category type
              </option>
              <option value='house'>House</option>
              <option value='apartment'>Apartment</option>
              <option value='hotel'>Hotel</option>
              <option value='villa'>Villa</option>
              <option value='office'>Office</option>
            </select>
          </div>
          <textarea
            id='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='description'
            required
          />
          <div className='form-group'>
            <label htmlFor='images'>Upload Images:</label>
            <input
              type='file'
              id='images'
              onChange={handleChange}
              accept='image/*'
              multiple
            />
          </div>

          {/* Conditional fields for Buy */}
          {propertyType === 'buy' && (
            <div className='form-group'>
              <label htmlFor='proof_of_funds'>Proof Of funds:</label>
              <input
                type='file'
                id='proof_of_funds'
                onChange={handleChange}
                accept='image/*,application/pdf'
              />
            </div>
          )}

          {/* Conditional fields for Rent */}
          {propertyType === 'rent' && (
            <div className='form-group'>
              <label htmlFor='date_of_moving_in'>Date of Moving In:</label>
              <input
                type='date'
                id='date_of_moving_in'
                value={formData.date_of_moving_in}
                onChange={handleChange}
              />
            </div>
          )}

          <div className='form-group'>
            <input type='checkbox' id='robot' required />
            <label htmlFor='robot'>I'm not a robot</label>
          </div>
          <p>By clicking on "submit" you agree to our privacy policy.</p>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ListYourProperty;
