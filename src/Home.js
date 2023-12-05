import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"  
            alt="" 
            />      
        </div>
        <div className="home__row">
            <Product 
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses " 
            price={29.99} 
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._SL1500_.jpg" 
            rating={5} />
            <Product 
            id="49538094"
            title="Robot Vacuum and Mop Combo, WiFi/App/Alexa, Robotic Vacuum Cleaner with Schedule, 2 in 1 Mopping Robot Vacuum with 230ML Water Tank, Self-Charging, Slim, Ideal for Hard Floor, Pet Hair, Carpet (Black)" 
            price={249.99} 
            image="https://m.media-amazon.com/images/I/71c6JxDbjOL._AC_SL1500_.jpg" 
            rating={4} />
            
        </div>
        <div className="home__row">
            <Product
            id="4903850" 
            title="Apple Watch Ultra [GPS + Cellular 49mm] Smart Watch w/Rugged Titanium Case & Orange Alpine Loop - Medium. Fitness Tracker, Precision GPS, Action Button, Extra-Long Battery Life, Brighter Display" 
            price={899.99} 
            image="https://m.media-amazon.com/images/I/91V-6BzRJYL._AC_SL1500_.jpg" 
            rating={5} />
            <Product 
            id="23445930"
            title="Echo Dot (5th Gen, 2022 release) Kids | Designed for kids, with parental controls | Owl" 
            price={39.99} 
            image="https://m.media-amazon.com/images/I/51+HSOOoOQL._AC_SL1000_.jpg" 
            rating={5} />
            <Product 
            id="3254354345"
            title="Apple iPad Pro 11-inch (4th Generation): with M2 chip, Liquid Retina Display, 128GB, Wi-Fi 6E, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life – Silver" 
            price={1099.99} 
            image="https://m.media-amazon.com/images/I/8124D1qS2UL._AC_SL1500_.jpg" 
            rating={5} />
        </div>
        <div className="home__row">
            <Product 
            id="90829332"
            title="SAMSUNG 57 Odyssey Neo G9 Series Dual 4K UHD 1000R Curved Gaming Monitor, 240Hz, 1ms with DisplayPort 2.1, Quantum Mini-LED, DisplayHDR 1000, AMD FreeSync Premium Pro, LS57CG952NNXZA, 2023" 
            price={3299.99} 
            image="https://m.media-amazon.com/images/I/61QSUZYl+dL._AC_SL1500_.jpg" 
            rating={5} />    
        </div>

    </div>
  )
}

export default Home