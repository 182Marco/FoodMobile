import * as R from 'react';
import { getStyles } from './categoryGridTitle.style';
import { IPassCategoryGridTitleProp } from './categortGridTitle.models';
import { useNavigation } from '@react-navigation/native';
import { INavigation } from '@/models';

const useCategoryGridTitle: IPassCategoryGridTitleProp = p => {
  const S = getStyles(p);

  const { navigate } = useNavigation<INavigation>();

  return { S, navigate };
};

export { useCategoryGridTitle };
