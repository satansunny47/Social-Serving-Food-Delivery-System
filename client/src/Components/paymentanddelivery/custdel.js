import "./ngopay.css";
import { useState } from "react";
import Custselfpickup from "./custselfpickup";
import Custpay from "./custpay";
const Custdel = ({ charge }) => {
  const [payonline, setpayonline] = useState(false);
  const [pay, setpay] = useState(false);
  return (
    <div>
      {!payonline && !pay && (
        <div className="payment">
          <form>
            <div className="options">
              <div>
                <input type="radio" name="deltype" id="pick" />
                Pick food from restaurant
              </div>
              <div>
                <input type="radio" name="deltype" id="delivery" />
                Get food delivered to your doorstep
              </div>
            </div>
            <button
              type="submit"
              className="pay"
              onClick={() => {
                if (document.getElementById("pick").checked) {
                  setpayonline(true);
                } else if (document.getElementById("delivery").checked) {
                  setpay(true);
                }
              }}
            >
              Confirm
            </button>
          </form>
        </div>
      )}
      {pay && <Custpay charge={charge} />}
      {payonline && <Custselfpickup charge={charge} />}
    </div>
  );
};
export default Custdel;