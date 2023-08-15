import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useStaticQuery, graphql } from 'gatsby';
import ToolbarNegativeSpacer from '../ToolbarNegativeSpacer';

const ClientsSection = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {
        extension: { eq: "png" }
        relativeDirectory: {eq: "client-logos" }
      }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  const logos = data?.allFile?.edges || [];
  return (
    <Grid item>
      <Grid item xs={12}>
        <ToolbarNegativeSpacer id="clients" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ textAlign: 'center', p: 4 }}>Our Clients</Typography>
      </Grid>
      <Grid item container>
        {logos.map(({ node: { name, publicURL } }) => (
          <Grid key={name} item xs={12} sm={4} md={3} xl={2} sx={{ height: '100px', textAlign: 'center', p: 2 }}>
              <img src={publicURL} alt={name} placeholder="none" style={{ maxHeight: '100%', maxWidth: '100%' }} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ClientsSection;
