class Helpers {
  static convertTransactionArray(transactions) {
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
}

export default Helpers;
