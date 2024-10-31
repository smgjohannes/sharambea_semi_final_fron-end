import styled from "styled-components";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const PropertyFilterContainer = styled.div`
  padding: 15px;
  max-height: 770px;
  overflow: auto;

  @media (max-width: 768px) {
    padding: 10px;
    max-height: none;
  }
`;

const TownFilter = styled.div`
  margin-bottom: 10px;
`;

const TownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  font-weight: bold;
  color: #284c87;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    color: #000;
  }
`;

const TownOptions = styled.ul`
  padding-left: 20px;
  list-style-type: disc;
`;

const TownOption = styled.li`
  padding: 5px 0;
  cursor: default;

  &:hover {
    cursor: pointer;
    color: #007bff;
  }
`;

const PropertyFilter = ({
  counts = [],
  selectedPropertyType,
  onSuburbSelect,
}) => {
  const [selectedTown, setSelectedTown] = useState(null);

  const handleTownClick = (town) => {
    setSelectedTown((prevTown) => (prevTown === town ? null : town));
  };
  const handleSuburbClick = (suburb) => {
    onSuburbSelect(suburb);
  };

  return (
    <PropertyFilterContainer>
      <h3>Search for residential properties by area</h3>
      {counts.map(({ town, suburbs }) => (
        <TownFilter key={town}>
          <TownHeader onClick={() => handleTownClick(town)}>
            <span>{town}</span>
            <span>
              {selectedTown === town ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </TownHeader>
          {selectedTown === town && (
            <TownOptions>
              {suburbs.map(({ suburb, propertyCount }) => (
                <TownOption
                  key={suburb}
                  onClick={() => handleSuburbClick(suburb)}
                >
                  {suburb} ({propertyCount})
                </TownOption>
              ))}
            </TownOptions>
          )}
        </TownFilter>
      ))}
    </PropertyFilterContainer>
  );
};

export default PropertyFilter;
