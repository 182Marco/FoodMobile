import { Meal } from '@/classes';
import { useNavigation } from '@react-navigation/native';
import { INavigationProp } from './renderMeal.models';

const useRenderMeal = (p: Meal) => {
  const navigation = useNavigation<INavigationProp>();
  const navigate = navigation.navigate;
  return { navigate };
};

export { useRenderMeal };
