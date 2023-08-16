import React from 'react';
import { Grid, Box } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from '../components/Layout';
import Intro from '../components/index/Intro';
import Services from '../components/index/Services';
import CaseStudies from '../components/index/CaseStudies';
import Clients from '../components/index/Clients';
import Contact from '../components/index/Contact';

const IndexPage = ({ location }) => {
  const sections = [Intro, Services, CaseStudies, Clients, Contact];
  return (
    <Layout location={location}>
      <Grid container>
        {sections.map((Section, index) => (
          <Grid item xs={12} key={index}>
            <Box sx={{ backgroundColor: index % 2 ? 'background.default' : 'background.dark'}}>
              <ErrorBoundary fallback={({ error }) => {
                console.log(error);
                return (
                  <Box></Box>
                );
              }}>
                <Section key={index} />
              </ErrorBoundary>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export default IndexPage;
