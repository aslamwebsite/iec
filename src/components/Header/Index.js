import React, { useRef } from 'react';
import '../Header/header.css';
import Container from '../Container/Index';
import Logo from '../Header/Logo/Index';
import Navbar from '../Header/Navbar/Index';
import useStickyHeader from './useStickyHeader';
import { NavLink } from 'react-router-dom';

const Index = () => {
  const headerRef = useRef(null);
  useStickyHeader(headerRef);

  return (
    <header className="col-12 float-start position-absolute top-0">
            <Container ref={headerRef} _parentClass="header">
        <div className="col-lg-2 col-7">
          <div className="logo" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
           <NavLink to='/'>
           <Logo />
           </NavLink>
          </div>
        </div>
        <div className="col-lg-10 col-5 d-flex align-items-baseline justify-content-end">
         <div className='row h-100 m-0'>
         <Navbar />
         </div>
        </div>
      </Container>
    </header>
  );
};

export default Index;
