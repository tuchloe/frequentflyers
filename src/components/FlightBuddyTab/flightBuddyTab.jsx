import './flightBuddyTab.scss';
import React, { useState, useEffect } from "react";

//3 tabs
    //Best
    //Cheapest
    //flight buddy
        //how fb works pop up
//

function FlightBuddyTab() {
    const [cheapestPrice, setCheapestPrice] = useState(null); // State for the cheapest price
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Fetch the flight data to find the cheapest price
      const fetchFlightData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch("http://localhost:3000/fetch-flights"); // Adjust URL if necessary
          if (!response.ok) {
            throw new Error("Failed to fetch flight data");
          }
          const data = await response.json();
  
          // Find the cheapest price
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
                {loading && <p className='flight-tabs--cheapest--text__subtext'>Loading...</p>}
                {error && <p className='flight-tabs--cheapest--text__subtext'>Error loading price</p>}
                {!loading && !error && (
                <p className='flight-tabs--cheapest--text__subtext'>
                    from <b>${cheapestPrice}</b>
                </p>
                )}
            </div>
            <div className='flight-tabs--flight-buddy'>
                <div className='flight-tabs--flight-budy__top'>
                    <p className='flight-tabs--flight-buddy__top--text'>from</p>
                    <p className='flight-tabs--flight-buddy__top--price'>${cheapestPrice}</p>
                    <p className='flight-tabs--flight-buddy__top--new'>NEW</p>
                </div>
                <div className='flight-tabs--flight-budy__bottom'>
                    <p className='flight-tabs--flight-buddy__bottom--text'>from <b>Flight Buddy</b>, your AI trip planner</p>
                </div>
            </div>
        </div>
    )
}

export default FlightBuddyTab;