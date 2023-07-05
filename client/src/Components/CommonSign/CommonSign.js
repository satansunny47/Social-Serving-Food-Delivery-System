import React from 'react';
import {Link} from 'react-router-dom'
// import { Button} from 'react-bootstrap';
import './commonsign.css';

const CommonSign = () => {
    return (  
        <div className="cmnsgn">
            <div className="box">
                <Link to="/restsign">
                <button className="btnsign">Sign In as Restaurant</button>

                </Link>
                <Link to="/ngosign">

                <button className="btnsign">Sign In as NGO</button>
                </Link>
                <Link to="/custsign">

                <button className="btnsign">Sign In as Customer</button>
                </Link>
            </div>
        </div>
    );
}
 
export default CommonSign;