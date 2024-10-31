import React from "react";
import SearchForm from "../components/searchForm/SearchForm";
import "../styles/Home.css";
import FeaturedProperties from "./FeaturedProperties";
import CategorySection from "./CategorySection";
import { About } from "../components/About/About";

const Home = () => {
  const handleSearch = (criteria) => {
    const { propertyType, type, location } = criteria;
    window.location.href = `/properties?propertyType=${propertyType}&type=${type}&location=${location}`;
  };

  return (
    <div className="main_home_conatiner">
      <div className="hero">
        <div className="hero-overlay"></div>
        <h1 className="hero-title">Find your dream home</h1>
        <SearchForm onSearch={handleSearch} />
      </div>
      <div className="home-main--container">
        <FeaturedProperties />
        <CategorySection />
        <About />
      </div>
    </div>
  );
};

export default Home;
