import './homepage-body.scss'

function HomepageBody () {

    return (
        <div className="homepage">
            <div className="homepage--hero-image">
                <h1 className="homepage--title">Flights</h1>
            </div>
            <div className="homepage--dropdown">
                <div className="homepage--dropdown__round-trip">
                    <p className="homepage--dropdown__round-trip--text">Round Trip</p>     
                </div>
                <div className="homepage--dropdown__passengers">
                    <p className="homepage--dropdown__passengers--text">1</p>
                </div>
                <div className="homepage--dropdown__economy">
                    <p className="homepage--dropdown__economy--text">Economy</p>
                </div>
            </div>
            <div className="homepage--selection">
                <form className="homepage--selection__box-1">
                    <input type="text" className="homepage--selection__box-1--depart-city" name="departure-city" placeholder="Where from?" />
                    <input type="text" className="homepage--selection__box-1--return-city" name="return-city" placeholder="Where to?" />
                </form>
                <form className="homepage--selection__box-2">
                    <input type="text" className="homepage--selection__box-2--depart-date" name="departure-date" placeholder="Tue, Mar 18" />
                    <input type="text" className="homepage--selection__box-2--return-date" name="return-date" placeholder="Tue, Mar 25" />
                </form>
                {/* <div className="homepage--selection__box-2--depart-date">
                    <p className="homepage--selection__box-2--depart-date--text">Tue, Mar 18</p>
                </div>
                <div className="homepage--selection__box-2--return-date">
                    <p className="homepage--selection__box-2--return-date--text">Tue, Mar 25</p>
                </div>            */}
            </div>
            <div className="homepage--explore">
                <button className="homepage--explore--button">Explore</button>
            </div>
        </div>
    );
};

export default HomepageBody;