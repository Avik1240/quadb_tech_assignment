import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import React,  {useState} from "react";
function App() {

  return (

    <>
        <Router>
          
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} /> */}
            </Routes>
          
        </Router>
      
      
    </>
  );
}

export default App;
