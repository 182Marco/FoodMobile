import * as Gs from '@/styles';
import { StyleSheet } from 'react-native';

const S = StyleSheet.create({
  wrap: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: Gs.colors.detail,
  },
  text: {
    color: Gs.colors.headerBg,
    textAlign: 'center',
  },
});

export { S };
