import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlightBuddyTab from './components/FlightBuddyTab/flightBuddyTab'
import HomepageBody from './components/HomepageBody/homepage-body'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        < HomepageBody />
        } />

        <Route path="/BOS-ORY" element={
        < FlightBuddyTab />
        } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
