import React from 'react';
import ImageTag from '../ImageTag/Index';
import Button from '../Button/Fill/Index';

const ProductCard = ({Data}) => {
 
  return (
    <div className='cardStnComponent card h-auto'>
      <div className='col-12 float-start flex-center flex-wrap gap-2'>
        <div className='productTitle'>
          <h3 className='fw-bold text-black'>{Data.title}</h3>
        </div>
        <div className='productImg'>
          <ImageTag ImagePath={Data.imagePath} ImageAlt={Data.title} />
        </div>
        <div className='productDescp col-12 float-start'>
          <ul className='flex-center flex-wrap gap-4 justify-content-start'>
            {Data.descriptions.map((desc, index) => (
              <li key={index} className='d-grid col-12 float-start lh-1 flex-wrap gap-2'>
                <span>{desc.label}</span>
                <strong>{desc.value}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div className='productButton col-12 float-start'>
          <Button buttonText1={'View Detail'} buttonText2={'View Detail'} _class={'w-100'}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
