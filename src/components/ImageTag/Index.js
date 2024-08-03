import React from 'react';
import noimg from '../../images/no-image.webp';

const Index = ({ ImagePath, ImageAlt = 'ICE Unleashing Power', ImageWidth, ImageHeight, ImageClass }) => {
  const imgSrc = ImagePath || noimg;

  return (
    <img
      src={imgSrc}
      alt={ImageAlt}
      width={ImageWidth}
      height={ImageHeight}
      className={ImageClass}
      loading="lazy"
    />
  );
};

export default Index;
