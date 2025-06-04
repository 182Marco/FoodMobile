import { StyleSheet } from 'react-native';
import * as N from 'react-native';

const getStyles = () => {
  const { height } = N.useWindowDimensions();
  const IsLandskape = height < 380;

  return StyleSheet.create({
    list: {
      flex: 1,
    },
  });
};

export { getStyles };
