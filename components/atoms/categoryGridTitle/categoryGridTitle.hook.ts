import { getStyles } from './categoryGridTitle.style';
import { ICategoryGridTitleProps } from './categortGridTitle.models';
import { useNavigation } from '@react-navigation/native';

const useCategoryGridTitle = (p: ICategoryGridTitleProps) => {
  const S = getStyles(p);

  const { navigate } = useNavigation();

  return { S, navigate };
};

export { useCategoryGridTitle };
