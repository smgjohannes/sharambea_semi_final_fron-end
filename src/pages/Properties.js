import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "../components/Pagination/Pagination";
import Meta from "../components/Meta";
import PropertyCard from "../components/Property/Property";
import PropertyFilter from "../components/Filters/PropertyFilters";
import { HttpClient } from "../utils/HttpClient";
import {
  PropertiesPage,
  PropertiesPageList,
} from "../components/Property/PropertyElements";
import {
  HeadingSecondary,
  PageHeaderOverlay,
  PageHeaderContainer,
} from "../components/HeadingElements";
import { MainContainer } from "../components/Styles";
import { FlexContainer } from "../components/ContainerElements";

const Properties = () => {
  const location = useLocation();
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertyType, setPropertyType] = useState(null);
  const propertiesPerPage = 4;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setPropertyType(queryParams.get("type"));

    const fetchProperties = async () => {
      const httpClient = new HttpClient();
      const params = {
        property_type: queryParams.get("property_type"),
        category: queryParams.get("category"),
        location: queryParams.get("location"),
      };

      try {
        const response = await httpClient.get("/properties/all", { params });
        setProperties(response.data.properties); // Access properties array directly
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [location.search]);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  // Step 1: Extract town and suburb counts
  const counts = properties.reduce((acc, property) => {
    const { town, suburb } = property;

    // Check if the town exists in the accumulator
    if (!acc[town]) {
      acc[town] = {}; // Initialize the town if it doesn't exist
    }

    // Check if the suburb exists for the town
    if (!acc[town][suburb]) {
      acc[town][suburb] = 0; // Initialize the suburb count
    }

    // Increment the count for the suburb
    acc[town][suburb] += 1;
    return acc;
  }, {});

  // Convert counts into the desired format
  const countsArray = Object.entries(counts).map(([town, suburbs]) => ({
    town,
    suburbs: Object.entries(suburbs).map(([suburb, propertyCount]) => ({
      suburb,
      propertyCount,
    })),
  }));

  // Step 2: Handle suburb selection
  const handleSuburbSelect = (suburb) => {
    const filteredProperties = properties.filter(
      (property) => property.suburb === suburb
    );
    setProperties(filteredProperties); // Update state with filtered properties
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <>
      <Meta
        title={"Properties"}
        description={"Find your preferred properties"}
      />
      <div className="">
        <PageHeaderContainer>
          <PageHeaderOverlay />
          <HeadingSecondary fontColor="#fff">
            {propertyType === "sale"
              ? "Properties for Sale"
              : "Properties for Rent"}
          </HeadingSecondary>
        </PageHeaderContainer>
        <MainContainer>
          <PropertiesPage>
            <PropertiesPageList>
              <FlexContainer>
                {currentProperties.map((property) => (
                  <PropertyCard
                    flexBasis={44}
                    key={property.id}
                    propertyId={property.id}
                    imageUrl={property.Images?.[0]?.url || ""}
                    propertyType={property.property_type}
                    postedDate={new Date(
                      property.created_at
                    ).toLocaleDateString()}
                    category={property.category}
                    price={property.price}
                    name={property.name}
                    address={`${property.town}, ${property.suburb}`}
                    bedrooms={property.bedrooms}
                    bathrooms={property.bathrooms}
                    landSize={property.land_size}
                  />
                ))}
              </FlexContainer>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </PropertiesPageList>

            {/* Pass the formatted counts and onSuburbSelect to the PropertyFilter */}
            <PropertyFilter
              counts={countsArray}
              selectedPropertyType={propertyType}
              onSuburbSelect={handleSuburbSelect} // Pass the function
            />
          </PropertiesPage>
        </MainContainer>
      </div>
    </>
  );
};

export default Properties;
