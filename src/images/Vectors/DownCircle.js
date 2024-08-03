import React from 'react'

const DownCircle = (props) => {
  return (
    <>
     <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    viewBox="0 0 330 330"
    {...props}
  >
    <path d="M165 0C74.019 0 0 74.019 0 165s74.019 165 165 165 165-74.019 165-165S255.981 0 165 0zm90.606 205.606C252.678 208.535 248.839 210 245 210s-7.678-1.464-10.606-4.394l-69.396-69.393-69.392 69.393c-5.857 5.858-15.355 5.858-21.213 0-5.858-5.857-5.858-15.355 0-21.213l79.998-80a15 15 0 0 1 21.213 0l80.002 80c5.859 5.858 5.859 15.356 0 21.213z" />
  </svg>
    </>
  )
}

export default DownCircle