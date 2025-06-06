import { IRootStackParamList } from '@/models';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ICategoriesScreenProps = NativeStackScreenProps<
  IRootStackParamList,
  'MealsCategories'
>;

type ICategoriesScreen = React.FC<ICategoriesScreenProps>;

export { ICategoriesScreen };
