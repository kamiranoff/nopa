import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#304FFE',
  },
  input: {
    height: 40,
    fontSize: 17,
    width:Dimensions.get('window').width - 40,
  },
  inputView: {
    borderBottomColor: '#444',
    borderBottomWidth: 2,
    marginBottom: 40,
  }
});
