import { StyleSheet } from 'react-native';
import * as N from 'react-native';
import * as Gs from '@/styles';

const getStyles = () => {
  const { height } = N.useWindowDimensions();
  const IsLandskape = height < 380;

  return StyleSheet.create({
    gridItem: {
      flex: 1,
      margin: 16,
      height: 150,
      borderRadius: 8,
      elevation: 4,
    },
    innerWrap: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'black',
      backgroundColor: 'white',
      flex: 1,
    },
  });
};

export { getStyles };
