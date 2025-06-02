import { StyleSheet } from 'react-native';
import * as N from 'react-native';
import { IPassCategoryGridTitleProp } from './categortGridTitle.models';

const getStyles: IPassCategoryGridTitleProp = p => {
  const IsAndroid = N.Platform.OS === 'android';

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
      overflow: IsAndroid ? 'hidden' : 'visible',
    },
    innerWrap: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: p.color ? p.color : 'white',
      borderRadius: 8,
    },
    btn: {
      flex: 1,
    },
    btnPressed: {
      opacity: 0.5,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 17,
      textAlign: 'center',
      color: 'black',
    },
  });
};

const pressedBtnEffects: IPassCategoryGridTitleProp = p => ({
  android_ripple: { color: '#ccc' },
  style: (param: N.PressableStateCallbackType) => [
    getStyles(p).btn,
    param.pressed ? getStyles(p).btnPressed : null,
  ],
});

export { getStyles, pressedBtnEffects };
