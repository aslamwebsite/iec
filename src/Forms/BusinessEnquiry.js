import React, { useState } from 'react';
import WebContainer from '../components/WebContainer/Index';
import './index.css'
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
  Typography
} from '@mui/material';

const BusinessEnquiry = () => {
  const [formValues, setFormValues] = useState({
    text1: '',
    text2: '',
    text3: '',
    text4: '',
    select1: '',
    select2: '',
    select3: '',
    select4: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formValues);
  };

  return (
    <WebContainer _parentClass={'BusinessEnquiry'}>
       <div className='title text-center'>
              <h2 className='heading primary-color' data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">BUSINESS ENQUIRY</h2>
            </div>
      <form onSubmit={handleSubmit}>
        <Box className='rowFormControl d-flex gap-3' data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
          <TextField
            fullWidth
            label="FULL NAME"
            name="text1"
            value={formValues.text1}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="COMPANY"
            name="text2"
            value={formValues.text2}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="MOBILE NO"
            name="text3"
            value={formValues.text3}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="EMAIL ID"
            name="text4"
            value={formValues.text4}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
        </Box>
        <Box mb={2} className='rowFormControl d-flex gap-3' data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel id="select1-label">SELECT STATE</InputLabel>
            <Select
              labelId="select1-label"
              name="select1"
              value={formValues.select1}
              onChange={handleChange}
              label="Select Field 1"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel id="select2-label">SELECT SEGMENT</InputLabel>
            <Select
              labelId="select2-label"
              name="select2"
              value={formValues.select2}
              onChange={handleChange}
              label="Select Field 2"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel id="select3-label">SELECT  CITY</InputLabel>
            <Select
              labelId="select3-label"
              name="select3"
              value={formValues.select3}
              onChange={handleChange}
              label="Select Field 3"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel id="select4-label">SELECT PRODUCT</InputLabel>
            <Select
              labelId="select4-label"
              name="select4"
              value={formValues.select4}
              onChange={handleChange}
              label="Select Field 4"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box textAlign="center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="500" data-aos-once="true" data-aos-easing="ease-in-sine">
         <button className='customButton'>
          Submit
          </button>
        </Box>
      </form>
    </WebContainer>
  );
};

export default BusinessEnquiry;
