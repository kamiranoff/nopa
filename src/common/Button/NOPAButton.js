import React, { PropTypes } from 'react';
import { TouchableHighlight, View } from 'react-native';

import { NOPAText } from '../index';

const NOPAButton = ({
                      fontSize,
                      fontFamily,
                      color,
                      textStyle,
                      onPress,
                      title,
                      backgroundColor,
                      children,
                      isDisabled,
                    }) => (
  <TouchableHighlight
    title={title}
    color={color}
    backgroundColor={backgroundColor}
    style={[{
      backgroundColor
    }, textStyle]}
    onPress={onPress}
    disabled={isDisabled}
  >
    <View>
      <NOPAText
        textStyle={{ paddingVertical: 10, paddingHorizontal: 20 }}
      >
        {title}
      </NOPAText>
    </View>
  </TouchableHighlight>
);

NOPAButton.defaultProps = {
  fontSize: 18,
  fontFamily: 'Arial',
  color: '#444',
  textStyle: {
    marginTop: 10,
    marginBottom: 5,
  },
  backgroundColor: '#F97056'
};

NOPAButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  color: PropTypes.string,
  textStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  backgroundColor: PropTypes.string,
};

export default NOPAButton;
