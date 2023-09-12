import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from './Menu/MobileMenu';
import DesktopMenu from './Menu/DesktopMenu';
import IlluminateLogo from '../images/logo.png';

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
  const links = useMemo(() => ([
    { text: 'Services', link: '#services', navigate },
    { text: 'Clients', link: '#clients', navigate },
    { text: 'Contact', link: '#contact', navigate },
  ]), []);
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
          {isMobile && <MobileMenu links={links} />}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            sx={{ color: 'text.primary', flex: 1 }}
            component="button"
            underline="none"
            onClick={() => navigate('/')}
          >
            <img
              src={IlluminateLogo}
              alt="Illuminate Agency Logo"
              height={42}
              style={{ verticalAlign: 'bottom' }}
              placeholder="none"
            />
          </Link>
          {!isMobile && <DesktopMenu path={path} links={links} />}
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
