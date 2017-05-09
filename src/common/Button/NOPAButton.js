import React, { PropTypes } from 'react';
import { TouchableHighlight, View, Dimensions } from 'react-native';

import { NOPAText } from '../index';

const NOPAButton = ({
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
        textStyle={{
          padding: 20,
          textAlign: 'center',
          color: '#fff'
        }}
      >
        {title}
      </NOPAText>
    </View>
  </TouchableHighlight>
);

NOPAButton.defaultProps = {
  textStyle: {
    marginTop: 10,
    marginBottom: 5,
    width: Dimensions.get('window').width - (Dimensions.get('window').width / 10),

  },
  backgroundColor: '#F97056'
};

NOPAButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  textStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  backgroundColor: PropTypes.string,
};

export default NOPAButton;
