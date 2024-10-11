import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/FeaturedProperties.css';
import { FaBed, FaBath } from 'react-icons/fa';
import { BiArea } from 'react-icons/bi';
import { HttpClient } from '../utils/HttpClient';

const FeaturedProperties = ({ searchCriteria }) => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);
  const [properties, setProperties] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const httpClient = new HttpClient();
    const fetchProperties = async () => {
      try {
        const response = await httpClient.get(`/properties/all`);
        const limitedProperties = response.data.slice(0, 5);
        setProperties(limitedProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCenterSlidePercentage(100);
      } else {
        setCenterSlidePercentage(33.33);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [searchCriteria]);

  return (
    <div className='featured-properties'>
      <h2>Featured Properties</h2>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={centerSlidePercentage}
        showStatus={true}
        showIndicators={true}
        className='property-carousel'>
        {properties.map((property) => (
          <div key={property.id} className='property-card'>
            <Link
              to={`/property/${property.id}`}
              className='featuredProperty-page-card'>
              <img
                src={property.Images[currentImageIndex]?.url}
                alt={property.property_name}
              />
              <div className='property-info'>
                <span
                  className={`property-type ${
                    property.featured ? 'featured' : ''
                  }`}>
                  {property.type}
                </span>
                <span className='property-price'>{property.price}</span>
                {property.priceDetail && (
                  <span className='property-price-detail'>
                    {property.priceDetail}
                  </span>
                )}
                <h3 className='property-name'>{property.name}</h3>
                <p className='property-address'>
                  {property.street_name}, {property.house_number},{' '}
                  {property.town}
                </p>
                <div className='property-details'>
                  <span className='property-detail'>
                    <FaBed /> {property.bedrooms}
                  </span>
                  <span className='property-detail'>
                    <FaBath /> {property.bathrooms}
                  </span>
                  <span className='property-detail'>
                    <BiArea /> {property.land_size} sq. ft
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedProperties;
