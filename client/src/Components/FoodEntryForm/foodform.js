import "./foodform.css";
import image from "./dummyimage.png";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Restpage from "../RestPage/Restpage";
const Foodform = ({ loginUserData }) => {
  const history = useHistory();
  const [goBackpage, setGoback] = useState(false);

  const [food, setFood] = useState({
    name: "", price: "", amount: "", type: "", description: "", restaurant: loginUserData.name, cat: "food"
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setFood({ ...food, [name]: value })
  }


  const postData = async (e) => {
    e.preventDefault();
    console.log("hello 1");
    const { name, price, amount, type, description, restaurant, cat } = food;
    const res = await fetch('http://localhost:3000/addfood', {
      method: "POST",
      headers: {
        "Content-Type": "application/json "
      },
      body: JSON.stringify({
        name, price, amount, type, description, restaurant, cat
      })
    });
    console.log("hello 2");
    console.log(res)

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Please enter proper food details");
      console.log("addfood error")
    }
    else {
      window.alert("Food added to the list");
      console.log("addfood sucessful");
      // history.goBack();

    }

    setGoback(true);

  }


  return (

    <div>
      {goBackpage && <Restpage loginUserData={loginUserData}/>}
      {!goBackpage &&
        <div className="profile">
          <div>
            <img src={image} className="profilephoto"></img>
          </div>
          <div>
            <form className="format">
              <div className="initial">
                <input
                  className="inputbox"
                  type="text"
                  value={food.name}
                  name="name"
                  onChange={handleInputs}
                  placeholder="Enter food name here ..."
                />
                <input
                  className="inputbox"
                  type="text"
                  value={food.price}
                  name="price"
                  onChange={handleInputs}
                  placeholder="Enter price per plate(Rs) ..."
                />
                <input
                  className="inputbox"
                  type="text"
                  value={food.amount}
                  name="amount"
                  onChange={handleInputs}
                  placeholder="Amount of food left(in plates) ..."
                />
                <input
                  className="inputbox"
                  type="text"
                  value={food.type}
                  name="type"
                  onChange={handleInputs}
                  placeholder="Enter type of food: veg or non-veg ... "
                />

                <input
                  className="description"
                  type="text"
                  value={food.description}
                  name="description"
                  onChange={handleInputs}
                  placeholder="Give some description ..."
                />
              </div>
              <div>
                <button type="submit" className="sub" onClick={postData} >Submit</button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  );
};
export default Foodform