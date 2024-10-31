import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "antd";
import { FiMenu, FiX } from "react-icons/fi";
import "../../styles/Navbar.css";
import logo from "../../assets/images/logo1.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false);
    setIsPropertyDropdownOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsPropertyDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const togglePropertyDropdown = () => {
    setIsPropertyDropdownOpen(!isPropertyDropdownOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="siteNav">
      <div className="container">
        <div className="menuBgWrap">
          <div className="site-navigation">
            <Link to="/">
              <img className="logo" src={logo} alt="Sharambea Properties" />
            </Link>
            <ul className={`siteMenu ${isOpen ? "open" : ""}`}>
              <li className="siteMenuItem">
                <Link
                  to="/"
                  className={`siteMenuLink ${isActive("/") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              <li className="siteMenuItem">
                <span className="siteMenuLink" onClick={togglePropertyDropdown}>
                  Properties
                </span>
                <ul
                  className={`dropdownMenu ${
                    isPropertyDropdownOpen ? "open" : ""
                  }`}
                >
                  <li className="siteMenuItem">
                    <ul
                      className={`dropdownMenu ${
                        isPropertyDropdownOpen ? "open" : ""
                      }`}
                    >
                      <li>
                        <Link
                          to="/properties?property_type=sale"
                          className={`dropdownItem ${
                            isActive("/properties?property_type=sale")
                              ? "active"
                              : ""
                          }`}
                          onClick={closeMenu}
                        >
                          For Sale
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/properties?property_type=rent"
                          className={`dropdownItem ${
                            isActive("/properties?property_type=rent")
                              ? "active"
                              : ""
                          }`}
                          onClick={closeMenu}
                        >
                          For Rent
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="siteMenuItem">
                <Link
                  to="/services"
                  className={`siteMenuLink ${
                    isActive("/services") ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li className="siteMenuItem">
                <Link
                  to="/about"
                  className={`siteMenuLink ${
                    isActive("/about") ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="drawerMenuItem">
                <span className="drawerMenuLink" onClick={toggleDropdown}>
                  Tools
                </span>
                <ul className={`dropdownMenu ${isDropdownOpen ? "open" : ""}`}>
                  <li>
                    <Link
                      to="/bond-repayment-calculator"
                      className={`dropdownItem ${
                        isActive("/bond-repayment-calculator") ? "active" : ""
                      }`}
                      onClick={closeMenu}
                    >
                      Bond Repayment Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home-loan-services"
                      className={`dropdownItem ${
                        isActive("/home-loan-services") ? "active" : ""
                      }`}
                      onClick={closeMenu}
                    >
                      Home Loan Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/affordability-calculator"
                      className={`dropdownItem ${
                        isActive("/affordability-calculator") ? "active" : ""
                      }`}
                      onClick={closeMenu}
                    >
                      Affordability Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/list-your-property"
                      className={`dropdownItem ${
                        isActive("/list-your-property") ? "active" : ""
                      }`}
                      onClick={closeMenu}
                    >
                      List/Request Property
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/market-estimate"
                      className={`dropdownItem ${
                        isActive("/market-estimate") ? "active" : ""
                      }`}
                      onClick={closeMenu}
                    >
                      Market Estimate
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/property-alerts"
                      className={`dropdownItem ${
                        isActive("/property-alerts") ? "active" : ""
                      }`}
                      onClick={closeMenu}
                    >
                      Property Alerts
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="siteMenuItem">
                <Link
                  to="/contact"
                  className={`siteMenuLink ${
                    isActive("/contact") ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Ant Design Drawer */}
            <Drawer
              placement="right"
              onClose={closeMenu}
              open={isOpen}
              width={300}
              className="DrawerMenu"
            >
              <ul className="drawerMenu">
                <li className="drawerMenuItem">
                  <Link
                    to="/"
                    className={`drawerMenuLink ${
                      isActive("/") ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="drawerMenuItem">
                  <span
                    className="drawerMenuLink"
                    onClick={togglePropertyDropdown}
                  >
                    Properties
                  </span>
                  {isPropertyDropdownOpen && (
                    <ul className="dropdownMenu">
                      <li>
                        <Link
                          to="/properties?property_type=sale"
                          className={`dropdownItem ${
                            isActive("/properties?property_type=sale")
                              ? "active"
                              : ""
                          }`}
                          onClick={closeMenu}
                        >
                          For Sale
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/properties?property_type=rent"
                          className={`dropdownItem ${
                            isActive("/properties?property_type=rent")
                              ? "active"
                              : ""
                          }`}
                          onClick={closeMenu}
                        >
                          For Rent
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="drawerMenuItem">
                  <Link
                    to="/services"
                    className={`drawerMenuLink ${
                      isActive("/services") ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    Services
                  </Link>
                </li>
                <li className="drawerMenuItem">
                  <Link
                    to="/about"
                    className={`drawerMenuLink ${
                      isActive("/about") ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </li>
                <li className="drawerMenuItem">
                  <span className="drawerMenuLink" onClick={toggleDropdown}>
                    Tools
                  </span>
                  {isDropdownOpen && (
                    <ul className="dropdownMenu">
                      <li>
                        <Link
                          to="/bond-repayment-calculator"
                          className={`dropdownItem ${
                            isActive("/bond-repayment-calculator")
                              ? "active"
                              : ""
                          }`}
                          onClick={closeMenu}
                        >
                          Bond Repayment Calculator
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/home-loan-services"
                          className={`dropdownItem ${
                            isActive("/home-loan-services") ? "active" : ""
                          }`}
                          onClick={closeMenu}
                        >
                          Home Loan Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/affordability-calculator"
                          className={`dropdownItem ${
                            isActive("/affordability-calculator")
                              ? "active"
                              : ""
                          }`}
                          onClick={closeMenu}
                        >
                          Affordability Calculator
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/list-your-property"
                          className={`dropdownItem ${
                            isActive("/list-your-property") ? "active" : ""
                          }`}
                          onClick={closeMenu}
                        >
                          List/Request Property
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/market-estimate"
                          className={`dropdownItem ${
                            isActive("/market-estimate") ? "active" : ""
                          }`}
                          onClick={closeMenu}
                        >
                          Market Estimate
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/property-alerts"
                          className={`dropdownItem ${
                            isActive("/property-alerts") ? "active" : ""
                          }`}
                          onClick={closeMenu}
                        >
                          Property Alerts
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="drawerMenuItem">
                  <Link
                    to="/contact"
                    className={`drawerMenuLink ${
                      isActive("/contact") ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Drawer>

            {/* Burger Icon for Menu Toggle */}
            <div
              className="burger light float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
              onClick={toggleMenu}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
