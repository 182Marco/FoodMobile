import * as R from 'react';
import { getStyles } from './categoryGridTitle.style';
import { IPassCategoryGridTitleProp } from './categortGridTitle.models';

const useCategoryGridTitle: IPassCategoryGridTitleProp = p => {
  const S = getStyles(p);
  return { S, something: 2 };
};

export { useCategoryGridTitle };
