import './registerstyle.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import Restpage from '../RestPage/Restpage';

const Restregister = () => {
    const [loginUserData, setUserdata] = useState();
    const [authenticated, setAuthenticated] = useState(false);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3000/signin', {

            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })

        })

        // const res = await axios.post('http://localhost:3000/signin',{
        //     email:email,
        //     password:password
        // });

        const data = await res.json();
        setUserdata(data.user);
        console.log(data.user)
        // localStorage.setItem('login',JSON.stringify({token:data.token}))
        // console.log(res);
        // localStorage.setItem('token',res.data.token);

        if (res.status === 400 || !data) {
            window.alert("Error Login")
        }
        else {
            window.alert("Login Sucessful")
            setAuthenticated(true);
            // history.push("")
        }

    }



    const [user, setUser] = useState({
        name: "", email: "", phone: "", latitude: "", longitude: "", password: "", cpassword: "", type: "restaurant"
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
        user.latitude = lat.toString();
        user.longitude = lng.toString();
        //   setUser(user);
        console.log(user);
    }

    const postData = async (e) => {
        e.preventDefault();
        console.log("hello 1");

        const { name, email, phone, latitude, longitude, password, cpassword, type } = user;
        const res = await fetch('http://localhost:3000/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json "
            },
            body: JSON.stringify({
                name, email, phone, latitude, longitude, password, cpassword, type
            })
        });
        console.log("hello 2");
        console.log(res)

        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("reg error")
        }
        else {
            window.alert("Successful Registration");
            console.log("reg sucessful");
            var card = document.getElementById("inner-box-card");
            card.style.transform = "rotateY(-360deg)";

        }

    }

    return (
        <div>

            {authenticated && <Restpage loginUserData={loginUserData} />}

            {!authenticated &&
                <div className="ngo-container">
                    <div className="ngo-card">
                        <div className="inner-box" id="inner-box-card">
                            <div className="card-front">
                                <h2>LOG IN</h2>
                                <form method='POST'>
                                    <input type="email" name="email" className="input-box"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        placeholder="Email Id" required />
                                    <input type="password" name="password" className="input-box"
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        placeholder="Password" required />
                                    <button type="submit" className="submit-btn" onClick={loginUser}>Submit</button>
                                    <input type="checkbox" /><span>Remember Me</span>
                                </form>
                                <button type="button" className="btnimn" onClick={() => {
                                    var card = document.getElementById("inner-box-card");
                                    card.style.transform = "rotateY(-180deg)";
                                    console.log("here!");
                                }} >I'm new here</button>
                                <a href="">Forgot Password</a>
                            </div>
                            <div className="card-back">
                                <h2>REGISTER</h2>
                                <form method="POST">
                                    <input type="text" name="name" className="input-box"
                                        value={user.name}
                                        onChange={handleInputs}
                                        placeholder="Name" autocomplete="off" />
                                    <input type="email" name="email" className="input-box"
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Email Id" required />
                                    <input type="text" name="phone" className="input-box"
                                        value={user.phone}
                                        onChange={handleInputs}
                                        placeholder="Contact" required />
                                    <input type="password" name="password" className="input-box"
                                        value={user.password}
                                        onChange={handleInputs}
                                        placeholder="Password" required />
                                    <input type="password" name="cpassword" className="input-box"
                                        value={user.cpassword}
                                        onChange={handleInputs}
                                        placeholder="Confirm Password" required />
                                    <button type="button" className="submit-btn loc-btn" onClick={getLocation}>Location</button>
                                    <button type="submit" className="submit-btn" onClick={postData}>Submit</button>
                                </form>
                                <button type="button" className="btnimn ahabtn" onClick={() => {
                                    var card = document.getElementById("inner-box-card");
                                    card.style.transform = "rotateY(-360deg)";
                                    // console.log("yashwant is here")
                                }}>Already Have account?</button>
                                {/* <a href="">Forgot Password</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Restregister;