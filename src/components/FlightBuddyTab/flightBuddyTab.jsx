import './flightBuddyTab.scss';

//3 tabs
    //Best
    //Cheapest
    //flight buddy
        //how fb works pop up
//

function FlightBuddyTab() {

    return(
        <div className='flight-tabs'>
            <div className='flight-tabs--best'>
                <p className='flight-tabs--best--text'>Best</p>
            </div>
            <div className='flight-tabs--cheapest'>
                <p className='flight-tabs--cheapest--text'>Cheapest</p>
                <p className='flight-tabs--cheapest--text__subtext'>from <b>$509</b></p>
            </div>
            <div className='flight-tabs--flight-buddy'>
                <div className='flight-tabs--flight-budy__top'>
                    <p className='flight-tabs--flight-buddy__top--text'>from</p>
                    <p className='flight-tabs--flight-buddy__top--price'>$509</p>
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