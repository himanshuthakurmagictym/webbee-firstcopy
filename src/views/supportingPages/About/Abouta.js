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
import { Features } from 'views/landingPages/Home/components';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Box>
      <Container>
     
        <Grid container spacing={6}>
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
      <Container>
        <Features />
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
      <Container paddingY={'0 !important'}>
        <Story />
        <Container>
          <Divider />
        </Container>
      </Container>
      {/* <Container paddingTop={'0 !important'}>
        <Team />
      </Container> */}
    </Box>
  );
};

export default About;
