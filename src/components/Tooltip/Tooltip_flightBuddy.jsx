import React from 'react';
import './Tooltip_flightBuddy.scss';
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
                <h1 className='tooltip-header--title'>How Flight Buddy made this for you</h1>
                <p className='tooltip-header--info'><img src={planeIcon} alt="plane Icon" /> <b>Based on previous trips</b> you travel to LA on these dates every year.</p>
                <p className='tooltip-header--info'><img src={planeIcon} alt="plane icon" /> <b>Your preference</b> is evening flights based on your history. </p>
                <p className='tooltip-header--info'><img src={planeIcon} alt="plane icon" /> <b>Based on your activity,</b> we noticed that there is a major tech conference in Los Angeles<br /> during your usual travel time, so we prioritized an option that aligns with it.</p>
            </div>
        <div className="tooltip-container">
            
            <h2 className='tooltip__body--title'> Buddy's best recommendation</h2>
            <div> 
                <h3>Departure</h3>
                <div className='tooltip__body'>
                    <div>
                        <img src={DeltaIcon} alt="delta icon" style={{ width: '30px' }} />
                        <p className='tooltip__typo--delta'>Delta</p>
                    </div>
                    <div className='tooltip__body--time'>
                        <p>7:35PM – 1:50 AM</p>
                        <p>+1</p>
                        <img src={arrowDown} alt="arrow down" />
                    </div>
                    <div className='tooltip__body--ETA'>
                        <div className='tooltip__body--route'>
                            <p>BOS</p>
                            <img src={arrowRight} alt="arrow right" />
                            <p>LAX</p>
                        </div>
                        <p>6 hr 15 min</p>
                    </div>
                    <div className='tooltip__body--price'>
                        <p>$345</p>
                        <p>round trip</p>
                    </div>
                </div>
            </div>
            <div> 
                <h3>Return</h3>
                <div className='tooltip__body'>
                    <div>
                        <img src={DeltaIcon} alt="delta icon" style={{ width: '30px' }} />
                        <p className='tooltip__typo--delta'>Delta</p>
                    </div>
                    <div className='tooltip__body--time'>
                        <p>9:15AM - 5:45 PM</p>
                        <img src={arrowDown} alt="arrow down" />
                    </div>
                    <div className='tooltip__body--ETA'>
                        <div className='tooltip__body--route'>
                            <p>LAX</p>
                            <img src={arrowRight} alt="arrow right" />
                            <p>BOS</p>
                        </div>
                        <p>5 hr 30 min</p>
                    </div>
                    <div className='tooltip__body--price'>
                        <p>$345</p>
                        <p>round trip</p>
                    </div>
                </div>
            </div>
            <div className='tooltip__button'>
                <a href="/BOS-CDG"><p>Continue</p></a>
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