import * as N from 'react-native';
import { useMealsOverviewScreen } from './mealsOverviewScreen.hook';

const mealsOverviewScreen = () => {
  const { S, ...h } = useMealsOverviewScreen();
  return (
    <N.View>
      <N.Text>Meals Overview</N.Text>
    </N.View>
  );
};

export { mealsOverviewScreen };
