import React from 'react'

const Radiology = ({Data, themeColor, viewBox}) => {
  return (
    <>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} className={themeColor}  dangerouslySetInnerHTML={{ __html: Data }}  />
    </>
  )
}

export default Radiology