import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';
import Footer from './Footer';
import '../styles/font.css';

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      dark: '#c6c7c9',
    },
    secondary: {
      main: '#6a3259',
      dark: '#5D3250',
    },
    background: {
      default: '#fff',
      paper: '#f6f4f5',
      dark: '#f6f4f5',
      footer: '#2a3030',
      form: '#23506d',//
    },
    text: {
      primary: '#000',
      secondary: '#fff',//
      tertiary: '#afbfd0',//
      quaternary: '#328CC1',//
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'serif'].join(','),
  },
});

function Layout({ location, children }) {
  const scrollTopThresholdPassed = useScrollTrigger({ threshold: 300 });
  return (
    <ThemeProvider theme={mainTheme}>
      <Helmet>
        <title>Illuminate Agency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <CssBaseline />
      <Menu path={location.pathname} />
      {children}
      <Footer path={location.pathname} />
      <Fade in={scrollTopThresholdPassed}>
        <Fab
          sx={{
            position: 'fixed',
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(2),
            backgroundColor: 'secondary.main',
            border: (theme) => `1px solid ${theme.palette.secondary.main}`,
            color: (theme) => theme.palette.text.secondary,
            '&:hover': {
              backgroundColor: (theme) => theme.palette.secondary.dark,
            },
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FontAwesomeIcon icon={faAngleUp} transform="grow-8" />
        </Fab>
      </Fade>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
