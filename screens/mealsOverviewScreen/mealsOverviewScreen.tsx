import * as N from 'react-native';
import { useMealsOverviewScreen } from './mealsOverviewScreen.hook';
import { MEALS } from '@/data';

const mealsOverviewScreen = () => {
  const { S, ...h } = useMealsOverviewScreen();
  return (
    <N.View style={S.wrap}>
      <N.Text>{JSON.stringify(MEALS)}</N.Text>
    </N.View>
  );
};

export { mealsOverviewScreen };
