import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Hero = () => {
  const theme = useTheme();
  const [cCode, setcCode] = React.useState('91');
  const [formField, setformField] = React.useState({});
  const handleChange = (event) => {
    setformField((pre)=>({...pre, [event.target.name]: event.target.value}));
    setcCode(event.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formField);
  };
  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant="h2"
        align="left"
        gutterBottom
        data-aos={'fade-right'}
        sx={{
          fontWeight: 900,
        }}
      >
        Learn how to build better websites
      </Typography>
      <Box marginBottom={4}>
        <Typography
          variant="h6"
          component="p"
          color="textPrimary"
          data-aos={'fade-right'}
        >
          Over 300 stand-alone atomic components that will help you to boost
          your frontend development productivity.
        </Typography>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        data-aos={'fade-right'}
      >
        <Box>
          {[1, 2, 3, 4, 5].map((item) => (
            <Box
              key={item}
              color={theme.palette.secondary.main}
              display={'inline'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={24}
                height={24}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </Box>
          ))}
        </Box>
        <Typography>Average score: 4.9/5</Typography>
      </Box>
    </Box>
  );

  const GridItemFormBlock = () => (
    <Box
      padding={{ xs: 3, sm: 6 }}
      width={'100%'}
      component={Card}
      borderRadius={2}
      boxShadow={1}
      data-aos={'fade-left'}
    >
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection={'column'}>
          <Box marginBottom={2}>
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
          </Box>
          <Box marginBottom={2}>
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
          </Box>
         
          <Box marginBottom={2} xs={12} sm={12} style={{display:'flex'}}>
          <Grid  xs={12} sm={3}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={91}
                value={cCode}
                name="cCode"
                label="cCode"
                onChange={handleChange}
              >
                <MenuItem value={91}>+91</MenuItem>
                <MenuItem value={44}>+44</MenuItem>
                <MenuItem value={41}>+41</MenuItem>
              </Select>
            </Grid>
            <Grid  xs={6} sm={10}>
            <TextField
              sx={{ height: 54 }}
              label="Mobile"
              type="text"
              name="mobile"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              required
              onChange={handleChange}
            />
            </Grid>
          </Box>
          <Box marginBottom={2}>
            <TextField
              sx={{ height: 54 }}
              label="Website"
              type="text"
              name="website"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              required
              onChange={handleChange}
            />
          </Box>
          <Box marginBottom={2}>
            <TextField
              sx={{ height: 84 }}
              label="Message"
              type="text"
              name="message"
              multiline
              rows={2}
              maxRows={4}
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              required
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Button
              sx={{ height: 54 }}
              variant="contained"
              color="primary"
              size="medium"
              fullWidth
            >
              Submit
            </Button>
          </Box>
          <Box marginY={4} marginX={{ xs: -3, sm: -6 }}>
            <Divider />
          </Box>
          <Box>
            <Typography component="p" variant="body2" align="left">
              By creating you account you agree to our{' '}
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
        </Box>
      </form>
    </Box>
  );

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemFormBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
