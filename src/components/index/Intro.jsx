import React from 'react';
import { navigate } from 'gatsby';
import { Grid, Typography, Button } from '@mui/material';

const IntroSection = () => (
  <Grid item sx={{ textAlign: 'center', p: 8 }}>
    <Typography variant="h4" p={2} fontWeight={800}>Digital Experts - Boosting Your Online Success</Typography>
    <Typography p={2}>Need help with your digital marketing? Illuminate Agency is a performance-focused, informal digital marketing agency based in Shoreditch, ready to tackle any problem from paid advertising to content, SEO, and analytics.</Typography>
    <Button variant="contained" p={2} color="secondary" onClick={() => navigate('#contact')}>Contact Us</Button>
  </Grid>
)

export default IntroSection;
