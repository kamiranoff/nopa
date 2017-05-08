import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

import Helpers from '../../util/Helpers';

import styles from './styles';
import Theme from '../../constants/theme';


class TransactionsPage extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2

    });

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(Helpers.convertTransactionArray(cdprops.transactions)),
    };
  }

  _renderSectionHeader(sectionData, made_on) {
    return (
      <View style={{ backgroundColor: Theme.colors.BACKGROUND_COLOR_3, padding: 10 }}>
        <Text style={{ color: Theme.colors.TEXT_COLOR_2 }}>{made_on}</Text>
      </View>
    );
  }

  _renderRow(data) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: Theme.colors.BACKGROUND_COLOR_2,
          padding: 20,
        }}>
        <Text style={{ textAlign: 'left', flex: 1 }}>
          {data.category.toUpperCase()}
        </Text>
        <Text style={{ textAlign: 'right', flex: 1 }}>
          {data.currency_code} {data.amount}
        </Text>
      </View>);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.blocks}>
          <View style={styles.leftBlock}>
            <Text style={{ color: Theme.colors.TEXT_COLOR }}>TransactionsPage</Text>
          </View>
          <View style={styles.rightBlock}>
            <Text style={{ textAlign: 'right', color: Theme.colors.TEXT_COLOR }}>TransactionsPage</Text>
          </View>
        </View>
        <View style={{ flex: 10 }}>
          <Text style={{ color: Theme.colors.TEXT_COLOR, margin: 20 }}>Your transactions for the last 30 days</Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            renderSectionHeader={this._renderSectionHeader}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}

          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ transactions: { transactions } }) => ({
  transactions
})

export default connect(mapStateToProps, null)(TransactionsPage);
