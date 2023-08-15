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
import IconButton from '@mui/material/IconButton';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from './Menu/MobileMenu';
import DesktopMenu from './Menu/DesktopMenu';

function Menu({ path }) {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('sm'));
  const isWide = useMediaQuery(breakpoints.up('md'));
  const scrollTopThresholdPassed = useScrollTrigger({ disableHysteresis: true, threshold: 300 });
  const isDense = isWide && !scrollTopThresholdPassed;
  const getToolbarHeight = (theme) => (isDense ? theme.spacing(8) : theme.spacing(6));
  const toolbarStyle = {
    transition: (theme) => theme.transitions.create(
      ['padding-top', 'padding-bottom', 'height', 'min-height', 'border-bottom'],
      { duration: theme.transitions.duration.complex },
    ),
    borderBottom: isDense
      ? (theme) => `1px solid ${theme.palette.primary.main}`
      : (theme) => `1px solid ${theme.palette.primary.dark}`,
    height: (theme) => ({ xs: getToolbarHeight(theme) }),
    minHeight: (theme) => ({ xs: getToolbarHeight(theme) }),
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
          {/* If mobile, display drawer view else normal view */}
          {isMobile && <MobileMenu />}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            sx={{ color: 'text.primary', flex: 1 }}
            component="button"
            underline="none"
            onClick={() => navigate('/')}
          >
            <Typography variant="h6" display="inline" pl={1}>Illuminate Agency</Typography>
          </Link>
          {!isMobile && <DesktopMenu path={path} />}
          {!isMobile && (
            <Box sx={{
              flexGrow: 0, ml: 8, display: 'flex', flexDirection: 'column', gap: (theme) => theme.spacing(1),
            }}
            >
              <IconButton sx={{ color: (theme) => theme.palette.secondary.main }} onClick={() => navigate('#contact')}>
                <FontAwesomeIcon icon={faComments} />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box sx={{ height: getToolbarHeight}} />
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
