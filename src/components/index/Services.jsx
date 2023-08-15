import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import ToolbarNegativeSpacer from '../ToolbarNegativeSpacer';

const ServicesSection = () => (
  <Grid item>
    <Grid item xs={12}>
      <ToolbarNegativeSpacer id="services" />
    </Grid>
    {/* Expertise Boxes */}
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" p={4}>Services we provide</Typography>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper sx={{ m: 4 }}>
          <Typography variant="h6" p={1}>Boost Your Online Visibility with SEO</Typography>
          <Typography p={1}>Boost your website's visibility and drive more organic traffic with our SEO services - get ready to dominate search engine rankings!</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper sx={{ m: 4 }}>
          <Typography variant="h6" p={1}>Social Media Magic - Boost Your Brand!</Typography>
          <Typography p={1}>Our SMM service helps businesses boost their online presence and engage with their audience through strategic social media management.</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper sx={{ m: 4 }}>
          <Typography variant="h6" p={1}>Boost Your Brand with Engaging Content</Typography>
          <Typography p={1}>Our content marketing service helps you create engaging and shareable content that connects with your target audience in a relaxed and friendly way.</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper sx={{ m: 4 }}>
          <Typography variant="h6" p={1}>Boost Your Leads with Expertise</Typography>
          <Typography p={1}>Need more leads for your business? We've got you covered! Out lead generation service helps you find porential customers and grow your sales.</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Grid>
)

export default ServicesSection;
