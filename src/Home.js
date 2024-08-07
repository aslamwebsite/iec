import React from 'react';
import Heroslider from './components/Heroslider/Index';
import Image01 from './images/heroImage01.webp';
import Image02 from './images/heroImage02.webp';
import Image03 from './images/heroImage03.webp';
import Overview from './components/Description/Index';
import CountLoader from './components/CountLoader/Index';
import ProListing from './components/Products/ProListing';
import Client from './components/Client/Index'
import Image001 from './images/product01.webp'
import Image002 from './images/product02.webp'
import Image003 from './images/product03.webp'
import Image004 from './images/product04.webp'
import Image005 from './images/product05.webp'
import logo01 from './images/logo01.webp'
import logo02 from './images/logo02.webp'
import logo03 from './images/logo03.webp'
import logo04 from './images/logo04.webp'
import logo05 from './images/logo05.webp'
import GallerySlider from './components/Gallery/GallerySlider';
import Gallery01 from './images/gallery01.webp'
import Gallery02 from './images/gallery01.webp'
import Gallery03 from './images/gallery01.webp'
import Gallery04 from './images/gallery01.webp'
import Gallery05 from './images/gallery01.webp'
import BusinessEnquiry from './Forms/BusinessEnquiry';


const Homebanners = [
  {
    imagePath: Image01,
    imageAlt: 'Unleashing Power for Uninterrupted Success',
    heading: 'Unleashing Power for Uninterrupted Success'
  },
  {
    imagePath: Image02,
    imageAlt: 'Empowering your world with gensets that are built to last.',
    heading: 'Empowering your world with gensets that are built to last.'
  },
  {
    imagePath: Image03,
    imageAlt: 'Fueling the future with clean, reliable gas gensets.',
    heading: 'Fueling the future with clean, reliable gas gensets.'
  }
];
const AboutUs = {
  title : "Making Life Uninterrupted<br/> Since 1988",
  overview : "IEC Electric Power is a part of the prestigious IEC Group. Led by industry captains with decades of experience as the foremost providers of power solutions, they specialize in captive power generation and medium & low voltage distributions. Since 1988, IEC Group has been manufacturing state-of-the-art Diesel Gensets renowned for their reliability and performance across a diverse range of industries. Building on this legacy of excellence, IEC Electric Power uses latest technologies and ultra-efficient manufacturing to deliver the ultimate in power back-up solutions.",
  
}
const Numbers = {
  title: "IEC IN NUMBERS",
  numberData: [
    {
      startValue: 5,
      endValue: 35,
      speed: 400,
      label: "Years of Legacy in Leadership",
      Plus: "+"
    },
    {
      startValue: 100,
      endValue: 1000,
      speed: 400,
      label: "Employees",
      Plus: "+"
    },
    {
      startValue: 1000,
      endValue: 3000,
      speed: 400,
      label: "Genset Annual Manufacturing Capacity",
    },
    {
      startValue: 0,
      endValue: 15000,
      speed: 400,
      label: "Units Sold So Far",
      Plus: " +"
    }
  ]
};
const Category = [
  {
      imagePath : Image001,
      title : 'Gas Gensets',
      descp : 'Our gas gensets are designed to provide dependable and efficient power generation, harnessing the energy potential of natural gas to drive your operations forward.'
  },
  {
    imagePath : Image002,
    title : 'Diesel Gensets',
    descp : 'Diesel gensets, also known as diesel generators, are devices that convert the mechanical energy of a diesel engine into electrical energy. They are widely used for power generation in various applications, including'
},
{
  imagePath : Image003,
  title : 'LT Panels',
  descp : 'LT (Low Tension) panels, also known as Main Distribution Boards (MDBs) or Distribution Boards (DBs), are electrical panels that distribute power to various circuits in a building or installation.'
},
{
  imagePath : Image004,
  title : 'TURNKEY PROJECTS',
  descp : 'EC Electric Power offers a number of project and service solutions for your 24x7 uninterrupted power needs. '
},
{
  imagePath : Image005,
  title : 'HYBRID POWER SOLUTIONS',
  descp : 'Welcome to Hybrid Power Solutions, your premier partner in innovative energy solutions.'
}
]
const ClientData = {
  title: 'Legacy of Expertise',
  descp: 'IEC Group has decades of experience delivering expert power solutions to leading brands, corporates and institutions in India.',
  clientLogo: [
    {
      imagePath: logo01,
      imageAlt: 'NHPC',
    },
    {
      imagePath: logo02,
      imageAlt: 'NHPC',
    },
    {
      imagePath: logo03,
      imageAlt: 'NHPC',
    },
    {
      imagePath: logo04,
      imageAlt: 'NHPC',
    },
    {
      imagePath: logo05,
      imageAlt: 'NHPC',
    }
  ]
}
const GalleryData =  [
    {
      imagePath: Gallery01,
      imageAlt: 'NHPC',
    },
    {
      imagePath: Gallery02,
      imageAlt: 'NHPC',
    },
    {
      imagePath: Gallery03,
      imageAlt: 'NHPC',
    },
    {
      imagePath: Gallery04,
      imageAlt: 'NHPC',
    },
    {
      imagePath: Gallery05,
      imageAlt: 'NHPC',
    }
  ]
const Home = () => {
  return (
    <main>
      <Heroslider Data={Homebanners} />
      <Overview Data={AboutUs}/>
      <CountLoader Data={Numbers} />
      <ProListing Data={Category}/>
      <Client Data={ClientData}/>
      <GallerySlider Data={GalleryData}/>
      <BusinessEnquiry />
    </main>
  );
}

export default Home;
