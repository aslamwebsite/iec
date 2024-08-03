import React from 'react';
import Container from '../Container/Index';
import Swiperslider from '../Swiperslider/Index';
import ImageTag from '../ImageTag/Index';
import FillShape from '../../images/Vectors/FillShape';
import './index.css';

const Index = ({ Data }) => {
  return (
    <>
      <Container containerClass={'float-end position-relative'}>
        <div className="col-12 float-start client_Bg_Image p-100 blueLayer">
          <div className='Number_Section position-relative col-lg-5 col-sm-8 col-12 m-auto'>
            <div className='title text-center text-white'>
              <h2 className='miniheading text-white'>Clients</h2>
              <h3 className='heading'>{Data.title}</h3>
              <p>{Data.descp}</p>
            </div>
          </div>
        </div>
       <div className='col-12 float-start clientLogo border-bottom pb-4'>
       <Swiperslider 
          spaceBetween={1} 
          slidesPerView={5}
          navigation={false} 
          pagination={{ clickable: true }} 
          timeDelay={8000}
        >
          {Data.clientLogo.map((logo, index) => (
            <div className='col-12 text-center flex-center pt-3' key={index} data-aos="fade-in" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
              <ImageTag ImagePath={logo.imagePath} ImageAlt={logo.imageAlt} />
            </div>
          ))}
        </Swiperslider>
       </div>
       <div className='topShape'><FillShape /></div>
      </Container>
    </>
  );
}

export default Index;
