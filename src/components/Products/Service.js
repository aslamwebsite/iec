import React from 'react'
import Call from '../../images/Vectors/Call'
import Email from '../../images/Vectors/Mail'
import downloadImage from '../../images/downloadContent.webp'
import ImageTag from '../../components/ImageTag/Index'
import FillShape from '../../images/Vectors/FillShape'

const Service = () => {
  return (
    <div className='salesService col-12 float-start flex-center flex-wrap gap-5'>
    <div className='col-12 float-start'>
         <div className='row flex-center'>
           <div className='col-lg-6 col-sm-12 col-12'>
               <div className='col-lg-10 col-12 float-end px-5'>
                 <span className='miniheading px-3'>After Sales Service</span>
                 <h2 className='heading greenBorder position-relative px-3 primary-color'>Customer Delight in Every Endeavour</h2>
                 <p className='px-3'>IEC Electric Power provides top-class customer support and seamless services for your after sales needs.</p>
               </div>
           </div>
           <div className='col-lg-6 col-sm-12 col-12 bg-primary colorCard text-white border-radius-right'>
               <div className='col-lg-8 col-sm-12 col-12'>
               <h3 className='fw-600 fs-4'>Pre-Installation & Installation Servicing</h3>
               <p>IEC Electric Power provides expert customer assistance for all your needs pre-installation and up to installation. </p>                          
               </div>
               <div className='col-12 float-start'>
               <ul className='d-flex col-lg-10 col-12 float-start contectDetails align-item-center pt-4 mt-4 '>
                 <li className='col-lg-5 col-12 d-flex align-items-center'><span><Call /></span><p className='d-grid m-0'><a href='tel:1724374444'>+91-172-4374444</a><a href='tel:9316045838'>+91-93160 45838</a></p></li>
                 <li className='col-lg-7 col-12 d-flex align-items-center'><span><Email /></span><p className='m-0'><a href='mailto:iec.chandigarh@iecgensets.com'>iec.chandigarh@iecgensets.com</a></p></li>
               </ul>
               </div>
           </div>
         </div>
       </div>
       <div className='col-12 float-start'>
         <div className='row flex-center flex-row-reverse'>
           <div className='col-lg-6 col-sm-12 col-12'>
               <div className='col-lg-10 col-12 float-end px-5'>
               <ImageTag ImagePath={downloadImage} imageAlt={'Download KIRLOSKAR GAS GENSET DATA SHEET'} />    
               <div className='topShape'><FillShape /></div>
               </div>
           </div>
           <div className='col-lg-6 col-sm-12 col-12 bg-primary colorCard text-white border-radius-left'>
               <div className='col-lg-8 col-sm-12 col-12'>
               <h3 className='fw-600 fs-4'>Pre-Installation & Installation Servicing</h3>
               <p>IEC Electric Power provides expert customer assistance for all your needs pre-installation and up to installation. </p>                          
               </div>
               <div className='col-12 float-start'>
               <ul className='d-flex col-lg-10 col-12 float-start contectDetails align-item-center pt-4 mt-4 '>
                 <li className='col-lg-5 col-12 d-flex align-items-center'><span><Call /></span><p className='d-grid m-0'><a href='tel:8806334433'>8806334433</a></p></li>
                 <li className='col-lg-7 col-12 d-flex align-items-center'><span><Email /></span><p className='m-0'><a href='mailto:koel.helpdesk@kirloskar.com'>koel.helpdesk@kirloskar.com</a></p></li>
               </ul>
               </div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default Service