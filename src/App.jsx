import './App.css'
import TooltipBuddy from './components/Tooltip/Tooltip_flightBuddy'
import TooltipHotelPicker from './components/ToolTip__hotelPicker/ToolTip__hotelPicker'

function App() {

  return (
    <>
      <div className="App">
        <TooltipBuddy />
      </div>
      <div className="App">
        <TooltipHotelPicker />
      </div>
    </>
  )
}

export default App
