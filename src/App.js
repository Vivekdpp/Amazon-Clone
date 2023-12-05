
import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./orders";

const promise = loadStripe
('pk_test_51O2OPjDPSor05C16zyiXYNATVYKuwMCGVqsGElvu3Hqln06KtwIXV1FbMoKBn9l9SjI5VHaSCOtNbHqgPSt3kx5K00ZuNzzIuj');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads..

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >> ', authUser);
      if(authUser){
        // The user just logged in/ was logged in.
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      } else{
        // The user is logged out.
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/orders" element={<> <Header/> <Orders /> </>}> </Route>
          <Route path="/login" element={<>  <Login/> </>}> </Route>
          <Route path="/checkout" element={<> <Header/> <Checkout /> </>}> </Route> 
          <Route path="/payment" element={<> <Header/> <Elements stripe={promise}> <Payment /> </Elements>  </>}> </Route>
          <Route path="/" element={<> <Header/> <Home /> </>}> </Route> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

