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
          <Typography p={1}>Increase your website's search visibility and drive more organic traffic with our full range of SEO services. From domain authority boosting and website technical consultancy, to content relevancy analysis - we have the expertise to help you dominate search engine rankings!</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper sx={{ m: 4 }}>
          <Typography variant="h6" p={1}>Paid Social Media Campaigns - Grow Your Brand!</Typography>
          <Typography p={1}>We have years of experience helping a variety of brands create social media strategies to grow their online presence and achieve results. Our social media management will allow you to engage your audience through creative and eye-catching campaigns and maximise performance through retargeting strategies.</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Paper sx={{ m: 4 }}>
          <Typography variant="h6" p={1}>PPC Account Management - Take Advantage of Search Opportunities</Typography>
          <Typography p={1}>Capture audience interest and accelerate business growth with our PPC account management. We'll help you to identify relevant search terms and optimise ad campaigns to engage users and direct traffic to your website. We also have extensive experience using AI-powered solutions to find new customers and unlock additional performance.</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Grid>
)

export default ServicesSection;
