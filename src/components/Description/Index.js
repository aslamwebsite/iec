import './index.css';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp } from './animation';
import Container from '../Container/Index';
import FillShape from '../../images/Vectors/FillShape'

const Index = ({Data}) => {
    const description = useRef(null);
    const isInView = useInView(description);
    
    return (
        <>
            <Container _parentClass='Overview' containerClass={'position-relative'}>
            <div className='HomesldiertopShape'><FillShape /></div>
                        <div ref={description} className="description col-lg-11 col-sm-12 col-12 m-auto">
                        <div className="row body justify-content-between">
                                <div className='col-lg-4 col-sm-6 col-12 px-5'>
                                    <div className='title m-0 position-relative px-4'  data-aos="fade-right" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
                                    <span className='miniheading'>About us</span>
                                <h1 className="heading greenBorder primary-color" dangerouslySetInnerHTML={{__html : Data.title}}>
                              </h1>
                                
                                    </div>
                                </div>
                                <div className='col-lg-6 col-sm-6 col-12'>
                                <p className='m-0 position-relative'>
                                    {Data.overview.split(" ").map((word, index) => (
                                        <span key={index} className="mask">
                                            <motion.span 
                                                variants={slideUp} 
                                                custom={index} 
                                                animate={isInView ? "open" : "closed"} 
                                                key={index}
                                            >
                                                {word}
                                            </motion.span>
                                        </span>
                                    ))}
                                </p>
                                
                                <div className='col-12 float-start' data-aos="fade-in" data-aos-offset="100" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
                                    <span className='customButton'>Know More</span>
                                </div>
                                </div>
                            </div>
                        </div>
            </Container>
        </>
    );
}

export default Index;
