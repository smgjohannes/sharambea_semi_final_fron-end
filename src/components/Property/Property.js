import React from "react";
import PropTypes from "prop-types";
import { FaBed, FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import {
  PropertyPageCard,
  PropertyImageContainer,
  PropertyCategory,
  PropertyPostedDate,
  PropertyPageInfo,
  PropertyPageType,
  PropertyPagePrice,
  PropertyPageName,
  PropertyPageAddress,
  PropertyPageDetails,
  PropertyPageDetail,
} from "./PropertyElements";
import { CardContainer, CardContent, CardWrapper } from "../Card/CardElements";

const PropertyCard = ({
  propertyId,
  imageUrl,
  category,
  postedDate,
  propertyType,
  price,
  name,
  address,
  bedrooms,
  bathrooms,
  landSize,
  ...props
}) => (
  <CardContainer flexBasis={props.flexBasis}>
    <PropertyPageCard to={`/property/${propertyId}`}>
      <PropertyImageContainer>
        {imageUrl ? (
          <img src={imageUrl} alt={name} />
        ) : (
          <div className="no-image-placeholder">No Image Available</div>
        )}
        <PropertyCategory>{propertyType}</PropertyCategory>
        <PropertyPostedDate>Posted on: {postedDate}</PropertyPostedDate>
      </PropertyImageContainer>
      <CardContent>
        <CardWrapper>
          <PropertyPageInfo>
            <PropertyPageType>{category}</PropertyPageType>
            <PropertyPagePrice>N$ {price}</PropertyPagePrice>
            <PropertyPageName>{name}</PropertyPageName>
            <PropertyPageAddress>{address}</PropertyPageAddress>
            <PropertyPageDetails>
              <PropertyPageDetail>
                <FaBed /> {bedrooms}
              </PropertyPageDetail>
              <PropertyPageDetail>
                <FaBath /> {bathrooms}
              </PropertyPageDetail>
              <PropertyPageDetail>
                <BiArea /> {landSize} sq. ft
              </PropertyPageDetail>
            </PropertyPageDetails>
          </PropertyPageInfo>
        </CardWrapper>
      </CardContent>
    </PropertyPageCard>
  </CardContainer>
);

PropertyCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  category: PropTypes.string.isRequired,
  postedDate: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string,
  town: PropTypes.string.isRequired,
  suburb: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  landSize: PropTypes.number.isRequired,
};

PropertyCard.defaultProps = {
  imageUrl: "",
  address: "",
};

export default PropertyCard;
