import React, { useState } from "react";
import Container from "../../Container/Index";
import { NavLink } from "react-router-dom";

const Mobilenav = () => {
  const [menus, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!menus);
  };

  const handleMenuClick = () => {
    setActive(false);
  };


  return (
    <>
    <div
          className="menu_second_child flex-center flex-wrap"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-duration="800"
          data-aos-once="true"
          data-aos-easing="ease-in-sine"
        >
          <button
            onClick={handleToggle}
            className={menus ? "hamburger active" : "hamburger"}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <span className="col-12 float-start text-center text-uppercase text-white menuText">Menu</span>
        
        </div>
        <div className={menus ? "menus active" : "menus"}>
            <div className="col-12 float-start flex-center dropdown-content slideMenu">
              <ul>
                <li className="text-uppercase text-white"><a>Home</a></li>
                <li className="text-uppercase text-white"><a>About Us</a></li>
                <li className="text-uppercase text-white"><a>Power Solution</a></li>
                <li className="text-uppercase text-white"><a>Services</a></li>
                <li className="text-uppercase text-white"><a>Manufacturing Plant</a></li>
                <li className="text-uppercase text-white"><a>Client</a></li>
                <li className="text-uppercase text-white"><a>Certifications</a></li>
                <li className="text-uppercase text-white"><a>Career</a></li>
                <li className="text-uppercase text-white"><a>Contact Us</a></li>
              </ul>
            </div>
        </div>
    </>
  )
}

export default Mobilenav