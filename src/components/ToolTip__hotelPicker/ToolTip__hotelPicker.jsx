import React from 'react';
import './ToolTip__hotelPicker.scss';
import planeIcon from '../../assets/icons/plane_icon.svg';
import DeltaIcon from '../../assets/icons/delta_logo.svg';
import arrowDown from '../../assets/icons/arrow-down.svg';
import arrowRight from '../../assets/icons/pointingLeftArrow.svg';
import mic from '../../assets/icons/mdi_microphone.svg';
import thumbsUp from '../../assets/icons/thumbsUp.svg';
import thumbsDown from '../../assets/icons/thumbsDown.svg';
import arrowDown2 from '../../assets/icons/ArrowDown2.svg';

const TooltipBuddy = () => {
    return (
        <div className='tooltip-padding'>
            <div className='tooltip-header'>
                <a href="https://policies.google.com/privacy?hl=en#infocollect" className='underlining-aTag'>Learn more about data collection</a>
                <h3 className='toolTipHotel__title'>How Flight Buddy made this for you</h3>
                <p><img src={planeIcon} alt="plane Icon" /><b>Based on your activity,</b> we see you usually book 4-star hotels. We scan 100+ Paris hotels in real-time to find your ideal matches. </p>
                <p><img src={planeIcon} alt="plane icon" /><b>Keeping an eye on your destination</b>—Paris might be a bit rainy during your visit. We've included suggestions for indoor activities. </p>
            </div>
        <div className="tooltip-container">
            
            {/* <h2 className='tooltip__body--title'> Buddy's best recommendation</h2> */}

            <div className='curatedIntinerary'>
                <p>We curated a customized itinerary to your specific dates</p>
                <p><b>Paris Itinerary (January 27th - February 7th) - Rainy Days</b></p>
                <p>This itinerary focuses on indoor activities and cozy spots to enjoy Paris even when the weather isn't cooperating.</p>
                <p><b>Day 1 (January 27th): Arrival & Parisian Charm</b></p>
                <ul className='itineraryList'>
                    <li>Morning: Arrive at Charles de Gaulle Airport (CDG). Take the RER B train to your accommodation.</li>
                    <li>Afternoon: Check in and leave your luggage. Explore the charming Latin Quarter. Browse bookstores, cozy cafes, and enjoy a leisurely lunch.</li>
                    <li>Evening: Indulge in a delicious French dinner at a traditional bistro. Try a classic Boeuf Bourguignon or Coq au Vin.</li>
                </ul>

            </div>


            <div className='toolTip__seeMore'>
                <p>See more</p>
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
                <p>Was this helpful?</p>
                <img src={thumbsUp} alt="thumbs up" />
                <img src={thumbsDown} alt="thumbs down" />
            </div>

            
        </div>
        </div>
    )
}

export default TooltipBuddy;