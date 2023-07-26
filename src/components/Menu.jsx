import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

function Menu({ path }) {
  const { breakpoints } = useTheme();
  const isWide = useMediaQuery(breakpoints.up('md'));
  const scrollTopThresholdPassed = useScrollTrigger({ disableHysteresis: true, threshold: 300 });
  const isDense = isWide && !scrollTopThresholdPassed;
  const menuButtonStyle = {
    color: 'text.primary',
    '&:hover': { color: 'text.tertiary' },
    paddingLeft: (theme) => theme.spacing(2),
    paddingRight: (theme) => theme.spacing(2),
  };
  const toolbarStyle = {
    transition: (theme) => theme.transitions.create(
      ['padding-top', 'padding-bottom', 'min-height', 'border-bottom'],
      { duration: theme.transitions.duration.complex },
    ),
    borderBottom: isDense
      ? (theme) => `0px solid ${theme.palette.primary.main}`
      : (theme) => `1px solid ${theme.palette.primary.dark}`,
    minHeight: { xs: isDense ? (theme) => theme.spacing(8) : 0 },
    pt: { sm: isDense ? 2 : 1 },
    pb: { sm: isDense ? 2 : 1 },
    pl: { sm: 8 },
    pr: { sm: 8 },
  };
  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          position: 'fixed',
          backgroundColor: isDense ? 'background.default' : 'background.paper',
        }}
      >
        <Toolbar sx={toolbarStyle}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            sx={{ color: 'text.primary' }}
            component="button"
            underline="none"
            onClick={() => navigate('/')}
          >
            <Typography variant="h6" display="inline" pl={1}>Illuminate Agency</Typography>
          </Link>
          <Box sx={{
            flexGrow: 1,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            typography: 'body1',
            '& > :not(style) + :not(style)': {
              ml: 2,
            },
          }}
          >
          <Button
            sx={menuButtonStyle}
            variant={path.startsWith('/services') ? 'contained' : 'text'}
            onClick={() => navigate('#services')}
          >
            Services
          </Button>
          <Button
            sx={menuButtonStyle}
            variant={path.startsWith('/clients') ? 'contained' : 'text'}
            onClick={() => navigate('#clients')}
          >
            Clients
          </Button>
          <Button
            sx={menuButtonStyle}
            variant={path.startsWith('/contact') ? 'contained' : 'text'}
            onClick={() => navigate('#contact')}
          >
            Contact
          </Button>
          </Box>
          <Box sx={{
            flexGrow: 0, ml: 8, display: 'flex', flexDirection: 'column', gap: (theme) => theme.spacing(1),
          }}
          >
            <IconButton sx={{ color: (theme) => theme.palette.secondary.main }} onClick={() => navigate('#contact')}>
              <FontAwesomeIcon icon={faComments} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: (theme) => theme.spacing(8)}} />
    </>
  );
}

Menu.propTypes = {
  path: PropTypes.string,
};

Menu.defaultProps = {
  path: '',
};

export default Menu;
