import { colors } from '@/styles';
import { StyleSheet } from 'react-native';
import * as Gs from '@/styles';

const S = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  bg: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  img: {
    opacity: 0.9,
  },
});

const screensStyles = {
  screenOptions: {
    headerStyle: {
      backgroundColor: Gs.colors.headerBg,
    },
    headerTintColor: 'white',
    cardOverlayEnabled: true,
    cardStyle: { backgroundColor: Gs.colors.bg },
  },
};

export { S, screensStyles };
