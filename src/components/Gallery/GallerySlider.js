import React from 'react'
import './index.css'
import Container from '../Container/Index'
import Swiperslider from '../Swiperslider/Index'
import ImageTag from '../ImageTag/Index';

const GallerySlider = ({ Data }) => {
  return (
    <Container containerClass={'float-end p-0'} _parentClass={'gallerySwiper whiteArrow'}>
            <div className='title text-center'>
              <h2 className='miniheading' data-aos="flip-left" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">Gallery</h2>
              <h3 className='heading primary-color' data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">Tech at work</h3>
            </div>
            <div className='col-12 float-start gallerySlider' data-aos="fade-in" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
            <Swiperslider 
          spaceBetween={10} 
          slidesPerView={1.5}
          navigation={true} 
          timeDelay={8000}
          centeredSlides={true}
        >
           {Data.map((logo, index) => (
            <div className='col-12 text-center flex-center blackLayer position-relative' key={index}>
              <ImageTag ImagePath={logo.imagePath} ImageAlt={logo.imageAlt} />
            </div>
          ))}
                </Swiperslider>
            </div>
    </Container>
  )
}

export default GallerySlider