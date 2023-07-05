// import { Link } from "react-router-dom";
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react'

import './navbar.css'
const Navbar = () => {
    // const [toggleMenu, setToggleMenu] = useState(false)
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // const toggleNav = () => {
    //     setToggleMenu(!toggleMenu)
    //   }

    //   useEffect(() => {

    //     const changeWidth = () => {
    //       setScreenWidth(window.innerWidth);
    //     }

    //     window.addEventListener('resize', changeWidth)

    //   }, [])
    return (
        <div className="navbar">
            <div className="heading">NPO</div>
            <div className="list">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <a href="#"> Contact Us </a>
                <Link to="/commonsign"><span className="sign"> Sign Up </span></Link>
            </div>
        </div>
       
            /* <Link>Home</Link> */

        

        // <div className="container">
        //     <div className="card">
        //         <div className="content">
        //             <div className="imgBx">
        //                 <img src="" alt="" />
        //             </div>
        //             <div className="contentBx">
        //                 <h3>Some<br><span>Creative designer</span></br></h3>
        //             </div>
        //         </div>
        //     </div>
        //     <ul className="sci">
        //         <li>
        //             <a href="#"></a>
        //         </li>
        //     </ul>
        // </div>


    );
}

export default Navbar;