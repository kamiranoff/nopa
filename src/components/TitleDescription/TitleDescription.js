import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { NOPAText } from '../../common';

import styles from './styles';

const TitleDescription = ({ title, desc }) => (
  <View>
    <NOPAText
      fontSize={25}
      textStyle={styles.textStyle}
    >
      {title}
    </NOPAText>
    <NOPAText
      fontSize={20}
      textStyle={styles.textStyle}
    >
      {desc}
    </NOPAText>
  </View>
);

TitleDescription.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default TitleDescription;

