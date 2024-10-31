import React from "react";
import { FaHome, FaBuilding, FaChartLine, FaBullhorn } from "react-icons/fa";
import "../styles/Services.css";
import {
  HeadingSecondary,
  PageHeaderOverlay,
  PageHeaderContainer,
} from "../components/HeadingElements";
import { MainContainer } from "../components/Styles";
const Services = () => {
  return (
    <>
      <div>
        <PageHeaderContainer>
          <PageHeaderOverlay />
          <HeadingSecondary fontColor="#fff">Our services</HeadingSecondary>
        </PageHeaderContainer>
      </div>
      <MainContainer>
        <div className="services-container">
          <div className="service-card">
            <FaHome className="service-icon" />
            <h3>Real estate transactions</h3>
            <p>
              Real estate companies can help with the purchase or sale of
              residential, commercial, and industrial properties. They assist in
              finding properties, negotiating, drafting legal documents, and
              finalizing transactions.
            </p>
          </div>
          <div className="service-card">
            <FaBuilding className="service-icon" />
            <h3>Property Management</h3>
            <p>
              Property management services are offered by real estate companies
              to benefit property owners. These services handle tasks including
              rent collection, tenant screening, property maintenance, and lease
              negotiations.
            </p>
          </div>
        </div>
        <div className="services-container">
          <div className="service-card">
            <FaChartLine className="service-icon" />
            <h3>Investing advice</h3>
            <p>
              They offer real estate investment advisory services to clients
              looking to invest. They offer data on market developments, future
              business prospects, and property values.
            </p>
          </div>
          <div className="service-card">
            <FaBullhorn className="service-icon" />
            <h3>Real Estate Marketing</h3>
            <p>
              Real estate brokers advertise homes for sale or rent using a range
              of media, including traditional advertising, social media, and
              online listings.
            </p>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Services;
