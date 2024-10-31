import { Link } from "react-router-dom";
import styled from "styled-components";

const PropertiesPage = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 0;
  }
`;

const PropertiesPageHeader = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  text-align: center;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 55px 0 !important;
`;

const PropertiesPageList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const PropertyPageCard = styled(Link)`
  overflow: hidden;
  text-decoration: none;
  position: relative;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 223, 40, 0.589);
    transition: ease-in-out 0.3s;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PropertyImageContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;

const PropertyCategory = styled.div`
  position: absolute !important;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.9em;
`;

const PropertyPostedDate = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8em;
  font-style: italic;
`;

const PropertyPageInfo = styled.div`
  padding: 15px;
  color: #777;
`;

const PropertyPageType = styled.div`
  font-weight: bold;

  &.featured-page {
    color: red;
  }
`;

const PropertyPagePrice = styled.div`
  display: block;
  font-size: 1.2em;
  margin: 10px 0;
`;

const PropertyPriceDetail = styled.div`
  display: block;
  font-size: 0.9em;
  color: #777;
`;

const PropertyPageName = styled.div`
  margin: 10px 0 5px;
  text-align: left;
`;

const PropertyPageAddress = styled.div`
  font-size: 0.9em;
  color: #555;
  text-align: left;
`;

const PropertyPageDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const PropertyPageDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9em;
`;

export {
  PropertiesPage,
  PropertiesPageHeader,
  Pagination,
  PropertiesPageList,
  PropertyPageCard,
  PropertyImageContainer,
  PropertyCategory,
  PropertyPostedDate,
  PropertyPageInfo,
  PropertyPageType,
  PropertyPagePrice,
  PropertyPriceDetail,
  PropertyPageName,
  PropertyPageAddress,
  PropertyPageDetails,
  PropertyPageDetail,
};
