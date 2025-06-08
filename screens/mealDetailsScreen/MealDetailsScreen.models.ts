import { ScreenNames } from '@/constants';
import { IRootStackParamList } from '@/models';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type IMealsDetailsScreenProps = NativeStackScreenProps<
  IRootStackParamList,
  ScreenNames.mealsDetail
>;

type IMealsDetailsScreen = React.FC<IMealsDetailsScreenProps>;

export { IMealsDetailsScreen, IMealsDetailsScreenProps };
