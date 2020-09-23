import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function Logo(props) {
  return (
    <Svg
      id="Logo"
      data-name="Logo"
      viewBox="0 0 177 100"
      {...props}
    >
      <Path
        d="M98.9315 39.4284C96.1883 36.6852 92.9316 34.5091 89.3475 33.0245C85.7633 31.5399 81.9219 30.7758 78.0424 30.7758C74.1629 30.7758 70.3215 31.5399 66.7373 33.0245C63.1532 34.5091 59.8965 36.6852 57.1533 39.4284L78.0424 60.3174L98.9315 39.4284Z" fill="#FFD200"
      />
      <Path 
        d="M78.0686 60.3475C80.8118 63.0907 84.0684 65.2667 87.6526 66.7513C91.2367 68.2359 95.0782 69 98.9577 69C102.837 69 106.679 68.2359 110.263 66.7513C113.847 65.2667 117.104 63.0907 119.847 60.3475L98.9577 39.4584L78.0686 60.3475Z" fill="#06E07F"
      />
      <Path
       d="M78.017 60.3429C75.2738 63.0861 72.0171 65.2621 68.433 66.7467C64.8488 68.2313 61.0074 68.9954 57.1279 68.9954C53.2484 68.9954 49.407 68.2313 45.8228 66.7467C42.2387 65.2621 38.982 63.0861 36.2388 60.3429L57.1279 39.4538L78.017 60.3429Z" fill="#E3073C"
      />
      <Path d="M98.9831 39.433C101.726 36.6898 104.983 34.5138 108.567 33.0292C112.151 31.5446 115.993 30.7805 119.872 30.7805C123.752 30.7805 127.593 31.5446 131.177 33.0292C134.761 34.5138 138.018 36.6898 140.761 39.433L119.872 60.3221L98.9831 39.433Z" fill="#1F84EF"
      />
    </Svg>
  );
}

Logo.defaultProps = {
  height: 100,
 
  fill : "none",
};

Logo.proptypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Logo;