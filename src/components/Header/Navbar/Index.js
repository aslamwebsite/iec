import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Outline from "../../Button/Outline/Index";
import Fill from "../../Button/Fill/Index";
import SubMenu from "../../Header/Navbar/SubMenu";
import "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import Product01 from '../../../images/products01.webp'

const menuData = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/under-construction" },
  {
    name: "Power Solutions",
    link: "/power-solutions",
    submenus: [
      {
        icon: Product01,
        text: "Gas Gensets",
        link: "/under-construction",
      },
      {
        text: "Diesel Gensets",
      },
      {
        text: "LT Panels",
      },
      {
        text: "Turnkey Projects",
      },
      {
        text: "Hybrid Power Solutions",
      }
    ],
    showViewAllLink: true,
  },
  {
    name: "Services",
    link: "/under-construction",
  },
  { name: "Manufacturing Plant", link: "/under-construction" },
  { name: "Clients", link: "/under-construction" },
  { name: "Certifications", link: "/under-construction" },
];

const Index = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [menus, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!menus);
  };

  const handleMenuClick = () => {
    setActive(false);
  };

  return (
    <div className="navbar gap-3 p-0">
      <div className="col-12 float-start d-flex justify-content-end gap-3">
        <Outline
          buttonText="Contact us"
          _class={'whitetextColor'}
        />
        <Fill buttonText2="Request a Quote" buttonText1="Request a Quote" />
      </div>
      <div className="col-12 float-start navbarcolumn d-flex justify-content-end align-items-center">
        <div className="menuStrip">
          <ul className="d-flex">
            {menuData.map((menu, index) => (
              <li key={index}>
                <span
                  data-aos="fade-in"
                  data-aos-offset="100"
                  data-aos-duration="500"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                >
                  {menu.link ? (
                    <NavLink to={menu.link} onClick={handleMenuClick}>
                      {menu.name}
                    </NavLink>
                  ) : (
                    menu.name
                  )}
                </span>
                {menu.submenus && (
                  <SubMenu submenus={menu.submenus} showViewAllLink={menu.showViewAllLink} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
