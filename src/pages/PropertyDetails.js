import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import MortgageCalculator from "../components/MortgageCalculator/MortgageCalculator";
import "../styles/PropertyDetails.css";
import "leaflet/dist/leaflet.css";
import Meta from "../components/Meta";
import Share from "../components/Share";
import { Alert } from "../components/Alert";
import { HttpClient } from "../utils/HttpClient";
import {
  HeadingSecondary,
  PageHeaderOverlay,
  PageHeaderContainer,
} from "../components/HeadingElements";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    // interested: false,
    viewing_date_time: "",
    message: "",
  });

  const [relatedProperties, setRelatedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      const httpClient = new HttpClient();
      try {
        const response = await httpClient.get(`/properties/${id}`);
        const propertyData = response.data;
        setProperty(propertyData);
        setFormData((prevData) => ({
          ...prevData,
          seller_id: propertyData.seller_id,
        }));
      } catch (error) {
        console.error("Error fetching property:", error);
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  useEffect(() => {
    if (property) {
      const fetchRelatedProperties = async () => {
        const httpClient = new HttpClient();
        try {
          const response = await httpClient.get(
            `/properties/all?category=${property.category}`
          );
          setRelatedProperties(
            response.data.filter((item) => item.id !== property.id)
          );
        } catch (error) {
          console.error("Error fetching related properties:", error);
        }
      };

      fetchRelatedProperties();
    }
  }, [property]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Handle next image navigation
  const handleNextImage = () => {
    if (property && property.Images.length > 0) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % property.Images.length
      );
    }
  };

  // Handle previous image navigation
  const handlePreviousImage = () => {
    if (property && property.Images.length > 0) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + property.Images.length) % property.Images.length
      );
    }
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const httpClient = new HttpClient();
    try {
      await httpClient.post(`/properties/${id}/interestedBuyer`, formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        // interested: false,
        viewing_date_time: "",
        message: "",
      });
      setSuccessMessage("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("Failed to send message.");
    }
  };

  if (loading) {
    return (
      <div className="loader">
        <p>Loading...</p>
      </div>
    );
  }

  if (!property) {
    return <div>Property not found</div>;
  }

  const handleCloseAlert = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <>
      {property && (
        <Meta
          title={property.property_name}
          image={property.Images[currentImageIndex]?.url}
          description={property.description}
        />
      )}
      <PageHeaderContainer>
        <PageHeaderOverlay />
        <HeadingSecondary fontColor="#fff">
          {property.property_name}
        </HeadingSecondary>
      </PageHeaderContainer>
      <div className="details_properties-page">
        <div className="property-details-wrapper">
          <div className="details-container property-main">
            <div className="property-images">
              <div className="main-image">
                <img
                  src={property.Images[currentImageIndex]?.url}
                  alt={property.property_name}
                />
              </div>
              <div className="image-navigation">
                <button onClick={handlePreviousImage}>Previous</button>
                <button onClick={handleNextImage}>Next</button>
              </div>

              <div className="thumbnail-images">
                {property.Images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={`Thumbnail ${index + 1}`}
                    className={currentImageIndex === index ? "active" : ""}
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
              </div>

              <Share />
            </div>

            <div className="property-info">
              <div className="property-info-container">
                <h2>{property.category}</h2>
                <p className="property-address">
                  Location: {property.street_name}, {property.house_number},{" "}
                  {property.town}
                </p>
                <p className="property-price">Price: N$ {property.price}</p>

                {/* Add Posted Date */}
                <p className="property-posted-details-page">
                  Posted on:{" "}
                  {new Date(property.created_at).toLocaleDateString()}
                </p>

                <div className="property-details">
                  <span className="property-details-row--container">
                    <FaBed /> {property.bedrooms}
                  </span>
                  <span className="property-details-row--container">
                    <FaBath /> {property.bathrooms}
                  </span>
                  <span className="property-details-row--container">
                    <FaCar /> {property.parking}
                  </span>
                  <span className="property-details-row--container">
                    <BiArea /> {property.land_size} sq. ft
                  </span>
                </div>
              </div>

              <div className="property-description">
                <button
                  onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                  className="accordion-button"
                >
                  {isDescriptionOpen ? "Hide Description" : "Show Description"}
                </button>
                {isDescriptionOpen && (
                  <div className="accordion-content">
                    {property.description.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* <div className='property-otherdetails-container'>
                <h2>Other Details</h2>
                <div className='property-details-column'>
                  <div className='property-details-row'>
                    <p>Building Age: {property.buildingAge}</p>
                    <p>Parking: {property.parking}</p>
                    <p>Cooling: {property.cooling}</p>
                  </div>
                  <div className='property-details-row'>
                    <p>Heating: {property.heating}</p>
                    <p>Sewer: {property.sewer}</p>
                    <p>Water: {property.water}</p>
                  </div>
                  <div className='property-details-row'>
                    <p>Exercise Room: {property.exerciseRoom}</p>
                    <p>Storage Room: {property.storageRoom}</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="details-container property-agent">
            <div className="contact-form contact-agent">
              <h3>Contact Agent</h3>
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
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="name"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="phone"
                    required
                  />
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="message"
                  ></textarea>
                </div>
                {/* <div className='form-group'>
                  <label htmlFor='interested'>Interested:</label>
                  <input
                    type='checkbox'
                    id='interested'
                    checked={formData.interested}
                    onChange={handleChange}
                  />
                </div> */}
                <div className="form-group">
                  <label htmlFor="viewing_date_time">
                    Viewing Date & Time:
                  </label>
                  <input
                    type="datetime-local"
                    id="viewing_date_time"
                    value={formData.viewing_date_time}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit">Send Request</button>
              </form>
            </div>
            <MortgageCalculator propertyPrice={property.price} />
          </div>
        </div>
      </div>
      {/* <div className='related-section'>
        <h2>Related Properties</h2>
        <div className='related-properties '>
          {relatedProperties.map((relatedProperty) => (
            <Link
              key={relatedProperty.id}
              to={`/property/${relatedProperty.id}`}
              className='related-property-card'>
              {relatedProperty.Images && relatedProperty.Images.length > 0 ? (
                <img
                  src={relatedProperty.Images[0].url}
                  alt={relatedProperty.property_name}
                  className='related-property-image'
                />
              ) : (
                <div className='no-image-placeholder'>No Image Available</div>
              )}
              <div className='related-property-info'>
                <h3>{relatedProperty.property_type}</h3>
                <p>N${relatedProperty.price}</p>
                <p>
                  {relatedProperty.street_name}, {relatedProperty.house_number}
                </p>
                <div className='property-details'>
                  <span className='property-details-row--container'>
                    <FaBed /> {relatedProperty.bedrooms}
                  </span>
                  <span className='property-details-row--container'>
                    <FaBath /> {relatedProperty.bathrooms}
                  </span>
                  <span className='property-details-row--container'>
                    <FaCar /> {relatedProperty.garage}
                  </span>
                  <span className='property-details-row--container'>
                    <BiArea /> {relatedProperty.area_measurement}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default PropertyDetails;
