import React from 'react';
import Accordions from '../Accordions/Index';

const Filter = () => {
    const Data = [
        {
            Title: 'Diesel Gensets Type',
            Products: [
                { productName: 'LHP 10KVA-250KVA' },
                { productName: 'MHP-320KVA-750KVA' },
                { productName: 'HHP 890-1500KVA' }
            ]
        },
        {
            Title: 'Rating KW - KVA',
            Products: [
                { productName: 'LHP 10KVA-250KVA' },
                { productName: 'MHP-320KVA-750KVA' },
                { productName: 'HHP 890-1500KVA' }
            ]
        },
        {
            Title: 'Frequency',
            Products: [
                { productName: 'LHP 10KVA-250KVA' },
                { productName: 'MHP-320KVA-750KVA' },
                { productName: 'HHP 890-1500KVA' }
            ]
        }
    ];

    return (
        <>
           <div className='col-12 flaot-start bg-primary cardStnComponent card mx-0 gap-0 filterDesign'>
           <Accordions Data={Data} />
           </div>
        </>
    );
};

export default Filter;
