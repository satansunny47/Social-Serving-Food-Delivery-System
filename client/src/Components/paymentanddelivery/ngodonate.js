import "./ngopay.css";
// import { useState } from "react";
const NGOdonate = ({ newcharge }) => {
  return (
    <div className="payment">
      <div className="money">Rs. {newcharge}</div>
      <form>
        <button
          type="submit"
          className="pay"
          onClick={() => {
            window.alert("Thank you! Food will be delivered to the NGO soon");
          }}
        >
          Pay Online
        </button>
      </form>
    </div>
  );
};
export default NGOdonate;