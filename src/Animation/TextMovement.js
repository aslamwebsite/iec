import React, { useEffect } from 'react';

export const TextMovement = () => {
  useEffect(() => {
    const handleScroll = () => {
      const textElements = document.querySelectorAll('.scroll-animated-text');
      if (textElements) {
        const scrollY = window.scrollY;
        textElements.forEach((textElement) => {
          textElement.style.transform = `translate3d(-${scrollY * 0.5}px, 0, 0)`; // Adjust the factor (0.1) as needed
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='col-12 float-start title'>
            <div className='overflow-hidden col-12 float-start'>
              <p className='scroll-animated-text'>Types of Diesel Gensets</p>
            </div>
          </div>
    </>
  );
};
export default TextMovement;