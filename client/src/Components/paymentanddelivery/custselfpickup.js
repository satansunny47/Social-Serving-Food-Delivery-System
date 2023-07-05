import "./ngopay.css";
// import { useState } from "react";
const Custselfpickup = ({ charge }) => {
  return (
    <div className="payment">
      <div className="money">Rs. {charge}</div>
      <form>
        <button
          type="submit"
          className="pay"
          onClick={() => {
            window.alert(
              "Thank you! Please collect your food from the restaurant"
            );
          }}
        >
          Pay Online
        </button>
      </form>
    </div>
  );
};
export default Custselfpickup;