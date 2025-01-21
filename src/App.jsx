import './App.css'
import TooltipBuddy from './components/Tooltip/Tooltip_flightBuddy'
import TooltipHotelPicker from './components/ToolTip__hotelPicker/ToolTip__hotelPicker'
import FlightBuddyPopUp from './components/FlightBuddyPopUp/flightBuddyPopUp'
import FlightBuddyTab from './components/FlightBuddyTab/flightBuddyTab'
import homePageBody from './components/HomepageBody/homepage-body'

function App() {

  return (
    <>
      <div className="App">
        <TooltipBuddy />
      </div>
      <div className="App">
        <TooltipHotelPicker />
      </div>
      <div>
        <FlightBuddyPopUp />
      </div>
      <div>
        <FlightBuddyTab />
      </div>
      <div>
        <homePageBody />
      </div>

    </>
  )
}

export default App
