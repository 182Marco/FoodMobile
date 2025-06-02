import * as R from 'react';
import { getStyles } from './categoriesScreen.style';
import { IUseCategoriesScreen } from './categoriesScreen.models';

const useCategoriesScreen: IUseCategoriesScreen = () => {
  const S = getStyles();
  return { S, something: 2 };
};

export { useCategoriesScreen };
