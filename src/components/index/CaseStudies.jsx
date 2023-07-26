import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import caseOneImage from '../../images/case-studies/office-concept-illustration.jpg';
import caseTwoImage from '../../images/case-studies/flat-people-business-training-illustrated.jpg';

const CaseStudiesSection = () => (
  <Grid item id="case-studies">
    <Grid container p={2}>
      <Grid item container xs={12}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" pl={4} pr={4} pt={2}>Case study #1</Typography>
          <Typography p={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          <Button sx={{ ml: 4 }} variant="contained" color="secondary">Read More</Button>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
          <img src={caseOneImage} height={300} style={{ padding: '32px', borderRadius: '64px' }} />
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
            <img src={caseTwoImage} height={300} style={{ padding: '32px', borderRadius: '64px' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" pl={4} pr={4} pt={2}>Case study #2</Typography>
          <Typography p={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          <Button sx={{ ml: 4 }} variant="contained" color="secondary">Read More</Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

export default CaseStudiesSection;
