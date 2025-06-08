import * as Gs from '@/styles';
import { StyleSheet } from 'react-native';

const S = StyleSheet.create({
  subTitle: {
    color: Gs.colors.detail,
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
    padding: 6,
    textAlign: 'center',
    marginVertical: 4,
    borderBottomColor: Gs.colors.detail,
    borderBottomWidth: 2,
  },
  subTitleWrap: {
    padding: 6,
    marginHorizontal: 12,
  },
});

export { S };
