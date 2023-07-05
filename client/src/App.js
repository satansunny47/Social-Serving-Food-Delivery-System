// import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/NavBar';
// import Contact from './Components/ContactUs/Contact';
// import About from './Components/About/About';
// import Footer from './Components/Footer/Footer';
import CommonSign from './Components/CommonSign/CommonSign';
import Ngoregister from './Components/Register/ngoregister';
import Restregister from './Components/Register/restregister';
import Custregister from './Components/Register/customerregister';
import Restpage from './Components/RestPage/Restpage';
import Genpage from './Components/GenHomePage/Genpage';
import Userprofile from './Components/Profile/userprofile';
import Foodform from './Components/FoodEntryForm/foodform';

function App() {
  return (
   <Router>
     <div className="App">
       <Navbar/>
       <Switch>
         <Route exact path="/">
           <Genpage/>
         </Route>
         <Route path="/commonsign">
           {/* <Foodform/> */}
           <CommonSign/>
         </Route>
         <Route path="/ngosign">
           <Ngoregister/>
         </Route>
         <Route path="/restsign">
           <Restregister/>
         </Route>
        <Route path="/custsign">
          <Custregister/>
        </Route>
         <Route path="/about">
          <Userprofile/>
         </Route>
         <Route path="/addfooditem">
          <Foodform/>
         </Route>
         <Route path="/restpage">
           <Restpage/>
         </Route>
       </Switch>
     </div>
   </Router>

  );
}

export default App;
