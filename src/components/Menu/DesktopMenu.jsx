import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { navigate } from 'gatsby';

function DesktopMenu({ path }) {
  const menuButtonStyle = {
    color: 'text.primary',
    '&:hover': { color: 'text.tertiary' },
    paddingLeft: (theme) => theme.spacing(2),
    paddingRight: (theme) => theme.spacing(2),
  };
  return (
    <Box sx={{
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'end',
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
  );
}

DesktopMenu.propTypes = {
  path: PropTypes.string,
};

DesktopMenu.defaultProps = {
  path: '',
};

export default DesktopMenu;
