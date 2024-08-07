import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.css';

const Accordions = ({ Data }) => {
  const [expanded, setExpanded] = useState('panel0');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {Data.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          className='bg-transparent border-0 box-shadow-none text-white accordionDesign removeAfter rowBorder'
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className='bg-transparent box-shadow-none p-0'
          >
            <Typography className='fw-600'>{item.Title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ol className='flex-center flex-wrap gap-3 justify-content-start'>
                {item.Products.map((product, index) => (
                  <li key={index} className='col-12 float-start lh-1 flex-wrap gap-2'>
                    <a>{product.productName}</a>
                  </li>
                ))}
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default Accordions;
