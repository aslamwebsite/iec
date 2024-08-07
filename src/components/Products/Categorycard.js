import React from 'react'
import ImageTag from '../ImageTag/Index'

const Categorycard = ({Data}) => {
  return (
    <>
    
        <div className='cardStnComponent card'>
        <div className='col-12 float-start icons text-end'>
            <ImageTag ImagePath={Data.imagePath} alt={Data.title}/>
        </div>
        <div className='col-12 float-start productContent'>
            <h4 className='productTitle text-uppercase'>{Data.title}</h4>
            <p>{Data.descp}</p>
        </div>
        <div className='col-12 flaot-start productKnowmore flex-center justify-content-end'>
            <span className='flex-center'>+</span>
        </div>
    </div>
    </>
  )
}

export default Categorycard