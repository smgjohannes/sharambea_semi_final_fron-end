import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  const { onSearch } = props;
  const [propertyType, setPropertyType] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch({ propertyType, type, location });
  };

  return (
    <form className='search-form hero-search' onSubmit={handleSubmit}>
      <div className='search-form-container'>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}>
          <option value=''>Property Type</option>
          <option value='apartment/flat'>apartment/flat</option>
          <option value='house'>House</option>
          <option value='vacant land/plot'>Vacant land/Plot</option>
          <option value='townhouse'>Townhouse</option>
          <option value='industrial property'>Industrial Property</option>
          <option value='commercial property'>Commercial Property</option>
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className='select-container'>
          <option value=''>Type</option>
          <option value='rent'>To Rent</option>
          <option value='sale'>For Sale</option>
        </select>
        <input
          className='input-section'
          type='text'
          placeholder='Location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
