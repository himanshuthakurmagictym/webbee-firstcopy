import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WebbeeLogo from 'svg/logos/Webbee';
import paletteTypes from 'common/paletteTypes';

const Topbar = ({
  themeMode,
  themeToggler,
  setThemePalette,
  onSidebarOpen,
  paletteType,
}) => {
  const theme = useTheme();
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Box marginRight={{ xs: 1, sm: 2 }}>
          <IconButton onClick={onSidebarOpen} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          display={'flex'}
          alignItems="baseline"
          component="a"
          underline="none"
          href="/"
          title="webbee"
          height={{ xs: 128, md: 132 }}
          width={170}
        >
          <WebbeeLogo height={'100%'} width={500} />
        </Box>
      </Box>
      <Box display="flex" alignItems={'center'}>
        <Box
          display={'flex'}
          padding={1}
          borderRadius={8}
          bgcolor={theme.palette.alternate.main}
        >
          {paletteTypes.map((item, i) => (
            <Box
              key={item}
              bgcolor={colors[item][700]}
              width={20}
              height={20}
              borderRadius={'100%'}
              marginRight={i === paletteTypes.length - 1 ? 0 : 1}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{ cursor: 'pointer' }}
              onClick={() => setThemePalette(item)}
            >
              {paletteType === item && (
                <svg
                  width={12}
                  height={12}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </Box>
          ))}
        </Box>
        <Box>
          <IconButton
            onClick={() => themeToggler()}
            aria-label="Dark mode toggler"
            color={themeMode === 'light' ? 'primary' : 'secondary'}
          >
            {themeMode === 'light' ? (
               <img src="/assets/aaiena_logo.png" width="300" alt=''/>
            ) : (
             
              <img src="/assets/aaiena_logo.png" width="300" alt=''/>
            )}
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
          <Box>
            <Link underline="none" component="a" href="/" color="textPrimary">
              Home
            </Link>
          </Box>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href="/docs-introduction"
              color="textPrimary"
            >
              Documentation
            </Link>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="https://material-ui.com/store/items/webbee-landing-page/"
              size="large"
            >
              Login/signup
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Topbar;
