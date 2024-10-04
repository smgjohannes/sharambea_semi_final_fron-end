import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Pagination from '../components/Pagination/Pagination';
import '../styles/Properties.css';
import { FaBed, FaBath } from 'react-icons/fa';
import { BiArea } from 'react-icons/bi';

import Meta from '../components/Meta';

const Properties = () => {
  const navigation = useLocation();
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  useEffect(() => {
    const getQueryParams = () => {
      const searchParams = new URLSearchParams(navigation.search);
      return {
        propertyType: searchParams.get('propertyType'),
        type: searchParams.get('type'),
        location: searchParams.get('location'),
      };
    };

    const { propertyType, type, location } = getQueryParams();

    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:4343/api/v1/properties/all',
          {
            params: { propertyType, type, location },
          }
        );
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [navigation.search]);

  // Calculate the properties to display on the current page
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  // Calculate total pages
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  return (
    <>
      <Meta
        title={'Properties'}
        description={'Find your prefered properties'}
      />
      <div className='properties-page'>
        <div className='contact-container-title'>
          <div className='contact-container-title-overlay'></div>
          <h2>Available Properties</h2>
        </div>
        <div className='properties-page-list'>
          {currentProperties.map((property) => (
            <Link
              key={property.id}
              to={`/property/${property.id}`}
              className='property-page-card'>
              {property.Images && property.Images.length > 0 ? (
                <img src={property.Images[0].url} alt={property.name} />
              ) : (
                <div className='no-image-placeholder'>No Image Available</div>
              )}
              <div className='property-page-info'>
                <span
                  className={`property-page-type ${
                    property.featured ? 'featured-page' : ''
                  }`}>
                  {property.property_type}
                </span>
                <span className='property-page-price'>{property.price}</span>
                {property.price && (
                  <span className='property-page-price-detail'>{}</span>
                )}
                <h3 className='property-page-name'>{property.property_name}</h3>
                <p className='property-page-address'>
                  {property.house_number}, {property.street_name},{' '}
                  {property.suburb}, {property.town}
                </p>
                <div className='property-page-details'>
                  <span className='property-page-detail'>
                    <FaBed /> {property.bedrooms}
                  </span>
                  <span className='property-page-detail'>
                    <FaBath /> {property.bathrooms}
                  </span>
                  <span className='property-page-detail'>
                    <BiArea /> {property.area_measurement} sq. ft
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Properties;
