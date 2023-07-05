import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './userprofile.css';
import restimg from './rest.png';
import {useHistory} from 'react-router-dom'
const Userprofile = () => {
    const useraddr = "Mars";
    const tempObject={
        name:"Hati",
        email:"ghora",
        phone:"87654345",
        password:"fghnm",
        cpassword:"fghnm",
        type:"ngo"
    }
    const [userData, setUserData]=useState(tempObject);
    
    

    // const  callProfilePage =()=>{
    //     const url ="http://localhost:3000/about"
    //     // let store = JSON.parse(localStorage.getItem('login'));

    //     axios.get(url,{
    //         headers: {
    //             Authorization:'Bearer '+JSON.parse(localStorage.getItem('login'))
    //         }
    //     })
    //     .then((response)=>{
    //         // setUserData(response.data)
    //         console.log(response.data);
    //         // const vari=response.data[0];
    //         setUserData(response.data);
    //     })
    //     .catch(error=>{
    //         console.log(error.message)
    //     })


    // }


    
    const callAbout =async()=>{
        
        console.log("hello before try")
        try {
            console.log("hello inside try")
            const res = await fetch('/about',{
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"
                },
                credentials:"include"
            })
            console.log("hello after await")

            console.log(res)
            
            const data= await res.json();
            console.log("hello after json")
            console.log(data);
            setUserData(data);

            if (!res.status===200) {
                const error = new Error (res.error);
                throw error;
            }

        }catch(e){
            console.log(e.message);
            console.log("here error")
            
        }
    }

    useEffect(() => {
        console.log("eriguyrfusdfbuysdgfyusdgbfvyulsdegyulsdbz")
        console.log("dgbvuydfyusfiuvdshiugviudrfhighdi");
        
        
        callAbout();
    },[])


  

    return (
        <div className="profile">
             <div><img src={restimg} className="profilephoto"></img></div>
            <div className="profileinfo">
                <div>
                    <div className="username">{userData.name}</div>
                    <div className="type">{userData.type}</div>
                </div>
                <div className="information">
                    <div class="userinfo">Address: <span >{useraddr}</span></div>
                    <div class="userinfo">Email Id: <span >{userData.email}</span></div>
                    <div class="userinfo">Phone No.: <span >{userData.phone}</span></div>
                </div>
                <button className="edit">Edit Profile</button>
            </div> 
        </div>
    );
}
export default Userprofile;