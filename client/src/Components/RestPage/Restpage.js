import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './restpage.css';
import foodImg from './food.png';
import Foodform from '../FoodEntryForm/foodform';

const Restpage = ({ loginUserData }) => {

    const [foodleft, setfoodleft] = useState(0);


    const [change, setChange] = useState(0);
    const [additempage, setAditempage] = useState(false);

    const tempObjects = [
        {
            "name": "Food1",
            "type": "Veg",
            "Description": "Arrays of objects don't stay the same all the time. We almost always need to manipulate them. So let's take a look at how we can add objects to an already existing array.",
            "price": 100,
            "amount": 7
        }

    ];
    const url = "http://localhost:3000/foodlist"
    const filteredList = [];
    const [foodList, setFoodList] = useState(tempObjects);


    const total = () => {
        var sum = 0;
        for (var i = 0; i < foodList.length; i++) {
            sum += foodList[i].amount;
        }
        setfoodleft(sum);
    };


    useEffect(() => {
        console.log("dgbvuydfyusfiuvdshiugviudrfhighdi");
        callProfilePage();
    }, [change])

    const callProfilePage = () => {

        axios.get(url)
            .then((response) => {
                // setUserData(response.data)
                console.log(response.data);
                const vari = response.data;

                for (let i = 0; i < vari.length; i++) {
                    console.log(vari[i].restaurant)
                    console.log(loginUserData)
                    if (vari[i].restaurant === loginUserData.name) {
                        filteredList.push(vari[i]);
                    }
                }
                setFoodList(filteredList);
                setChange(0);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (

        <div>
            {additempage && <Foodform loginUserData={loginUserData} />}
            {!additempage &&
                <div className="foodListBox">
                    <div className="food-upper">
                        <h2 className="foodlistname">MENU</h2>
                        {/* <Link to="/addfooditem"> */}
                        <button className="additemButton" onClick={() => {
                            setChange(1);
                            setAditempage(true);
                        }}>Add Item</button>
                        {/* </Link> */}
                    </div>
                    <div className="food-lower">
                        {foodList.map((food) => (
                            <div className="food-des">
                                <div className="food-left">
                                    <img src={foodImg} className="image" />
                                </div>
                                <div className="food-right">
                                    <div className="up-portion">
                                        <h2>{food.name}</h2>
                                        <div className="info">
                                            <div>Price per plate: Rs. {food.price}</div>
                                        </div>
                                        <div className="addremove">
                                            <input type="text" value={food.amount} />
                                            <button className="plus" type="button" onClick={() => {
                                                if (parseInt(food.amount) < 100) {
                                                    food.amount = parseInt(food.amount) + 1;
                                                    setFoodList(foodList);
                                                    total();
                                                }
                                            }} >+</button>
                                            <button className="minus" onClick={() => {
                                                if (parseInt(food.amount) > 0) {
                                                    food.amount = parseInt(food.amount) - 1;
                                                    setFoodList(foodList);
                                                    total();
                                                }
                                            }}>-</button>
                                        </div>
                                    </div>
                                    <div className="down-portion">
                                        <p>{food.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>}
        </div>
    );
}

export default Restpage;