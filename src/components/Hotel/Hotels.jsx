import React from 'react';
import './Hotels.css'
import hotel1 from '../../assets/images/hotel1.png'
import hotel2 from '../../assets/images/hotel2.png'
import hotel3 from '../../assets/images/hotel3.png'
import hotel4 from '../../assets/images/hotel4.png'
import star from '../../assets/icons/star.svg'

const Hotels = () => {
    return (
        <div class="FB-suggestion">
            <h1 class="FB-suggestion__subheader">Let Buddy complete your trip</h1>
            <h2 class="FB-suggestion__subtitle">We found some 4 star hotels you may like</h2>
            <div class="FB-suggestion__hotel-list"> {/* container for flex format */}
                <div class="FB-suggestion__hotel-item"> {/* container for a hotel suggestion */}
                <img class="FB-suggestion__hotel-item--image" src={hotel1} alt="Le Pavillon des Lettres"></img>
                <div class="FB-suggestion__hotel-item--bubble">
                    <p class="FB-suggestion__hotel-item--name">Le Pavillon des Lettres</p>
                    <div class="FB-suggestion__hotel-item--details">
                        <div class="FB-suggestion__hotel-item--rating">
                            <img src={star} class="FB-suggestion__hotel-item--rating--star" alt="Hotel rating"></img>
                            <p class="FB-suggestion__hotel-item--rating--number">4</p>
                        </div>
                        <p class="FB-suggestion__hotel-item--pricing">Per night <span  class="FB-suggestion__hotel-item--pricing--amount">$258</span></p>
                    </div>
                </div>
                </div>
                <div class="FB-suggestion__hotel-item">
                <img class="FB-suggestion__hotel-item--image" src={hotel2} alt="Hotel Monge Paris"></img>
                <div class="FB-suggestion__hotel-item--bubble">
                    <p class="FB-suggestion__hotel-item--name">Hotel Monge Paris</p>
                    <div class="FB-suggestion__hotel-item--details">
                        <div class="FB-suggestion__hotel-item--rating">
                            <img src={star} class="FB-suggestion__hotel-item--rating--star" alt="Hotel rating"></img>
                            <p class="FB-suggestion__hotel-item--rating--number">4</p>
                        </div>
                        <p class="FB-suggestion__hotel-item--pricing">Per night <span  class="FB-suggestion__hotel-item--pricing--amount">$265</span></p>
                    </div>
                    </div>
                </div><div class="FB-suggestion__hotel-item">
                <img class="FB-suggestion__hotel-item--image" src={hotel3} alt="Le Narcisse Blanc"></img>
                <div class="FB-suggestion__hotel-item--bubble">
                    <p class="FB-suggestion__hotel-item--name">Le Narcisse Blanc</p>
                    <div class="FB-suggestion__hotel-item--details">
                        <div class="FB-suggestion__hotel-item--rating">
                            <img src={star} class="FB-suggestion__hotel-item--rating--star" alt="Hotel rating"></img>
                            <p class="FB-suggestion__hotel-item--rating--number">4</p>
                        </div>
                        <p class="FB-suggestion__hotel-item--pricing">Per night <span  class="FB-suggestion__hotel-item--pricing--amount">$346</span></p>
                    </div>
                    </div>
                </div><div class="FB-suggestion__hotel-item">
                <img class="FB-suggestion__hotel-item--image" src={hotel4} alt="Hotel le Walt by Inwo..."></img>
                <div class="FB-suggestion__hotel-item--bubble">
                    <p class="FB-suggestion__hotel-item--name">Hotel le Walt by Inwo...</p>
                    <div class="FB-suggestion__hotel-item--details">
                        <div class="FB-suggestion__hotel-item--rating">
                            <img src={star} class="FB-suggestion__hotel-item--rating--star" alt="Hotel rating"></img>
                            <p class="FB-suggestion__hotel-item--rating--number">4</p>
                        </div>
                        <p class="FB-suggestion__hotel-item--pricing">Per night <span  class="FB-suggestion__hotel-item--pricing--amount">$226</span></p>
                    </div>
                    </div>
                </div>
                <div class="FB-suggestion__hotel-list--continue">
                    <a
                      href="https://policies.google.com/privacy?hl=en#infocollectt" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="FB-intro__privacy-link"
                        >See More 
                    </a> {/* opens a new window or tab to Google's privacy policy */}
                </div>
            </div>

        </div>
      );
    };

export default Hotels;