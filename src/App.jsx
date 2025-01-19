import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/header/header.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
            <Header />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;