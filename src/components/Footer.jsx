import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = React.forwardRef((_, ref) => (
  <Grid
    sx={{ backgroundColor: 'background.footer' }}
    item
    xs={12}
    p={8}
    pb={4}
  >
    <Grid container pb={1} spacing={4} ref={ref}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" pb={1} sx={{ color: 'text.secondary' }}>About Illuminate Agency</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>Illuminate Agency is a proud pioneer of industry defining lateral targeting in paid advertising. We specialise in crafting bespoke audiences and integrated digital strategy to enhance your paid and organic revenue streams. From hardline technical analysis and SEO optimisation to nuanced and niche keyword discovery and audience selection, we deliver unquestionable results.</Typography>
      </Grid>
      <Grid item xs={12} sm={6} textAlign="right">
        <Link
          component={IconButton}
          href="https://twitter.com/illuminateltd"
          sx={{
            color: 'text.footerIcon',
            '&:hover': {
              color: 'common.white',
              '& .circleIcon': {
                color: 'text.footerIcon',
              },
            },
          }}
        >
          <span className="fa-layers fa-fw">
            <Box sx={{ color: 'common.white' }}>
              <FontAwesomeIcon className="circleIcon" icon={faCircle} transform="grow-8" />
            </Box>
            <FontAwesomeIcon icon={faTwitter} transform="shrink-4" />
          </span>
        </Link>
        <Link
          component={IconButton}
          href="https://www.facebook.com/illuminateagency"
          sx={{
            color: 'text.footerIcon',
            '&:hover': {
              color: 'common.white',
              '& .circleIcon': {
                color: 'text.footerIcon',
              },
            },
          }}
        >
          <span className="fa-layers fa-fw">
            <Box sx={{ color: 'common.white' }}>
              <FontAwesomeIcon className="circleIcon" icon={faCircle} transform="grow-8" />
            </Box>
            <FontAwesomeIcon icon={faFacebook} transform="shrink-4" />
          </span>
        </Link>
        <Typography variant="body2" pt={1} sx={{ color: 'text.secondary' }}>
          <Box pl={1} component="span" fontWeight="bold">Email: </Box>
          sales@illuminate-agency.co.uk
        </Typography>
        <Typography variant="body2" pt={1} sx={{ color: 'text.secondary' }}>
          <Box pl={1} component="span" fontWeight="bold">Phone: </Box>
          +44(0) 203 633 3159
        </Typography>
        <Typography variant="body2" pt={1} sx={{ color: 'text.secondary' }}>
          <Box pl={1} component="span" fontWeight="bold">Our Office: </Box>
          The Frames, 1 Phipp Street, London, EC2A 4PS, UK
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: 'text.secondary', pt: 8, pl: 4, pr: 4 }}>
          Copyright © Illuminate Agency
        </Typography>
      </Grid>
    </Grid>
  </Grid>
));

export default Footer;
