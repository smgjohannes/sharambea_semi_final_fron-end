import React, { useState } from 'react';
import './MortgageCalculator.css';
import { FaClipboard } from 'react-icons/fa';
const MortgageCalculator = ({ propertyPrice }) => {
  const [salePrice, setSalePrice] = useState(propertyPrice || '');
  const [downPayment, setDownPayment] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  // const handlePastePrice = () => {
  //   setSalePrice(propertyPrice);
  // };

  const calculateMortgage = () => {
    const principal = salePrice - downPayment;
    const interestPerMonth = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (
      (principal * interestPerMonth) /
      (1 - Math.pow(1 + interestPerMonth, -numberOfPayments))
    ).toFixed(2);

    setMonthlyPayment(monthlyPayment);
  };

  return (
    <div className='mortgage-calculator'>
      <h3>Mortgage Calculator</h3>
      <div className='form-group'>
        <input
          type='number'
          value={salePrice}
          onChange={(e) => setSalePrice(e.target.value)}
          placeholder='Sale Price'
        />

        <input
          type='number'
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
          placeholder='Down Payment'
        />
      </div>

      <div className='form-group'>
        <input
          type='number'
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          placeholder='Loan Term (Years)'
        />
        <input
          type='number'
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder='Interest Rate'
        />
      </div>

      <button className='calculate-button' onClick={calculateMortgage}>
        Calculate
      </button>
      {monthlyPayment && (
        <div className='monthly-payment'>
          <p>Monthly Payment: {monthlyPayment} N$</p>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;
