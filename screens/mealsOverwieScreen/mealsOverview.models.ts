import { IRootStackParamList } from '@/models';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type IMealsOverviewScreenProps = NativeStackScreenProps<
  IRootStackParamList,
  'MealsOverview'
>;

type IMealsOverviewScreen = React.FC<IMealsOverviewScreenProps>;

type IUseMealsOverviewScreen = (
  navigation: NavigationProp<IRootStackParamList, 'MealsOverview'>,
  route: RouteProp<IRootStackParamList, 'MealsOverview'>
) => Record<string, any>;

export { IMealsOverviewScreen, IUseMealsOverviewScreen };
