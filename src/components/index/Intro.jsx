import React from 'react';
import { navigate } from 'gatsby';
import { Grid, Typography, Button, Box } from '@mui/material';
import boostImage from '../../images/intro-boost-image.avif';

const IntroSection = () => (
  <Grid item sx={{ textAlign: 'center', p: 8 }}>
    <Typography variant="h4" p={2} fontWeight={800}>Digital Experts - Boosting Your Online Success</Typography>
    <Box sx={{
      height: '300px',
      margin: '32px',
      borderRadius: '64px',
      overflow: 'hidden',
    }}>
    <img
      alt="Boosting Your Online Success"
      src={boostImage}
      style={{ objectFit: 'cover', width: '100%', height: 'inherit' }} />
    </Box>
    <Typography p={2}>Need help with your digital marketing? Illuminate Agency is a performance-focused, informal digital marketing agency based in Shoreditch, ready to tackle any problem from paid advertising to content, SEO, and analytics.</Typography>
    <Button variant="contained" p={2} color="secondary" onClick={() => navigate('#contact')}>Contact Us</Button>
  </Grid>
)

export default IntroSection;
