import React, { useEffect } from 'react';
import '../Footer/Footer.css';
import Container from '../Container/Index';
import { Facebook } from '../../images/Vectors/Facebook';
import { Instagram } from '../../images/Vectors/Instagram';
import { Link, NavLink, useLocation } from 'react-router-dom';


const Index = () => {
  const year = new Date().getFullYear();
  const location = useLocation();

  const excellence = [
    { text: 'Gas Gensets' },
    { text: 'Diesel Gensets' },
    { text: 'LT Panels' },
    { text: 'Turnkey Projects' },
    { text: 'Hybrid Power Solutions' },
  ];

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); 
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash]);

  const handleScrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <footer className='col-12 float-start'>
        <Container _parentClass='p-100 pb-0' containerClass={'float-end bg-primary topBorderband'} >
          <div className='col-lg-10 col-sm-12 col-12 m-auto p-100 pb-2' data-aos="fade-in" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
          <div className='col-12 mb-5 float-start' data-aos="fade-in" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
            <div className='footerbox col-12 float-start'>
              <div className='col-12 float-start d-flex justify-content-between flex-wrap text-white'>
              <div className='footercolumn'>
                  <h3 className='fw-bold text-uppercase mb-3'>Home</h3>
                </div>
                <div className='footercolumn'>
                  <h3 className='fw-bold text-uppercase mb-3'>About us</h3>
                  <ul>
                    <li>Overview</li>
                    <li>MD’s Message</li>
                    <li>Leadership Team</li>
                    <li>Corporate Ethos</li>
                    <li>Corporate Video</li>
                  </ul>
                </div>
                <div className='footercolumn'>
                  <h3 className='fw-bold text-uppercase mb-3'>POWER SOLUTION </h3>
                  <ul>
                    {excellence.map((excellence, index) => (
                      <li key={index}>
                        {excellence.url ? (
                          <a href={excellence.url}>{excellence.text}</a>
                        ) : (
                          <>{excellence.text}</>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='footercolumn'>
                  <h3 className='fw-bold text-uppercase mb-3'> MANUFACTURING PLANT</h3>
                  
                </div>
                <div className='footercolumn'>
                  <h3 className='fw-bold text-uppercase mb-3'>Quick Links</h3>
                  <ul>
                   <li>Customer Support</li>
                   <li>Certifications</li>
                   <li>Clients</li>
                   <li>Career</li>
                   <li>Contact us</li>
                  </ul>
                </div>
                <div className='footercolumn'>
                <h3 className='fw-bold text-uppercase mb-3'>FOLLOW US</h3>
                  <div className='footerbox follow_us'>
                    <ul className='d-grid'>
                      <li className='fb'><a target='_blank' rel="noopener noreferrer"><span><Facebook /></span></a></li>
                      <li className='tel'><a target='_blank' rel="noopener noreferrer"><span><Instagram /></span></a></li>
                     </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 float-start d-flex justify-content-between pt-3 pb-3 mt-5 copyrightcont text-white'>
            <p><a>&copy; {year} | All Rights Reserved</a><a>Privacy Policy</a><a to='/terms-conditions'>Terms & Conditions</a></p>
            <p><a href='https://triverseadvertising.com/' target='_blank' rel="noopener noreferrer">site : triverse</a></p>
          </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Index;
