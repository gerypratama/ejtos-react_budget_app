import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    dispatch({
      type: "CHG_CURRENCY",
      payload: selectedCurrency,
    });
  };

  return (
    <div className="alert alert-info">
      <span>Currency: </span>
      <select onChange={handleCurrencyChange}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default Currency;
