import React from 'react';
import Swiperslider from '../Swiperslider/Index';
import ImageTag from '../ImageTag/Index';
import '../Heroslider/index.css';
import Mobilenav from '../Header/Navbar/Mobilenav';
import FillShape from '../../images/Vectors/FillShape';

const Index = ({ Data }) => {
  return (
    <section className='col-12 float-start bg-primary flex-center overflow-hidden heroSlider'>

      <div className='leftMenu'>
        <Mobilenav />
      </div>
      <div className='col-lg-11 col-sm-12 col-12 float-end h-100'>
        <Swiperslider spaceBetween={1} slidesPerView={1} navigation={false} pagination={{ clickable: true }} timeDelay={'6000'}>
          {Data.map((slide, index) => (
            <div
              className={`col-12 float-start h-100 slideParent ${index % 2 === 0 ? 'evenSlide' : 'oddSlide'}`}
              key={index}
            >
              <div className='container h-100'>
                <div className='row flex-center loadeffect h-100'>
                  <div className='col-lg-7 col-md-7 col-xs-12 col-12 h-100'>
                    <ImageTag ImagePath={slide.imagePath} ImageAlt={slide.imageAlt}/>
                    <em className='HomesldierbottomShape'><FillShape /></em>
                  </div>
                  <div className='col-lg-5 col-md-5 col-xs-12 col-12'>
                    <span className='heading text-white greenBorder position-relative d-block px-4' dangerouslySetInnerHTML={{ __html: slide.heading }} />
                    <em className='HomesldiertopShape'><FillShape /></em>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Swiperslider>
      </div>
    </section>
  );
}

export default Index;
