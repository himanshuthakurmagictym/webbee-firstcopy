import React from 'react';
import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';

const Webbee = ({  height = 70 }) => {
  // const theme = useTheme();
  // const colorPrimaryMain = theme.palette.primary.main;
  // const colorPrimaryDark = theme.palette.primary.main;
  return (
    <img src="/assets/aaiena_logo.png" width={500} height={height} alt=''/>
  );
};

Webbee.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Webbee;
