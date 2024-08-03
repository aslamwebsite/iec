import React from 'react'
import WebContainer from '../WebContainer/Index'
import Procard from './Prcocard'
import './Index.css'
import Quote from '../../images/Vectors/Quote'
import FillShape from '../../images/Vectors/FillShape';

const ProListing = ({Data}) => {

    return (
    <WebContainer _parentClass={'productStn position-relative'}>
        <div className='bottomShape'><FillShape /></div>
            <div className='row'>
                <div className='col-12 float-start'>
                    <div className='title text-center col-12 float-start'>
                        <h2 className='miniheading' data-aos="flip-left" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">Power Solutions</h2>
                        <h3 className='heading primary-color' data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">Life On, Power On</h3>
                    </div>
                  <div className='col-lg-10 col-sm-10 col-12 m-auto'>
                    <div className='row'>
                       {Data.map((product, index) => 
                    <div className='col-lg-6 col-sm-6 col-12' key={index} data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
                        <Procard Data={product}/>
                    </div>
                    )}
                    <div className='col-lg-6 col-sm-6 col-12'>
                    <div className='cardStnComponent card bg-secondary position-relative text-center'>
                        <span className='svgIcon'><Quote /></span>
                        <h5>Where power meets precision, our gensets are the perfect fusion.</h5>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='topShape'><FillShape /></div>
    </WebContainer>
  )
  
}


export default ProListing