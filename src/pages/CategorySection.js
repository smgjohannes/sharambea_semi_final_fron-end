import React from "react";
import "../styles/CategorySection.css";
import { FaHome, FaBuilding, FaChartLine, FaBullhorn } from "react-icons/fa";
import { MainContainer } from "../components/Styles";

const CategorySection = () => {
  return (
    <div className="category-section">
      <MainContainer>
        <div>
          <div className="category-section-heaher">
            <h2>Core Services</h2>
          </div>

          <div className="categories">
            <div className="category">
              <div className="category-icon ">
                <i className="apartments-icon">
                  <FaHome />
                </i>
              </div>
              <h3>Residential Property Sales and Leasing</h3>
              <hr></hr>
              <p>
                Specializes in buying, selling, and renting homes, apartments,
                and luxury properties.
              </p>
            </div>
            <div className="category">
              <div className="category-icon ">
                <i className="garages-icon">
                  <FaChartLine />
                </i>
              </div>
              <h3>Commercial Property Services</h3>
              <hr></hr>
              <p>
                Offers expert assistance in leasing and selling office spaces,
                retail units, and commercial properties
              </p>
            </div>
            <div className="category">
              <div className="category-icon ">
                <i className="houses-icon">
                  <FaBuilding />
                </i>
              </div>
              <h3>Property Management</h3>
              <hr></hr>
              <p>
                Provides a range of management services, including tenant
                relations, rent collection, and maintenance.
              </p>
            </div>

            <div className="category">
              <div className="category-icon ">
                <i className="commercial-icon">
                  <FaBullhorn />
                </i>
              </div>
              <h3>Real Estate Investment Advisory</h3>
              <hr></hr>
              <p>
                Advises clients on profitable investment opportunities in real
                estate, market trends, and financial feasibility.
              </p>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default CategorySection;
