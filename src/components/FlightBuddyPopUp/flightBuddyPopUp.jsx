import './flightBuddyPopUp.scss';
import React, { useState, useEffect } from "react";
import planeIcon from '../../assets/icons/plane_icon.svg';
import arrowDown from '../../assets/icons/arrow-down.svg';
import arrowRight from '../../assets/icons/pointingLeftArrow.svg';
import mic from '../../assets/icons/mdi_microphone.svg';
import thumbsUp from '../../assets/icons/thumbsUp.svg';
import thumbsDown from '../../assets/icons/thumbsDown.svg';
import arrowDown2 from '../../assets/icons/ArrowDown2.svg';
import calendar from '../../assets/icons/calendar.svg';
import jetblue from '../../assets/icons/jetblue.svg';


const FlightBuddyPopUp = () => {
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
    return (
        <div className='tooltip'>
            <div className='tooltip-padding'>
                    <div className='tooltip-header'>
                        <p className='tooltip-header__underlined'><a className='tooltip-header__underlined--link' href="https://policies.google.com/privacy?hl=en#infocollect" target="_blank">Learn more about data collection</a></p>
                        <h1 className='tooltip-header--title'>How Flight Buddy made this for you</h1>
                        <p className='tooltip-header--info'><img src={planeIcon} alt="plane Icon" /> <b>Based on current data</b> this flight has the lowest cancellation and delay rates.</p>
                        <p className='tooltip-header--info'><img src={planeIcon} alt="plane icon" /> <b>Based on your history</b> you value direct flights over layover. </p>
                        <p className='tooltip-header--info'><img src={planeIcon} alt="plane icon" /> Paris Fashion Week takes place during your selected dates. <b>We suggest flying out two days later to avoid peak prices.</b></p>
                    </div>
                <div className="tooltip-container">
                
                    <h2 className='tooltip__body--title'> Buddy's best recommendation</h2>
                    <div className='tooltip__body--recommended-date'>
                        <div className='tooltip__body--recommended-date__depart'>
                            <img src={calendar} className='tooltip__body--recommended-date--img' alt="calendar icon" />
                            <p className='tooltip__body--recommended-date--text'>Tue, Jan 28</p>
                            <p className='tooltip__body--recommended-date--arrows'>&lt; &gt;</p>
                             
                        </div> 
                        <div className='tooltip__body--recommended-date__return'>
                            <p className='tooltip__body--recommended-date--text'>Fri, Feb 7</p>  
                            <p className='tooltip__body--recommended-date--arrows'>&lt; &gt;</p>      
                        </div> 
                    </div>
                    <div>
                        <h3>Departure</h3>
                        <div className='tooltip__body'>
                            <div>
                                <img src={jetblue} className='tooltip__body--airline-img' alt="jetblue icon" />
                            </div>
                            <div className='tooltip__body--time'>
                                <p className='tooltip__body--time__text'>8:19PM – 9:20 AM<sup>+1</sup></p>
                                <img src={arrowDown} alt="arrow down" />
                            </div>
                            <div className='tooltip__body--ETA'>
                                <div className='tooltip__body--route'>
                                    <p>BOS</p>
                                    <img src={arrowRight} alt="arrow right" />
                                    <p>CDG</p>
                                </div>
                                <p className='tooltip__body--time__text'>7 hr 1 min</p>
                            </div>
                            <div className='tooltip__body--price'>
                                <p className='tooltip__body--time__price'>$434</p>
                                <p className='tooltip__body--time__text'>round trip</p>
                            </div>
                        </div>
                    </div>
                    <div> 
                        <h3>Return</h3>
                        <div className='tooltip__body'>
                            <div>
                                <img src={jetblue} className='tooltip__body--airline-img' alt="jetblue icon" />
                            </div>
                            <div className='tooltip__body--time'>
                                <p className='tooltip__body--time__text'>1:35 PM - 4:03 PM</p>
                                <img src={arrowDown} alt="arrow down" />
                            </div>
                            <div className='tooltip__body--ETA'>
                                <div className='tooltip__body--route'>
                                    <p>CDG</p>
                                    <img src={arrowRight} alt="arrow right" />
                                    <p>BOS</p>
                                </div>
                                <p className='tooltip__body--time__text'>8 hr 28 min</p>
                            </div>
                            <div className='tooltip__body--price'>
                                <p className='tooltip__body--time__price'>$434</p>
                                <p className='tooltip__body--time__text'>round trip</p>
                            </div>
                        </div>
                    </div>
                    <div className='tooltip__body--savings'>
                        <p className='tooltip__body--savings--text'><b>{`You saved $${cheapestPrice - 434} on this trip!`}</b></p>
                    </div>
                    <div className='tooltip__button'>
                        <a href="/buddy-picks">
                        <p>Continue</p>
                        </a>
                    </div>

                    <div className='tooltip__seeMore'>
                        <p className='tooltip__seeMore--text'>See more</p>
                        <img src={arrowDown2} alt="" />
                    </div>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="How else can I help you book your flight?"
                            className="search-input"
                        />
                        <img src={mic} alt="mic" />
                    </div>

                    <div  className='tooltip__footer'>
                        <p className='tooltip__footer--text'>Was this helpful?</p>
                        <img src={thumbsUp} alt="thumbs up" />
                        <img src={thumbsDown} alt="thumbs down" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightBuddyPopUp;