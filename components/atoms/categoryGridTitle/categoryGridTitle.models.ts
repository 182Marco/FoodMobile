import { ScreenNames } from '@/constants';
import { IRootStackParamList } from '@/models';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IGridTitleProps {
  title: string;
  color: string;
  id: string;
}

type ICategoryGridTitle = React.FC<IGridTitleProps>;

type INavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  ScreenNames.mealsOverview
>;

export { ICategoryGridTitle, IGridTitleProps, INavigationProp };
