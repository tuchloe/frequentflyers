import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Intro from "./components/FB-intro/FB-intro.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
            <Intro />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;