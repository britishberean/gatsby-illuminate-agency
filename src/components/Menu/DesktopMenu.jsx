import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function DesktopMenu({ path, links }) {
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
      {links.map((link) => (
        <Button
          key={link.text}
          sx={menuButtonStyle}
          variant={path.startsWith(link.link) ? 'contained' : 'text'}
          onClick={() => link.navigate(link.link)}
        >
          {link.text}
        </Button>
      ))}
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
