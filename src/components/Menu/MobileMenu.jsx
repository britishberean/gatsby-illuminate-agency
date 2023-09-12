import React, { useState, useCallback } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

function MobileMenu({ links }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = useCallback(() => setDrawerOpen(true), [setDrawerOpen]);
  const closeDrawer = useCallback(() => setDrawerOpen(false), [setDrawerOpen]);
  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          width: (theme) => theme.spacing(4),
          minWidth: (theme) => theme.spacing(4),
          height: (theme) => theme.spacing(4),
        }}
        onClick={openDrawer}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Drawer
        PaperProps={{ sx: { width: '80%' }}}
        anchor='left'
        open={drawerOpen}
        onClose={closeDrawer}
      >
        <List>
          <ListItem sx={{ justifyContent: 'right' }}>
            <Button
              variant="text"
              color="secondary"
              sx={{
                width: (theme) => theme.spacing(4),
                minWidth: (theme) => theme.spacing(4),
                height: (theme) => theme.spacing(4),
                borderRadius: (theme) => theme.spacing(2),
              }}
              onClick={() => setDrawerOpen(false)}
            >
              <FontAwesomeIcon icon={faClose} />
            </Button>
          </ListItem>
          {links.map((link) => (
            <ListItem key={link.text}>
              <ListItemButton onClick={() => {
                link.navigate(link.link);
                closeDrawer();
              }}>
                <Typography align='center' width='100%'>{link.text}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default MobileMenu;
