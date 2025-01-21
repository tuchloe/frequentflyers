import React from 'react';
import './FB-intro.scss'
import ai_symbol from '../../assets/icons/ai_symbol.svg'
import plane_bullet from '../../assets/icons/plane_bullet.svg'
import link_arrow from '../../assets/icons/group.svg'


const Intro = () => {
    return (
        <div className="FB-intro"> {/* container for flex format */}
          <div className="FB-intro__content">
            <div className="FB-intro__icon">
              <img src={ai_symbol} alt="AI Symbol" />
            </div>
            <div className="FB-intro__text"> {/* left section  */}
              <h2 className="FB-intro__text--heading">Flight Buddy, your AI flight assistant</h2>
              <p className="FB-intro__text--description">
                We focus on what matters most: <br/> <span className="FB-intro__text--highlight">price, comfort, and time</span>. Let Flight Buddy prioritize your preferences for the best booking experience.
              </p>
            </div>
          </div>
          <div className="FB-intro__features"> {/* right side */}
            <h3 className="FB-intro__subheading">Book with confidence</h3>
            <ul className="FB-intro__list">
              <li className="FB-intro__list-item">
                <img src={plane_bullet} alt="Bullet Icon" /> We analyze millions of flights to find your perfect match.
              </li>
              <li className="FB-intro__list-item">
                <img src={plane_bullet} alt="Bullet Icon" /> Personalized recommendations powered by your preferences and real-time data.
              </li>
              <li className="FB-intro__list-item">
                <img src={plane_bullet} alt="Bullet Icon" /> Over 100,000 travelers trust Flight Buddy to plan their trips.
              </li>
            </ul>
          </div>
            <a
              href="https://policies.google.com/privacy?hl=en#infocollectt" 
              target="_blank"
              rel="noopener noreferrer"
              className="FB-intro__privacy-link"
                >Learn More <img src={link_arrow} alt="Link to learn more" />
            </a> 
        </div>
      );
    };

export default Intro;