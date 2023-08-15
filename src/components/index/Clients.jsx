import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import logoOne from '../../images/logos/logoipsum-212.svg';
import logoTwo from '../../images/logos/logoipsum-214.svg';
import logoThree from '../../images/logos/logoipsum-215.svg';
import logoFour from '../../images/logos/logoipsum-216.svg';
import logoFive from '../../images/logos/logoipsum-217.svg';
import logoSix from '../../images/logos/logoipsum-218.svg';
import logoSeven from '../../images/logos/logoipsum-219.svg';
import logoEight from '../../images/logos/logoipsum-221.svg';
import ToolbarNegativeSpacer from '../ToolbarNegativeSpacer';

const ClientsSection = () => {
  const logos = [logoOne, logoTwo, logoThree, logoFour, logoFive, logoSix, logoSeven, logoEight];
  return (
    <Grid item>
      <Grid item xs={12}>
        <ToolbarNegativeSpacer id="clients" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ textAlign: 'center', p: 4 }}>Our Clients</Typography>
      </Grid>
      <Grid item container>
        {logos.map((logo) => (
          <Grid key={logo} item xs={12} sm={4} md={3} xl={2} sx={{ textAlign: 'center', p: 2 }}>
            <img src={logo} alt="Client Logo" placeholder="none" />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ClientsSection;
