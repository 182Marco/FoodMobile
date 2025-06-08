import { Meal } from '@/classes';
import { ScreenNames } from '@/constants';
import { IRootStackParamList } from '@/models';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type IRenderMeal = React.FC<Meal>;

type INavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  ScreenNames.mealsDetail
>;

export { IRenderMeal, INavigationProp };
