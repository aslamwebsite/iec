import React from 'react';
import Image01 from './images/power-solution.webp';
import Banner from './components/Banner/Index';
import Container from './components/Container/Index';
import Filter from './components/Products/Filter';
import Product01 from './images/products01.webp';
import Productcard from './components/Products/ProductCard';
import './components/Products/Index.css'
import TextMovement from './Animation/TextMovement';
import GallerySlider from './components/Gallery/GallerySlider';
import Gallery01 from './images/gallery01.webp'
import Gallery02 from './images/gallery01.webp'
import Gallery03 from './images/gallery01.webp'
import Gallery04 from './images/gallery01.webp'
import Gallery05 from './images/gallery01.webp'
import BusinessEnquiry from './Forms/BusinessEnquiry';
import Service from './components/Products/Service';

const Products = () => {
  const Banners = 
  {
    imagePath: Image01,
    imageAlt: 'IEC ELECTRIC POWER DIESEL GENSETS',
    heading: 'IEC ELECTRIC POWER DIESEL GENSETS'
  }
  const Overview = {
     title : 'Overview',
     subTitle : 'POWERING LIFE',
     descp : 'IEC Electric Power manufactures reliable, high-quality, Kirloskar diesel generators of different types. Prime rated and certified for quality, these Gensets are highly in-demand because they combine efficiency and power with affordable costing.'
  }
  const productList = [
    {
      title: 'LHP 10KVA-250KVA',
      imagePath: Product01,
      descriptions: [
        { label: 'Maximum Rating', value: '9.5 kVA' },
        { label: 'Minimum Rating', value: '6.8 kVA' },
        { label: 'Emissions/Fuel Strategy', value: 'R96/EUIIIa Equivalent' }
      ]
    },
    {
      title: 'LHP 10KVA-250KVA',
      descriptions: [
        { label: 'Maximum Rating', value: '9.5 kVA' },
        { label: 'Minimum Rating', value: '6.8 kVA' },
        { label: 'Emissions/Fuel Strategy', value: 'R96/EUIIIa Equivalent' }
      ]
    },
    {
      title: 'LHP 10KVA-250KVA',
      descriptions: [
        { label: 'Maximum Rating', value: '9.5 kVA' },
        { label: 'Emissions/Fuel Strategy', value: 'R96/EUIIIa Equivalent' }
      ]
    },
    {
      title: 'LHP 10KVA-250KVA',
      descriptions: [
        { label: 'Maximum Rating', value: '9.5 kVA' },
        { label: 'Minimum Rating', value: '6.8 kVA' },
        { label: 'Emissions/Fuel Strategy', value: 'R96/EUIIIa Equivalent' }
      ]
    },
    {
      title: 'LHP 10KVA-250KVA',
      descriptions: [
        { label: 'Maximum Rating', value: '9.5 kVA' },
        { label: 'Minimum Rating', value: '6.8 kVA' },
        { label: 'Emissions/Fuel Strategy', value: 'R96/EUIIIa Equivalent' }
      ]
    },
    {
      title: 'LHP 10KVA-250KVA',
      descriptions: [
        { label: 'Maximum Rating', value: '9.5 kVA' },
        { label: 'Minimum Rating', value: '6.8 kVA' },
        { label: 'Emissions/Fuel Strategy', value: 'R96/EUIIIa Equivalent' },
        { label: 'Maximum Rating', value: '9.5 kVA' },
        { label: 'Minimum Rating', value: '6.8 kVA' },
        { label: 'Emissions/Fuel Strategy', value: 'R96/EUIIIa Equivalent' }
      ]
    },
  ]
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
  return (
    <>
      <main>
        <Banner Data={Banners} />
        <Container>
          <div className="col-12 float-start">
            <div className="title text-center col-lg-6 col-12 m-auto">
              <span className="miniheading">{Overview.title}</span>
              <h2 className="heading primary-color">{Overview.subTitle}</h2>
              <p>
                {Overview.descp}
              </p>
            </div>
            <div className="col-12 float-start p-100 pb-0">
              <div className="row">
                <div className="col-lg-3 col-sm-12 col-12 p-0">
                  <Filter />
                </div>
                <div className="col-lg-9 col-sm-12 col-12">
                  <div className="row">
                    {productList.map((product, index) => (
                      <div className="col-lg-4 col-sm-6 col-12 p-0" key={index}>
                        <Productcard Data={product}/>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container containerClass={'float-end position-relative'} _parentClass={'dieselGensets'}>
                  <TextMovement />
            <Service />
        </Container>
        <GallerySlider Data={GalleryData}/>
        <BusinessEnquiry />
      </main>
    </>
  )
}

export default Products