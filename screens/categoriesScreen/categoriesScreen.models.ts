import { ScreenNames } from '@/constants';
import { IRootStackParamList } from '@/models';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ICategoriesScreenProps = NativeStackScreenProps<
  IRootStackParamList,
  ScreenNames.mealsCategories
>;

type ICategoriesScreen = React.FC<ICategoriesScreenProps>;

export { ICategoriesScreen };
