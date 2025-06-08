import { ScreenNames } from '@/constants';
import { IRootStackParamList } from '@/models';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type IMealsOverviewScreenProps = NativeStackScreenProps<
  IRootStackParamList,
  ScreenNames.mealsOverview
>;

type IMealsOverviewScreen = React.FC<IMealsOverviewScreenProps>;

type INavigation = NavigationProp<
  IRootStackParamList,
  ScreenNames.mealsOverview
>;
type IRoute = RouteProp<IRootStackParamList, ScreenNames.mealsOverview>;

export { IMealsOverviewScreen, INavigation, IRoute };
