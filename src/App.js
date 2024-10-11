import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Properties from './pages/Properties';
import Services from './pages/Services';
import About from './pages/About';
import Tools from './pages/Tools';
import Contact from './pages/Contact';
import NavBar from './components/Navbar/NavBar';
import BondRepaymentCalculator from './components/BondRepaymentCalculator/BondRepaymentCalculator';
import ListYourProperty from './components/ListYourProperty/ListYourProperty';
import MarketEstimate from './components/MarketEstimate/MarketEstimate';
import PropertyDetails from './pages/PropertyDetails';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/tools' element={<Tools />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        <Route
          path='/bond-repayment-calculator'
          element={<BondRepaymentCalculator />}
        />
        <Route path='/list-your-property' element={<ListYourProperty />} />
        <Route path='/market-estimate' element={<MarketEstimate />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
