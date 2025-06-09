import { StyleSheet } from 'react-native';
import * as N from 'react-native';
import * as Gs from '@/styles';

const IsAndroid = N.Platform.OS === 'android';

const S = StyleSheet.create({
  wrap: {
    margin: 16,
    borderRadius: 8,
    overflow: IsAndroid ? 'hidden' : 'visible',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    elevation: IsAndroid ? 4 : 0,
  },
  innerWrap: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  imgWrap: {
    position: 'relative',
  },
  img: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
  btnPressed: {
    opacity: 0.5,
  },
});

const pressedEffect = {
  ...Gs.androidRipple,
  style: (param: N.PressableStateCallbackType) =>
    param.pressed ? S.btnPressed : null,
};

export { S, pressedEffect };
