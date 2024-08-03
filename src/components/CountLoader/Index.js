import React from "react";
import Counter from "../CountLoader/Loader";
import "../CountLoader/Counter.css";
import Container from "../Container/Index";

const Index = ({Data}) => {
  return (
    <Container containerClass={'float-end'}>
                <div className="col-12 float-start number_Bg_Image p-100 blueLayer">
                  <div className="Number_Section position-relative col-12 float-start">
              <div className="col-12 float-start title flex-center">
                <h2 className="miniheading text-white" data-aos="flip-left" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">{Data.title}</h2>
              </div>
      <div className="numberrow col-12 float-start flex-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
        {Data &&
          Data.numberData.map((counter, index) => (
            <div key={index} className="numbercolumn text-white">
              {counter.startValue !== undefined &&
              counter.endValue !== undefined ? (
                <div className="countercount d-flex">
                  <Counter
                    startValue={counter.startValue}
                    endValue={counter.endValue}
                    speed={counter.speed}
                    className="m-0 p-0"
                  />
                  {counter.Plus && <span className="contentIcon">{counter.Plus}</span>}
                  {counter.Heading && <span className="contentText">{counter.Heading}</span>}
                  
                </div>
              ) : (
                <div className="countercount d-flex">
                  <span>{counter.Plus}</span>
                  <span className="m-t0">{counter.Heading}</span>
                </div>
              )}
              <div className="countercont m-0 ">
                <p className="m-0 text-white">{counter.label}</p>
              </div>
            </div>
          ))}
      </div></div>
                </div>
    </Container>
  );
};

export default Index;
