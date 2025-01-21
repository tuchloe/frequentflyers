import './App.css'
import TooltipBuddy from './components/Tooltip/Tooltip_flightBuddy'
import TooltipHotelPicker from './components/ToolTip__hotelPicker/ToolTip__hotelPicker'
import FlightBuddyPopUp from './components/FlightBuddyPopUp/flightBuddyPopUp'
import FlightBuddyTab from './components/FlightBuddyTab/flightBuddyTab'
import homePageBody from './components/HomepageBody/homepage-body'
import FbIntro from './components/FB-intro/FB-intro'
import Hotels from './components/Hotel/Hotels'

function App() {

  return (
    <>
        <TooltipBuddy/>   
        <TooltipHotelPicker/>
        <FlightBuddyPopUp/>
        <FlightBuddyTab/>
        <homePageBody/>
        <FbIntro/> 
    </>
  );
};


export default App;