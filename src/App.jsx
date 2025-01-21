import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Hotels from "./components/Hotel/Hotels.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
            <Hotels />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;