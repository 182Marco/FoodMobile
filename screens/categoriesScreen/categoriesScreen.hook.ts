import { IRootStackParamList } from '@/models';
import { getStyles } from './categoriesScreen.style';
import { RouteProp } from '@react-navigation/native';
import { ScreenNames } from '@/constants';

const useCategoriesScreen = (
  route: RouteProp<IRootStackParamList, ScreenNames.mealsCategories>
) => {
  const { params } = route;
  const S = getStyles();
  return { S };
};

export { useCategoriesScreen };
