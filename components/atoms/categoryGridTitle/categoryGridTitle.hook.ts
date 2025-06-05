import * as R from 'react';
import { getStyles } from './categoryGridTitle.style';
import { IPassCategoryGridTitleProp } from './categortGridTitle.models';
import { useNavigation } from '@react-navigation/native';

const useCategoryGridTitle: IPassCategoryGridTitleProp = p => {
  const S = getStyles(p);

  const { navigate } = useNavigation();

  return { S, navigate };
};

export { useCategoryGridTitle };
