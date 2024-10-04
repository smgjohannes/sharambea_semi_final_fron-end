import React, { useState } from 'react';
import './BondRepaymentCalculator.css';

const BondRepaymentCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(1000000);
  const [deposit, setDeposit] = useState(0);
  const [originalTerm, setOriginalTerm] = useState(20);
  const [interestRate, setInterestRate] = useState(11.5);
  const [monthlyRepayments, setMonthlyRepayments] = useState(10664);
  const [extraPayment, setExtraPayment] = useState(0);
  const [newLoanTerm, setNewLoanTerm] = useState(20);
  const [savings, setSavings] = useState(0);

  const handleExtraPaymentChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setExtraPayment(value);
    calculateSavings(value);
  };

  const calculateSavings = (extraPayment) => {
    // Placeholder for the actual savings calculation logic
    const newTerm = originalTerm - extraPayment / 100; // Example logic
    const newSavings = extraPayment * 12 * (originalTerm - newTerm); // Example logic

    setNewLoanTerm(newTerm > 0 ? newTerm : 0);
    setSavings(newSavings > 0 ? newSavings : 0);
  };

  return (
    <div className='calculator-container'>
      <div className='calculator-container-title'>
        <div className='calculator-container-title-overlay'></div>
        <h2>Bond Repayment Calculator</h2>
      </div>
      <div className='calculator'>
        <h2>Calculate your monthly repayments on a home loan.</h2>
        <div className='calculator-input'>
          <label htmlFor='propertyValue'>Property value</label>
          <input
            type='number'
            id='propertyValue'
            value={propertyValue}
            onChange={(e) => setPropertyValue(parseFloat(e.target.value))}
          />
        </div>
        <div className='calculator-input'>
          <label htmlFor='deposit'>Deposit</label>
          <input
            type='number'
            id='deposit'
            value={deposit}
            onChange={(e) => setDeposit(parseFloat(e.target.value))}
          />
        </div>
        <div className='calculator-input'>
          <label htmlFor='originalTerm'>Original term</label>
          <input
            type='number'
            id='originalTerm'
            value={originalTerm}
            onChange={(e) => setOriginalTerm(parseFloat(e.target.value))}
          />
        </div>
        <div className='calculator-input'>
          <label htmlFor='interestRate'>Interest rate</label>
          <input
            type='number'
            id='interestRate'
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          />
        </div>
        <div className='calculator-input'>
          <label htmlFor='monthlyRepayments'>Monthly repayments</label>
          <input
            type='number'
            id='monthlyRepayments'
            value={monthlyRepayments}
            readOnly
          />
        </div>
        <h2>Calculate how much you can save with extra payments</h2>
        <div className='calculator-input'>
          <label htmlFor='extraPayment'>Extra monthly payment</label>
          <input
            type='number'
            id='extraPayment'
            value={extraPayment}
            onChange={handleExtraPaymentChange}
          />
        </div>
        <div className='calculator-output'>
          <div className='output-item'>
            <label>Your new loan term</label>
            <div>{newLoanTerm} Years</div>
          </div>
          <div className='output-item'>
            <label>You will save</label>
            <div>N$ {savings}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BondRepaymentCalculator;
