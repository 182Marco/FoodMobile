import * as Gs from '@/styles';
import { StyleSheet } from 'react-native';

const S = StyleSheet.create({
  img: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailsText: {
    color: 'white',
  },
  subTitle: {
    color: Gs.colors.detail,
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
    padding: 6,
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  subTitleWrap: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: Gs.colors.detail,
    borderBottomWidth: 2,
  },
});

export { S };
