import './homepage-body.scss';
import React, { useState, useEffect } from "react";
import arrows from '../../assets/icons/arrow-icon.svg';
import passengerIcon from '../../assets/icons/passenger.svg';
import downArrow from '../../assets/icons/filled-down-arrow.svg';
import search from '../../assets/icons/search.svg';
import gemini from '../../assets/icons/gemini-logo.svg';
import googleHeader from '../../assets/images/google-flights-header.png';
import TooltipBuddy from '../Tooltip/Tooltip_flightBuddy';


function HomepageBody () {
    const [hidden, setHidden] = useState(true);

    return (
        <div className="homepage">
            <div className='homepage--google-1'>
                <img src={googleHeader} className='homepage--google-img-1' alt="" />
            </div>
            <div className='homepage--content'>
            <div className="homepage--dropdown">
                <div className="homepage--dropdown__round-trip">
                    <img src={arrows} className='homepage--dropdown__round-trip--img-1' alt="two arrows pointing left and right" />
                    <p className="homepage--dropdown__round-trip--text">Round Trip</p>    
                    <img src={downArrow} className='homepage--dropdown__round-trip--img-2' alt="down arrow" /> 
                </div>
                <div className="homepage--dropdown__passengers">
                    <img src={passengerIcon} className='homepage--dropdown__passengers--img-1' alt="passenger outline" />
                    <p className="homepage--dropdown__passengers--text">1</p>
                    <img src={downArrow} className='homepage--dropdown__passengers--img-2' alt="down arrow" /> 
                </div>
                <div className="homepage--dropdown__economy">
                    <p className="homepage--dropdown__economy--text">Economy</p>
                    <img src={downArrow} className='homepage--dropdown__economy--img' alt="down arrow" />
                </div>
            </div>
            <div className="homepage--selection">
                <form className="homepage--selection__box-1">
                    <input type="text" className="homepage--selection__box-1--depart-city" name="departure-city" placeholder="Where from?" />
                    <img src={arrows} className='homepage--selection__box-1--img' alt="two arrows pointing left and right" />
                    <input type="text" className="homepage--selection__box-1--return-city" name="return-city" placeholder="Where to?" />
                </form>
                <form className="homepage--selection__box-2">
                    <input type="text" className="homepage--selection__box-2--depart-date" name="departure-date" placeholder="Departure" />
                    <input type="text" className="homepage--selection__box-2--return-date" name="return-date" placeholder="Return" />
                </form>
            </div>
            <div className='homepage--buttons'>
                <div className="homepage--buttons__search">
                    <a href="/BOS-CDG" className="homepage--buttons__search--button">
                        <img src={search} className='homepage--buttons__search--button--img' alt="magnifying glass" />
                        Search</a>
                </div>
                <div className="homepage--buttons__ai"
                    onMouseEnter={() => setHidden(false)}
                    onMouseLeave={() => setHidden(true)}>
                        {!hidden && (
                            <div className='homepage--buttons__ai__popup'>
                                < TooltipBuddy />
                            </div>)}
                            <div className='homepage--buttons__ai--button'>
                                <img src={gemini} className='homepage--buttons__ai--button--img' alt="gemini logo" />
                                <b>LAX </b>&nbsp;| 1/24 to 2/7
                                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomepageBody;