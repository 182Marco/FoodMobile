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
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOpacity: 2.5,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
    },
    innerWrap: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn: {
      flex: 1,
    },
    text: {
      color: 'black',
      backgroundColor: 'white',
    },
  });
};

export { getStyles };
