import React from 'react';
import { Box } from '@mui/material';

// Utility component to make allowance for the toolbar when navigating to id components
function ToolbarNegativeSpacer({ id }) {
  return ( 
    <Box sx={{ position: 'absolute' }}>
      {/* TODO: Create Toolbar height provider and use to get top amount */}
      <Box
        sx={{
          position: 'relative',
          top: (theme) => `-${theme.spacing(6)}`,
          left: 0,
        }}
        id={id}>
      </Box>
    </Box>
  );
}

export default ToolbarNegativeSpacer;
