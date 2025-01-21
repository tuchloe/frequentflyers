import '../HomepageBody/homepage-body.scss';
import Intro from '../FB-intro/FB-intro.jsx';
import mapAnywhere from '../../assets/images/fly-from-anywhere-jpeg.png';

function HomepageLower() {

    return (
    <>
    <div className='homepage--google'>
    <img src={mapAnywhere} className='homepage--google-img' alt="" />
    </div>
    <div className='homepage--fb-intro'>
        < Intro />
    </div>
    </>
    )
}

export default HomepageLower;