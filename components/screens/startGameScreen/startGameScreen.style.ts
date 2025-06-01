import { StyleSheet } from 'react-native';
import * as N from 'react-native';
import * as Gs from '@/styles';

const useStyles = () => {
  const { height } = N.useWindowDimensions();
  const IsLandskape = height < 380;

  return StyleSheet.create({});
};

export { useStyles };
