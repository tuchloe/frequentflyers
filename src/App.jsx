import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TooltipBuddy from './components/Tooltip/Tooltip_flightBuddy'
import TooltipHotelPicker from './components/ToolTip__hotelPicker/ToolTip__hotelPicker'
import FlightBuddyPopUp from './components/FlightBuddyPopUp/flightBuddyPopUp'
import FlightBuddyTab from './components/FlightBuddyTab/flightBuddyTab'
import HomePageBody from './components/HomepageBody/homepage-body'
import FbIntro from './components/FB-intro/FB-intro'
import Hotels from './components/Hotel/Hotels'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={
          <>
          < HomePageBody />
          
          </>
        } />

        <Route path="/BOS-CDG" element={
          < FlightBuddyTab />
        } />

        <Route path ="/buddy-picks" element={
          <>
          < TooltipHotelPicker />
          {/* < FbIntro /> */}
          </>
        } />

      </Routes>
    </BrowserRouter>
    </>
  )
};

export default App;

