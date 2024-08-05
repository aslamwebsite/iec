import React from 'react'
import ImageTag from "../ImageTag/Index"
import Maintaince from '../../images/Website-Maintenance-Animation.gif'
import WebContainer from '../WebContainer/Index'

const Index = () => {
  return (
    <WebContainer _parentClass={`excellence p-100`}>
      <div className='title text-center'>
        <h2 className='heading'>Page is under Construction</h2>
      </div>
    <div className='col-12 float-start'>
    <div className='row'>
     <div className='col-lg-6 col-12 m-auto'>
     <ImageTag ImagePath={Maintaince} />
     </div>
    </div>
  </div>
</WebContainer>
  )
}

export default Index