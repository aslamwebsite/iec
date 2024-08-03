import React from 'react';

const Index = ({ firstHeading, secondHeading, _class, _classh4, Data }) => {
  return (
    <div className={`title text-center ${_class}`}>
       {firstHeading && (
        <span
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine"
          dangerouslySetInnerHTML={{ __html: firstHeading }}
        />
      )}
      {secondHeading && (
        <h4
          className={_classh4}
          data-aos="flip-down"
          data-aos-offset="100"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-easing="ease-in-sine"
          dangerouslySetInnerHTML={{ __html: secondHeading }}
        />
      )}
       {Data && 
       <p
       className="col-12 float-start text-center text-black text-uppercase mt-3"
       data-aos="fade-in"
       data-aos-offset="100"
       data-aos-duration="500"
       data-aos-once="true"
       data-aos-easing="ease-in-sine"
     >
       <strong>{Data.title}</strong>
     </p>
       }
    </div>
  );
};

export default Index;
