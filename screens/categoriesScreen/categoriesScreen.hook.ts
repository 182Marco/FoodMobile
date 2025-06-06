import { IRootStackParamList } from '@/models';
import { getStyles } from './categoriesScreen.style';
import { RouteProp } from '@react-navigation/native';

const useCategoriesScreen = (
  route: RouteProp<IRootStackParamList, 'MealsCategories'>
) => {
  const { params } = route;
  const S = getStyles();
  return { S };
};

export { useCategoriesScreen };
