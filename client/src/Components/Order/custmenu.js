import { useState ,useEffect} from "react";
import axios from 'axios'
import "./ngomenu.css";
import foodImg from "./food.png";
import Custpage from "./custpage";
import Custdel from "../paymentanddelivery/custdel";
const Custmenu = ({ chosenRes }) => {
    // let [num, setNum] = useState(0);

    // let handleChange = (e) => {
    //     setNum(e.target.value);
    // }
    const tempObjects = [
        {
            name: "Food1",
            type: "Veg",
            Description:
                "Arrays of objects don't stay the same all the time. We almost always need to manipulate them. So let's take a look at how we can add objects to an already existing array.",
            price: "100",
            amount: "0",
            available: "8",
        }
    ];
    const [charge, setCharge] = useState(0);
    const [pay, setPay] = useState(false);
    const [ngo, setngo] = useState(false);
    const total = () => {
        var sum = 0;
        for (var i = 0; i < foodList.length; i++) {
            sum += foodList[i].amount * foodList[i].price;
        }
        setCharge(sum);
    };

    const url = "http://localhost:3000/foodlist"
    const filteredList = [];
    const [foodList, setFoodList] = useState(tempObjects);


    useEffect(() => {
        console.log("dgbvuydfyusfiuvdshiugviudrfhighdi");
        callProfilePage();
    }, [])

    const callProfilePage = () => {

        axios.get(url)
            .then((response) => {
                // setUserData(response.data)
                console.log(response.data);
                const vari = response.data;
                console.log("Chosen res " + chosenRes);

                for (let i = 0; i < vari.length; i++) {

                    if (vari[i].restaurant === chosenRes) {
                        filteredList.push(vari[i]);
                    }
                }
                console.log(filteredList)
                setFoodList(filteredList);
                // setChange(0);
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            {pay && !ngo && <Custdel charge={charge} />}
            {ngo && !pay && <Custpage charge={charge} />}
            {!ngo && !pay && (
                <div className="foodListBox">
                    <div className="food-upper">
                        <h2 className="foodlistname">ORDER</h2>
                        <p className="amount">
                            In cart: <span> Rs. {charge} </span>
                        </p>
                        <button
                            className="placeorder"
                            onClick={() => {
                                console.log("pay is getting: "+pay);
                                // if (charge > 0) {
                                    setPay(true);
                                // }
                            }}
                        >
                            Place Order
                        </button>
                        <button
                            className="placeorder"
                            onClick={() => {
                                // if (charge > 0) {
                                    setngo(true);
                                // }
                            }}
                        >
                            Donate
                        </button>
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
                                            <div>Available: {food.available} plates</div>
                                        </div>
                                        <div className="addremove">
                                            <input type="text" value={food.amount} />
                                            <button
                                                className="plus"
                                                onClick={() => {
                                                    if (food.amount < food.available) {
                                                        food.amount = parseInt(food.amount) + 1;
                                                        setFoodList(foodList);
                                                        total();
                                                    }
                                                }}
                                            >
                                                +
                                            </button>
                                            <button
                                                className="minus"
                                                onClick={() => {
                                                    if (food.amount > 0) {
                                                        food.amount = parseInt(food.amount) - 1;
                                                        setFoodList(foodList);
                                                        total();
                                                    }
                                                }}
                                            >
                                                {" "}
                                                -
                                            </button>
                                        </div>
                                        <div className="Delete">
                                            <button
                                                onClick={() => {
                                                    food.amount = 0;
                                                    setFoodList(foodList);
                                                    total();
                                                }}
                                            >
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                    <div className="down-portion">
                                        <p>{food.Description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Custmenu;