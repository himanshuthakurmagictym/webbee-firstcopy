import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from 'common/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GlobeIllustration from 'svg/illustrations/Globe';
import Typography from '@mui/material/Typography';
import { Gallery, Numbers, Story } from './components';
import { Features, Footer } from 'views/landingPages/Home/components';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <>
     <Box bgcolor={theme.palette.alternate.main}>
     <Container >
     <Grid container spacing={6}  maxWidth="lg" >
       <Grid item container justifyContent={'center'} xs={12} md={6}>
         <Box
           height={'100%'}
           width={'100%'}
           maxWidth={{ xs: 500, md: '100%' }}
         >
           <GlobeIllustration width={'100%'} height={'100%'} />
         </Box>
       </Grid>
       <Grid
         item
         container
         alignItems={'center'}
         justifyContent={'center'}
         xs={12}
         md={6}
       >
         <Box>
           <Typography
             variant="h3"
             component={'h3'}
             align={isMd ? 'left' : 'center'}
             sx={{ fontWeight: 700 }}
             gutterBottom
           >
             Trusted by over{' '}
             <Typography
               component={'span'}
               variant={'inherit'}
               color={'secondary'}
             >
               80,000
             </Typography>{' '}
             people
           </Typography>
           <Typography
             variant="h6"
             component="p"
             color="textSecondary"
             align={isMd ? 'left' : 'center'}
             gutterBottom
           >
             We create amazing websites and digital products.
           </Typography>
           <Typography
             variant="h6"
             component="p"
             color="textSecondary"
             align={isMd ? 'left' : 'center'}
           >
             We design & develop amazing websites and digital products for
             startups, companies and ourselves.
           </Typography>
           <Box
             marginTop={4}
             display={'flex'}
             justifyContent={{ xs: 'center', md: 'flex-start' }}
           >
             <Button
               component={Link}
               variant="contained"
               color="primary"
               size="large"
               href={'/'}
             >
               Contact us
             </Button>
           </Box>
         </Box>
       </Grid>
     </Grid>
   </Container>
     </Box>
    
   
    <Box >
      <Container>
        <Features />
      </Container>
     
    
      <Container paddingY={'0 !important'}>
        <Story />
        {/* <Container>
          <Divider />
        </Container> */}
      </Container>
      <Container>
      <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
       ABOUT US
      </Typography>
      <Box
        component={Typography}
        fontWeight={700}
        variant={'h3'}
        gutterBottom
        align={'center'}
      >
        We take you by hand on each<br />  step of the process
      </Box>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'textSecondary'}
        align={'center'}
      >
        As expert  in both design & development, we help you go through  the complete process, from your new website idea, to  design, development, lunch and scale !
      </Typography>
      <Box marginTop={3} display={'flex'} justifyContent={'center'}>
        <Button
          component={'a'}
          href={'https://material-ui.com/store/items/webbee-landing-page/'}
          target={'_blank'}
          variant="contained"
          color="primary"
          size="large"
          endIcon={
            <svg
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
        >
          Contact us
        </Button>
      </Box>
    </Box>
      </Container>
      <Container paddingY={'0 !important'}>
        <Gallery />
      </Container>
      <Container maxWidth={'800px !important'} paddingBottom={'0 !important'}>
        <Numbers />
        <Container>
          <Divider />
        </Container>
      </Container>
      <Container>
        <Footer />
      </Container>
    </Box>
    </>
  );
};

export default About;
