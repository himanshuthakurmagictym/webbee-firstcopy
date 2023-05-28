/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Redirect} from 'react-router-dom';
const Form = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [cCode, setcCode] = React.useState('91');
  const [formField, setformField] = React.useState({});
  const handleChange = (event) => {
    setformField((pre)=>({...pre, [event.target.name]: event.target.value}));
    setcCode(event.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formField);
    // history.push('/page-cover');
    <Redirect to="/page-cover" />;
  };

  return (
    <Box>
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={'100%'}
        component={Card}
        borderRadius={2}
        boxShadow={4}
        marginBottom={4}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} sm={12}>
              <TextField
                sx={{ height: 54 }}
                label="Name"
                variant="outlined"
                color="primary"
                size="medium"
                name="name"
                fullWidth
                required
                onChange={handleChange}
              />
            </Grid>
          
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                name="email"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">+91</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={91}
                value={cCode}
                name="ccode"
                label="cCode"
                onChange={handleChange}
                required
              >
                <MenuItem value={91}>+91</MenuItem>
                <MenuItem value={44}>+44</MenuItem>
                <MenuItem value={41}>+41</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={9}> 
            
              <TextField
                sx={{ height: 54 }}
                label="Mobile"
                type="text"
                variant="outlined"
                color="primary"
                name="mobile"
                size="medium"
                fullWidth
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Website"
                type="text"
                variant="outlined"
                color="primary"
                name="website"
                size="medium"
                fullWidth
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                name="message"
                color="primary"
                size="medium"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ height: 54 }}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography component="p" variant="body2" align="left">
                  By clicking on "submit" you agree to our{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Privacy Policy
                  </Box>
                  ,{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Data Policy
                  </Box>{' '}
                  and{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Cookie Policy
                  </Box>
                  .
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box>
        <Typography color="text.secondary" align={'center'}>
          We'll get back to you in 1-2 business days.
        </Typography>
      </Box>
    </Box>
  );
};

export default Form;
