import { useState,useEffect } from 'react';
import './cust.css';
import restImg from './rest1.png';
import axios from 'axios'
import Custmenu from  '../Order/custmenu'


const CUSTpage = ({loginUserData}) => {
    // let [num, setNum] = useState(0);

    // let handleChange = (e) => {
    //     setNum(e.target.value);
    // }

    const [chosenRes,setRes] = useState();
    const [changePage, setChange]=useState(false);

    const tempObjects = [
        {
            "name": "Restaurant1",
            "Address": "Arrays of objects don't stay the same all the time. We almost always need to manipulate them. So let's take a look at how we can add objects to an already existing array.",
            "phone_number": 100
        }
    ];


    const [restList, setrestList] = useState(tempObjects);

    const  getRestData =()=>{
        const url ="http://localhost:3000/getrestaurant"
        // let store = JSON.parse(localStorage.getItem('login'));

        axios.get(url)
        .then((response)=>{
            // setUserData(response.data)
            console.log(response.data);
            // const vari=response.data[0];
            setrestList(response.data);
        })
        .catch(error=>{
            console.log(error.message)
        })

    }

    useEffect(()=>{
        getRestData();

    },[])




    return (
        <div>
            {changePage&&<Custmenu chosenRes ={chosenRes}/>}
            {!changePage&&
        <div className="restListBox">
            <div className="rest-upper">
                <h2 className="restlistname">RESTAURANTS</h2>
            </div>
            <div className="rest-lower">
                {restList.map((rest) => (
                    <div className="rest-des">
                        <div className="rest-left">
                            <img src={restImg} className="image" />
                        </div>
                        <div className="rest-right">
                            <div className="up-portion">
                                <h2>{rest.name}</h2>
                                <div className="viewmenu"><button onClick={()=>{
                                        setRes(rest.name);
                                        setChange(true);
                                }}>View Menu</button></div>
                            </div>
                            <div className="down-portion">
                                <p>{rest.Address}</p>
                                <p>{rest.phone_number}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
        }
        </div>
    );
}

export default CUSTpage;