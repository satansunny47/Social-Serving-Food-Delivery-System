import React from "react";
import './contact.css';
import logo from './1.jpg';
import { FaFacebookF, FaTwitter,FaInstagram } from "react-icons/fa";
const fstyle = { color: "pink", fontSize: "1.5em" };
const tstyle = { color: "pink", fontSize: "1.5em" };
const istyle = { color: "pink", fontSize: "1.5em" };
const Contact = () => {
    return (
        <div id ="contactID" className="main">
        <h1 className="header"> OUR TEAM</h1>
        <div className="container">
            <div className="card">
                    <div><img src={logo} className="photo" /></div>
                    <div className="Contentbox">
                        <p>Souvik Rana</p>
                        <div className="iconlist">
                            <a href="https://www.facebook.com/" target="_blank"><FaFacebookF style={fstyle} /></a>
                            <a href="https://twitter.com/" target="_blank"><FaTwitter style={tstyle} /></a>
                            <a href="https://instagram.com/" target="_blank"><FaInstagram style={istyle} /></a>
                        </div>
                        </div>
            </div>
            <div className="card">
                    <img className="photo" src={logo} />
                    <div className="Contentbox">
                        <p>Sharannya Ghosh</p>
                        <div className="iconlist">
                            <a href="https://www.facebook.com/" target="_blank"><FaFacebookF style={fstyle} /></a>
                            <a href="https://twitter.com/" target="_blank"><FaTwitter style={tstyle} /></a>
                            <a href="https://instagram.com/" target="_blank"><FaInstagram style={istyle} /></a>
                        </div>
                        </div>
            </div>
            <div className="card">
                        <img src={logo} className="photo" />
                    <div className="Contentbox">
                        <p>Pranil Dey</p>
                        <div className="iconlist">
                            <a href="https://www.facebook.com/" target="_blank"><FaFacebookF style={fstyle} /></a>
                            <a href="https://twitter.com/" target="_blank"><FaTwitter style={tstyle} /></a>
                            <a href="https://instagram.com/" target="_blank"><FaInstagram style={istyle} /></a>
                        </div>
                        </div>
            </div>
        </div>
        </div>
    );
}

export default Contact;