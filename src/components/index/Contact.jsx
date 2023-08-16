import React from 'react';
import { Grid, Box, TextField, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import ToolbarNegativeSpacer from '../ToolbarNegativeSpacer';

const ContactSchema = object().shape({
  name: string().required('Name is required'),
  email: string().email('Email address is invalid').required('Email is required'),
  message: string().required('Message is required').min(50, 'Message must be at least 50 characters'),
});

const ContactSection = () => {
  const formik = useFormik({
    initialValues: { email: '', name: '', message: '' },
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
    validationSchema: ContactSchema,
  });
  return (
    <Grid item xs={12}>
      <ToolbarNegativeSpacer id="contact" />
      <Box sx={{ p: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box component="form" noValidate onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Contact Us</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                InputLabelProps={{ sx: { color: (theme) => theme.palette.secondary.main } }}
                error={!!(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                required
                fullWidth
                color="secondary"
                name="email"
                label="Email Address"
                type="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                InputLabelProps={{ sx: { color: (theme) => theme.palette.secondary.main } }}
                error={!!(formik.touched.name && formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                required
                fullWidth
                color="secondary"
                name="name"
                label="Name"
                type="text"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{ sx: { color: (theme) => theme.palette.secondary.main } }}
                error={!!(formik.touched.message && formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                rows={5}
                required
                fullWidth
                multiline
                color="secondary"
                name="message"
                label="Message"
                type="text"
                id="message"
                onChange={formik.handleChange}
                value={formik.values.message} />
            </Grid>
          </Grid>
          <Button fullWidth type="submit" variant="contained" color="secondary" sx={{ my: 2 }}>Submit</Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default ContactSection;
