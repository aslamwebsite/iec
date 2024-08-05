import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';

const Swiperslider = ({ children, spaceBetween, slidesPerView, navigation, pagination, timeDelay, centeredSlides }) => {
  const swiperModules = [Pagination, Navigation, Thumbs, Autoplay];
 
  if (slidesPerView === 1) {
    swiperModules.push(EffectFade);
  }

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView} 
      loop={true}
      pagination={pagination}
      navigation={navigation}
      autoplay={{ delay: timeDelay, disableOnInteraction: false }}
      effect={slidesPerView === 1 ? 'fade' : 'slide'} 
      modules={swiperModules}
      centeredSlides={centeredSlides}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='h-100'
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Swiperslider;
