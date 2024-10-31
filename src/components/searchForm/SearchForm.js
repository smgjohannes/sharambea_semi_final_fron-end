import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HttpClient } from "../../utils/HttpClient";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [regions, setRegions] = useState([]);
  const dropdownRef = useRef(null);

  // Fetch regions from the backend
  useEffect(() => {
    const httpClient = new HttpClient();
    const fetchRegions = async () => {
      try {
        const response = await httpClient.get("/properties/regions");
        console.log("Fetched regions:", response.data); // Log only the data property
        setRegions(response.data); // Use response.data to get the array of regions
      } catch (error) {
        console.error("Failed to fetch regions:", error);
      }
    };

    fetchRegions();
  }, []);

  const handleLocationClick = () => {
    setDropdownVisible(!dropdownVisible);
    setFilteredOptions(regions); // Show all regions initially
  };

  const handleOptionClick = (option) => {
    setLocation(option);
    setDropdownVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams({
      property_type: type,
      category: propertyType,
      location,
    }).toString();

    navigate(`/properties?${params}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form className="search-form hero-search" onSubmit={handleSubmit}>
      <div className="search-form-container">
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">Category</option>
          <option value="apartment/flat">Apartment/Flat</option>
          <option value="house">House</option>
          <option value="vacant land/plot">Vacant Land/Plot</option>
          <option value="townhouse">Townhouse</option>
          <option value="industrial property">Industrial Property</option>
          <option value="commercial property">Commercial Property</option>
          <option value="farm">Farm</option>
        </select>

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Type</option>
          <option value="rent">To Rent</option>
          <option value="sale">For Sale</option>
        </select>

        <div className="dropdown" ref={dropdownRef}>
          <div className="input-section" onClick={handleLocationClick}>
            {location || "Select Location"}
          </div>

          {dropdownVisible && (
            <div className="dropdown-options">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div
                    key={index}
                    className="dropdown-option"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))
              ) : (
                <div className="dropdown-option">No locations found</div>
              )}
            </div>
          )}
        </div>

        <button className="search-button" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
