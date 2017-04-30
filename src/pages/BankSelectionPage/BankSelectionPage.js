import React, { Component } from 'react';
import { View } from 'react-native';

import { NOPAButton } from '../../common';

import TitleDescription from '../../components/TitleDescription/TitleDescription';
import ImageList from '../../components/ImageList/ImageList';
import styles from './styles';


const barclays = require('../../../assets/banks/barclays.png');
const hsbc = require('../../../assets/banks/hsbc.png');
const lloydsBank = require('../../../assets/banks/lloyds-bank.png');
const natwest = require('../../../assets/banks/natwest.png');
const santander = require('../../../assets/banks/santander.png');
const tsb = require('../../../assets/banks/tsb.png');

const banks = [{
  name: 'Barclays',
  img: barclays,
}, {
  name: 'HSBC',
  img: hsbc,
}, {
  name: 'Lloyds Bank',
  img: lloydsBank,
}, {
  name: 'Natwest',
  img: natwest,
}, {
  name: 'Santander',
  img: santander,
}, {
  name: 'TSB',
  img: tsb,
},
]

class BankSelectionPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TitleDescription
          title="Which bank does this account belong to?"
          desc="From the list below choose the bank you want to connect your account from."
        />
        <ImageList
          blocks={banks}
        />
        <NOPAButton
          title="Continue"
          onPress={() => {
            console.log('here');
          }}
        />
      </View>
    );
  }
}

export default BankSelectionPage;