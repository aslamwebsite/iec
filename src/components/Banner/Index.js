import React from 'react'
import ImageTag from '../ImageTag/Index';
import './index.css'
const Index = ({ Data }) => {
    return (
        <section className='col-12 float-start  flex-center overflow-hidden'>
            <div className='col-12 float-start InternalBanner position-relative' >
                <ImageTag ImagePath={Data.imagePath} ImageAlt={Data.imageAlt} />
                         <h1 className='heading position-absolute text-white greenBorder d-block px-4' dangerouslySetInnerHTML={{ __html: Data.heading }} />
                  </div>
        </section>
    )
}

export default Index