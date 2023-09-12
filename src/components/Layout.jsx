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

const palette = {
  greyBlue: '#b4cbd5',
  grey: '#d2dede',
  blue: {
    main: '#61b0d5',
    dark: '#308bb5',
    light: '#9acde4',
  },
  green: {
    main: '#a6b65f',
    dark: '#8e9e48',
    light: '#ced7a7',
  },
  peach: {
    main: '#eec9a3',
    dark: '#db8d3d',
    light: '#f3d9be',
  },
};

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      dark: '#c6c7c9',
    },
    secondary: {
      main: palette.green.main,
      dark: palette.green.dark,
    },
    formInput: {
      main: '#333',
      dark: '#000',
      light: '#555',
      contrastText: '#fff',
    },
    background: {
      default: palette.grey,
      paper: palette.greyBlue,
      dark: palette.greyBlue,
      footer: palette.blue.dark,
      form: palette.blue.dark,
    },
    text: {
      primary: '#000',
      secondary: '#fff',
      tertiary: palette.greyBlue,
      quaternary: palette.blue.main,
      footerIcon: palette.green.main,
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
