import './App.css';
import './fonts/stylesheet.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from './Home';
import Header from './components/Header/Index';
import Footer from './components/Footer/Index';
import Undermaintaince from './components/Undermaintaince/Index';
import ScrollToTop from "./ScrollToTop";
import Product from './Products';
import Products from './Products';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <HeaderWithCondition />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/power-solutions' element={<Products />} />
          <Route path='/under-construction' element={<Undermaintaince />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

function HeaderWithCondition() {
  const location = useLocation();
  console.log("Current Path:", location.pathname); 
  const isSlugPage = location.pathname.startsWith("/under-construction");
  const headerClass = isSlugPage ? "proHeaderClass position-relative" : "";
  return <Header relativeHeader={headerClass} />;
}

export default App;
