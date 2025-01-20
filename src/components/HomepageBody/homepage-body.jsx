import './homepage-body.scss';
import arrows from '../../assets/icons/arrow-icon.svg';
import depatureIcon from '../../assets/icons/departure.svg';
import arrivalsIcon from '../../assets/icons/arrivals.svg';
import calendarIcon from '../../assets/icons/calendar.svg';
import passengerIcon from '../../assets/icons/passenger.svg';
import downArrow from '../../assets/icons/arrow-down.svg';

function HomepageBody () {

    return (
        <div className="homepage">
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
                    <input type="text" className="homepage--selection__box-2--depart-date" name="departure-date" placeholder="Tue, Mar 18" />
                    <input type="text" className="homepage--selection__box-2--return-date" name="return-date" placeholder="Tue, Mar 25" />
                </form>
            </div>
            <div className='homepage--buttons'>
                <div className="homepage--buttons__search">
                    <button className="homepage--buttons__search--button">Search</button>
                </div>
                <div className="homepage--buttons__ai">
                    <button className="homepage--button__ai--button"><b>LAX</b> | 1/24 to 2/7</button>
                </div>
            </div>
        </div>
    );
};

export default HomepageBody;