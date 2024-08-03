import './App.css';
import './fonts/stylesheet.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
           <Route path='/' element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
