import React, { PropTypes } from 'react';
import { Text } from 'react-native';

const NOPAText = ({ fontSize, fontFamily, color, textStyle, children }) => (
  <Text
    style={[{
      fontSize,
      fontFamily,
      color,
    }, textStyle ]}
  >
    {children}
  </Text>

);

NOPAText.defaultProps = {
  fontSize: 18,
  fontFamily: 'monserratSemiBold',
  color: '#444',
  textStyle: {
    marginTop: 10,
    marginBottom: 5,
  },
};

NOPAText.propTypes = {
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  color: PropTypes.string,
  textStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  children: PropTypes.node.isRequired,
};

export default NOPAText;
