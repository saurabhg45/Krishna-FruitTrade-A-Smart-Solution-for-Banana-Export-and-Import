import React from "react";

const CurrencySelector = ({ onCurrencyChange }) => (
  <div>
    <h3>Select Currency</h3>
    <select onChange={(e) => onCurrencyChange(e.target.value)}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="INR">INR</option>
    </select>
  </div>
);

export default CurrencySelector;
