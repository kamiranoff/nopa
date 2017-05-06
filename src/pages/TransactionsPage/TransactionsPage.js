import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

class TransactionsPage extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2

    });

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(this.convertTransactionArray(props.transactions)),
    };
  }

  convertTransactionArray(transactions) {
    const transactionsMap = {}; // Create the blank map
    transactions.forEach(function(transaction) {
      if (!transactionsMap[transaction.made_on]) {
        // Create an entry in the map for the category if it hasn't yet been created
        transactionsMap[transaction.made_on] = [];
      }

      transactionsMap[transaction.made_on].push(transaction);

    });

    return transactionsMap;

  }

  _renderSectionHeader(sectionData, made_on) {
    return (
      <View style={{backgroundColor:'#ddd', padding:10}}>
        <Text style={{ fontWeight: "700" }}>{made_on}</Text>
      </View>
    );
  }

  _renderRow(data) {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#efefef', padding:10  }}>
        <Text style={{ flex: 1, textAlign: 'left' }}>
          {data.category}
        </Text>
        <Text style={{ flex: 1, textAlign: 'right' }}>
          {data.amount} {data.currency_code}
        </Text>
      </View>);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.blocks}>
          <View style={styles.leftBlock}>
            <Text>TransactionsPage</Text>
          </View>
          <View style={styles.rightBlock}>
            <Text style={{ textAlign: 'right' }}>TransactionsPage</Text>
          </View>
        </View>
        <View style={{flex:10}}>
        <Text>Your transactions for the last 30 days</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSectionHeader={this._renderSectionHeader}
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
