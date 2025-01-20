import './flightBuddyTab.scss';
import geminiLogo from '../../assets/icons/gemini-logo.svg';
import React, { useState, useEffect } from "react";
import TooltipBuddy from '../FlightBuddyPopUp/flightBuddyPopUp.jsx'

function FlightBuddyTab() {
    const [cheapestPrice, setCheapestPrice] = useState(null);
    const [hidden, setHidden] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchFlightData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch("http://localhost:3000/fetch-flights"); 
          if (!response.ok) {
            throw new Error("Failed to fetch flight data");
          }
          const data = await response.json();
  
          const cheapestFlight = data.best_flights.reduce((cheapest, flight) =>
            flight.price < cheapest.price ? flight : cheapest
          );
  
          setCheapestPrice(cheapestFlight.price);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchFlightData();
    }, []);


    return(
        <div className='flight-tabs'>
            <div className='flight-tabs--best'>
                <p className='flight-tabs--best--text'>Best</p>
            </div>
            <div className='flight-tabs--cheapest'>
                <p className='flight-tabs--cheapest--text'>Cheapest</p>
                <p className='flight-tabs--cheapest--text__subtext'>from <b>${cheapestPrice}</b></p>
            </div>
            <div className='flight-tabs--flight-buddy' 
                onMouseEnter={() => setHidden(false)}
                onMouseLeave={() => setHidden(true)}>
                    {!hidden && ( 
                      <div className="flight-tabs--flight-buddy--hover-box">
                        < TooltipBuddy />
                      </div>)}
                <div className='flight-tabs--flight-buddy__top'>
                    <img src={geminiLogo} alt="Gemini Icon" />
                    <p className='flight-tabs--flight-buddy__top--text'>At <b>$434</b></p>
                    <p className='flight-tabs--flight-buddy__top--new'><b>NEW</b></p>
                </div>
                <div className='flight-tabs--flight-budy__bottom'>
                    <p className='flight-tabs--flight-buddy__bottom--text'>1/27 - 2/7 from <b>Flight Buddy</b></p>
                </div>
            </div>
        </div>
    )
}

export default FlightBuddyTab;