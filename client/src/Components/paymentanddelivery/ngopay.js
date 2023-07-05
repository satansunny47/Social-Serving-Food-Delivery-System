import "./ngopay.css";
const NGOpay = ({ charge }) => {

    return (

        <div className="payment">
            <div className="money">Rs. {charge}</div>
            <form>
                <div className="options">
                    <div>
                        <input type="radio" name="paytype" id="online" />
                        Pay online
                    </div>
                    <div>
                        <input type="radio" name="paytype" id="cash" />
                        Cash on Delivery
                    </div>
                </div>
                <button
                    type="submit"
                    className="pay"
                    onClick={() => {
                        if (
                            document.getElementById("online").checked ||
                            document.getElementById("cash").checked
                        ) {
                            window.alert("Thank you! The food will be delivered shortly");
                        } else {
                            document.getElementById("error").innerHTML =
                                "Please select a payment method";
                        }
                    }}
                >
                    Pay
                </button>
                <p id="error"></p>
            </form>
        </div>

    );
};
export default NGOpay;
