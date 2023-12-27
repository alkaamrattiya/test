// AdForm.

import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, Checkbox, FormControlLabel } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AdFormPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    heading1: '',
    heading2: '',
    marketingImage: '',
    videoUrl: '',
    businessName: '',
    websiteUrl: '',
    description: '',
    portraitImage: '',
    squareImage: '',
    textAdInput: '',
    mediaAdInput: '',
  });

  const [textAdChecked, setTextAdChecked] = useState(false);
  const [mediaAdChecked, setMediaAdChecked] = useState(false);

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleCheckboxChange = (name) => (event) => {
    if (name === 'textAd') {
      setTextAdChecked(event.target.checked);
    } else if (name === 'mediaAd') {
      setMediaAdChecked(event.target.checked);
    }
  };

  const handleBack = () => {
    console.log('Back button clicked');
  };

  /*const handleButtonClick = () => {
    if (textAdChecked || mediaAdChecked) {
      navigate('/fill-data');
    }
  };*/
  const handleButtonClic = () => {
    
    setTimeout(() => {
     // Navigate to Ads Submitted page
     navigate('/ads-submitted');
     setTimeout(() => {
       // Wait for 0.6 seconds and then navigate to Create Ads Page
       navigate('/create-ads');
     }, 600);
   }, 600);
 };
  
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Ad Form
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Heading 1"
          variant="outlined"
          value={formData.heading1}
          onChange={handleChange('heading1')}
        />
        <TextField
          label="Heading 2"
          variant="outlined"
          value={formData.heading2}
          onChange={handleChange('heading2')}
        />
        <TextField
          label="Marketing Image (1.9:1)"
          variant="outlined"
          value={formData.marketingImage}
          onChange={handleChange('marketingImage')}
        />
        <TextField
          label="Video URL"
          variant="outlined"
          value={formData.videoUrl}
          onChange={handleChange('videoUrl')}
        />
        <TextField
          label="Business Name"
          variant="outlined"
          value={formData.businessName}
          onChange={handleChange('businessName')}
        />
        <TextField
          label="Website URL"
          variant="outlined"
          value={formData.websiteUrl}
          onChange={handleChange('websiteUrl')}
        />
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange('description')}
        />
        <TextField
          label="Portrait Marketing Image (4:5)"
          variant="outlined"
          value={formData.portraitImage}
          onChange={handleChange('portraitImage')}
        />
        <TextField
          label="Square Marketing Image (1:1)"
          variant="outlined"
          value={formData.squareImage}
          onChange={handleChange('squareImage')}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={textAdChecked}
              onChange={handleCheckboxChange('textAd')}
              name="textAd"
              color="primary"
            />
          }
          label="Text Ad"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={mediaAdChecked}
              onChange={handleCheckboxChange('mediaAd')}
              name="mediaAd"
              color="primary"
            />
          }
          label="Media Ad"
        />

        {textAdChecked && (
          <TextField
            label="Text Ad Input"
            variant="outlined"
            value={formData.textAdInput}
            onChange={handleChange('textAdInput')}
          />
        )}
        {mediaAdChecked && (
          <TextField
            label="Media Ad Input"
            variant="outlined"
            value={formData.mediaAdInput}
            onChange={handleChange('mediaAdInput')}
          />
        )}

        <Button variant="contained" onClick={handleBack}>
          <NavLink to='/'>Back</NavLink>
        </Button>

        <Button variant="contained" color="primary" onClick={handleButtonClic}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default AdFormPage;
