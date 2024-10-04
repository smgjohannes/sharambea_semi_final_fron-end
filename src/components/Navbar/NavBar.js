import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../../styles/Navbar.css';
import logo from '../../assets/images/logo1.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false); // Close dropdown when the drawer is toggled
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false); // Close dropdown when a link is clicked
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='siteNav'>
      <div className='container'>
        <div className='menuBgWrap'>
          <div className='site-navigation'>
            <Link to='/'>
              <img className='logo' src={logo} alt='Sharambea Properties' />
            </Link>
            <ul className={`siteMenu ${isOpen ? 'open' : ''}`}>
              <li className='siteMenuItem'>
                <Link to='/' className='siteMenuLink' onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className='siteMenuItem'>
                <Link
                  to='/properties'
                  className='siteMenuLink'
                  onClick={closeMenu}>
                  Properties
                </Link>
              </li>
              <li className='siteMenuItem'>
                <Link
                  to='/services'
                  className='siteMenuLink'
                  onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li className='siteMenuItem'>
                <Link to='/about' className='siteMenuLink' onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className='siteMenuItem'>
                <span className='siteMenuLink' onClick={toggleDropdown}>
                  Tools
                </span>
                <ul className={`dropdownMenu ${isDropdownOpen ? 'open' : ''}`}>
                  <li>
                    <Link
                      to='/bond-repayment-calculator'
                      className='dropdownItem'
                      onClick={closeMenu}>
                      Bond Repayment Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/home-loan-services'
                      className='dropdownItem'
                      onClick={closeMenu}>
                      Home Loan Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/affordability-calculator'
                      className='dropdownItem'
                      onClick={closeMenu}>
                      Affordability Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/list-your-property'
                      className='dropdownItem'
                      onClick={closeMenu}>
                      List/Request Property
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/market-estimate'
                      className='dropdownItem'
                      onClick={closeMenu}>
                      Market Estimate
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/property-alerts'
                      className='dropdownItem'
                      onClick={closeMenu}>
                      Property Alerts
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='siteMenuItem'>
                <Link
                  to='/contact'
                  className='siteMenuLink'
                  onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <div
              className='burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none'
              onClick={toggleMenu}>
              {isOpen ? <FiX /> : <FiMenu />}
            </div>
          </div>
          <div className={`drawer ${isOpen ? 'open' : ''}`}>
            <ul className='drawerMenu'>
              <li className='drawerMenuItem'>
                <Link to='/' className='drawerMenuLink' onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className='drawerMenuItem'>
                <Link
                  to='/properties'
                  className='drawerMenuLink'
                  onClick={closeMenu}>
                  Properties
                </Link>
              </li>
              <li className='drawerMenuItem'>
                <Link
                  to='/services'
                  className='drawerMenuLink'
                  onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li className='drawerMenuItem'>
                <Link
                  to='/about'
                  className='drawerMenuLink'
                  onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className='drawerMenuItem'>
                <span className='drawerMenuLink' onClick={toggleDropdown}>
                  Tools
                </span>
                <ul className={`dropdownMenu ${isDropdownOpen ? 'open' : ''}`}>
                  <li>
                    <Link
                      to='/bond-repayment-calculator'
                      className='dropdownItem'
                      onClick={closeMenu}>
                      Bond Repayment Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/home-loan-services'
                      className='dropdownItem'
                      onClick={closeMenu}>
                      Home Loan Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/affordability-calculator'
                      className='dropdownItem'
                      onClick={closeMenu}>
                      Affordability Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/list-your-property'
                      className='dropdownItem'
                      onClick={closeMenu}>
                      List/Request Property
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/market-estimate'
                      className='dropdownItem'
                      onClick={closeMenu}>
                      Market Estimate
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/property-alerts'
                      className='dropdownItem'
                      onClick={closeMenu}>
                      Property Alerts
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='drawerMenuItem'>
                <Link
                  to='/contact'
                  className='drawerMenuLink'
                  onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
