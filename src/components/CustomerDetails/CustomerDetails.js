import React from 'react';
import { View, Text } from 'react-native';

import Theme from '../../constants/theme';

import styles from './styles';

const CustomerDetails = () => (
  <View style={{ flex: 1 }}>
    <View style={styles.blocks}>
      <View style={styles.leftBlock}>
        <Text style={{ color: Theme.colors.TEXT_COLOR }}>NATWEST
          DOE J.</Text>
      </View>
      <View style={styles.rightBlock}>
        <Text style={{ textAlign: 'right', color: Theme.colors.TEXT_COLOR }}>CURRENT ACCOUNT
          12345698
          600268</Text>
      </View>
    </View>

    <Text style={{ color: Theme.colors.TEXT_COLOR, margin: 20 }}>Your transactions for the last 30 days</Text>
  </View>
);

export default CustomerDetails;
