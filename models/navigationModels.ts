import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type IRootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
};

type INavigation = NativeStackNavigationProp<Partial<IRootStackParamList>>;

export { INavigation };
