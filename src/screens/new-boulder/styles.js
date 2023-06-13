import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 16,
    paddingBottom: 15,
  },
  input: {
    color: colors.primary,
    borderButtonColor: 'black',
    padding: 5,
    marginBottom: 15,
  },
});
