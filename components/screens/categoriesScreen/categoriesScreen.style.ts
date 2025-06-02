import { StyleSheet } from 'react-native';
import * as N from 'react-native';
import * as Gs from '@/styles';

const getStyles = () => {
  const { height } = N.useWindowDimensions();
  const IsLandskape = height < 380;

  return StyleSheet.create({
    list: {
      backgroundColor: 'white',
      flex: 1,
    },
  });
};

export { getStyles };
