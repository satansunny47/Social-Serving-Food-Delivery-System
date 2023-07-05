import './genpage.css';
import React from 'react';
import imres from './restaurant.jpg';
import imcus from './customer.jpg';
import imdel from './deliveryboy.jpg';
import imngo from './ngo.jpg';
import imfood from './food.jpg';
const Genpage = () => {
    return (
        <React.Fragment>
            <div className="circle">
            </div>
            <img src={imngo} className="ngo" />
            <img src={imres} className="restaurant" />
            <img src={imfood} className="food" />
            <img src={imcus} className="customer" />
            <div className="text">
                <p ><span className="maintext">QUENCH <br />APPETITE</span><br /><br /> Feed the world you want to live in . . . </p>
            </div>
            <div >
                <button className="btn">Know More</button>
            </div>
            <div className="screen" >
                <img className="phone" src={imdel} />
            </div>
        </React.Fragment>
    );
}

export default Genpage;