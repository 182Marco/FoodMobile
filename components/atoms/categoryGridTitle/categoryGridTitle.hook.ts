import { getStyles } from './categoryGridTitle.style';
import { useNavigation } from '@react-navigation/native';
import { IGridTitleProps, INavigationProp } from './categoryGridTitle.models';

const useCategoryGridTitle = (p: IGridTitleProps) => {
  const S = getStyles(p);

  const navigation = useNavigation<INavigationProp>();
  const navigate = navigation.navigate;

  return { S, navigate };
};

export { useCategoryGridTitle };
