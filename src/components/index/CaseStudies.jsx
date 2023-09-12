import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import caseOneImage from '../../images/case-studies/office-concept-illustration.jpg';
import caseTwoImage from '../../images/case-studies/flat-people-business-training-illustrated.jpg';
import caseThreeImage from '../../images/case-studies/office-background-video-conferencing.jpg';

const CaseStudiesSection = () => (
  <Grid item id="case-studies">
    <Grid container p={2}>
      <Grid item container xs={12}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" pl={4} pr={4} pt={2}>Case Study #1: Unlocking Paid Social with Virgin Experience Holidays</Typography>
          <Typography p={4}>We took our unique lateral audience strategy to task for Virgin, looking at users overlapping interests as well as direct advertising. Over the first two months, we achieved a 145% increase in site visitors from social media sources, and a 13% increase in transaction volume.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
          <img alt="Case Study 1" src={caseOneImage} height={300} style={{ padding: '32px', borderRadius: '64px' }} />
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
          <img alt="Case Study 2" src={caseTwoImage} height={300} style={{ padding: '32px', borderRadius: '64px' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" pl={4} pr={4} pt={2}>Case Study 2: SEO for FirstVet</Typography>
          <Typography p={4}>FirstVet approached us looking to improve their organic search coverage. By deeply analysing niche keywords for services that competitors were ignoring, We ran a campaign that increased organic click volume 14,000% over 6 months and improved overall page rankings by 179%.</Typography>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" pl={4} pr={4} pt={2}>Case Study 3: Conversion Rate Optimisation for Wax London</Typography>
          <Typography p={4}>Wax London were one of our first clients, bringing quality men’s fashion to an international audience. Our competitive strategy on paid social channels and creative feedback process improved site revenues year on year by 234% for paid channels, and 284% across their entire site.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
          <img alt="Case Study 3" src={caseThreeImage} height={300} style={{ padding: '32px', borderRadius: '64px' }} />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

export default CaseStudiesSection;
