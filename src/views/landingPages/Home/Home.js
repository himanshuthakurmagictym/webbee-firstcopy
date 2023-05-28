import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import Typography from '@mui/material/Typography';
import {  Hero } from './components';
import Hero2 from './components/Hero/Hero2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Slider from 'react-slick';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Gallery, Numbers,Story } from '../../supportingPages/About/components';
import {
  Main,
  Partners,
  Services,
  WhyUs,
  Process,
} from '../DesignAgency/components';
import {
  News,
  Subscription,
} from '../Marketing/components';
import Partners2 from '../Marketing/components/Partners/Partners2';
const Home = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 1;
  if (isXs) {
    slidesToShow = 1;
  }
  if (isSm) {
    slidesToShow = 2;
  }
  if (isMd) {
    slidesToShow = 3;
  }
  if (isLg) {
    slidesToShow = 4;
  }

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <Box>
      <Box position={'relative'} disableGutters={true}>
        <video width="100%" height="100%" autoPlay muted>
          <source type="video/mp4" src="/assets/video/banner.mp4" />
        </video>
      </Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero2 />
        </Container>
      </Box>
      <Container>
        <Partners />
      </Container>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container paddingX={'0 !important'} maxWidth={'100%'}>
          <Services themeMode={themeMode} />
        </Container>
      </Box>
      <Container paddingBottom={'0 !important'}>
        <WhyUs />
      </Container>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1921 273"
        sx={{
          marginBottom: theme.spacing(-1),
        }}
      >
        <polygon
          fill={theme.palette.alternate.main}
          points="0,273 1921,273 1921,0 "
        />
      </Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Process themeMode={themeMode} />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '35%',
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      </Box>
      <Container>
        <Main />
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
      <Container paddingY={'0 !important'}>
        <Story />
        {/* <Container>
          <Divider />
        </Container> */}
      </Container>

      <Box bgcolor={theme.palette.alternate.main} paddingTop={3} paddingBottom={5}>
     
      <Container paddingY={'0 !important'}>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
            align={'center'}
          >
            TESTIMONIALS
          </Typography>
          <Box
            component={Typography}
            fontWeight={700}
            variant={'h3'}
            gutterBottom
            align={'center'}
          >
            Dont take word for it
          </Box>
          <Typography
            variant={'h6'}
            component={'p'}
            color={'textSecondary'}
            align={'center'}
          >
            See what our amazing past clients have to say about the work done by
            us
          </Typography>
        </Box>
      </Container>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Slider {...sliderOpts}>
          {[
            {
              feedback:
                'Working with Materialist is fantastic! Simple, re-usable components all in one platform.',
              image: 'https://assets.maccarianagency.com/avatars/img1.jpg',
              name: 'Clara Bertoletti',
              title: 'Material-UI lover',
            },
            {
              feedback:
                'This is great bundle. I can contruct anything in just 10 minuts. Absolutelly love it! 10 out of 10.',
              image: 'https://assets.maccarianagency.com/avatars/img2.jpg',
              name: 'Jhon Anderson',
              title: 'Senior Frontend Developer',
            },
            {
              feedback:
                'Love the app for cash back, reward points and fraud protection – just like when you\'re swiping your card.',
              image: 'https://assets.maccarianagency.com/avatars/img3.jpg',
              name: 'Chary Smith',
              title: 'SEO at Comoti',
            },
            {
              feedback:
                'Working with Materialist is fantastic! Simple, re-usable components all in one platform.',
              image: 'https://assets.maccarianagency.com/avatars/img4.jpg',
              name: 'Clara Bertoletti',
              title: 'Material-UI lover',
            },
            {
              feedback:
                'This is great bundle. I can contruct anything in just 10 minuts. Absolutelly love it! 10 out of 10.',
              image: 'https://assets.maccarianagency.com/avatars/img5.jpg',
              name: 'Jhon Anderson',
              title: 'Senior Frontend Developer',
            },
            {
              feedback:
                'Love the app for cash back, reward points and fraud protection – just like when you\'re swiping your card.',
              image: 'https://assets.maccarianagency.com/avatars/img6.jpg',
              name: 'Chary Smith',
              title: 'SEO at Comoti',
            },
          ].map((item, i) => (
            <Box
              paddingX={{ xs: 1, md: 2, lg: 3 }}
              paddingBottom={{ xs: 1, md: 2, lg: 3 }}
              key={i}
            >
              <Box
                component={Card}
                boxShadow={{ xs: 1, sm: 3 }}
                borderRadius={5}
              >
                <Box component={CardContent}>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    fontWeight={400}
                    marginBottom={2}
                  >
                    {item.feedback}
                  </Box>
                  <Box width={1}>
                    <Box
                      component={ListItem}
                      disableGutters
                      width={'auto'}
                      padding={0}
                    >
                      <ListItemAvatar>
                        <Avatar src={item.image} />
                      </ListItemAvatar>
                      <Box
                        component={ListItemText}
                        primary={item.name}
                        secondary={item.title}
                        margin={0}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      
      </Box>
      <Container>
        <News />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Subscription />
        </Container>
        <Divider />
        <Container>
          <Partners2 />
        </Container>
      </Box>
   
    </Box>
  );
};
Home.propTypes = {
  themeMode: PropTypes.string.isRequired,
};
export default Home;
