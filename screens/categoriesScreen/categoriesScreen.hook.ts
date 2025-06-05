import * as R from 'react';
import { getStyles } from './categoriesScreen.style';
import { IUseCategoriesScreen } from './categoriesScreen.models';

const useCategoriesScreen: IUseCategoriesScreen = route => {
  const { params } = route;
  const S = getStyles();
  return { S };
};

export { useCategoriesScreen };
