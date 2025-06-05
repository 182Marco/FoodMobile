import * as N from 'react-native';
import { useMealsOverviewScreen } from './mealsOverviewScreen.hook';
import { MEALS } from '@/data';
import { IMealsOverviewScreen } from './mealsOverview.models';

const MealsOverviewScreen: IMealsOverviewScreen = ({ navigation, route }) => {
  const { S, ...h } = useMealsOverviewScreen(navigation, route);
  return (
    <N.View style={S.wrap}>
      <N.Text style={{ color: 'red' }}>{route.params.categoryId}</N.Text>
      {/*       <N.Text>{JSON.stringify(h.selectedCategory, null, 2)}</N.Text> */}
      <N.Text style={{ color: 'green' }}>
        {JSON.stringify(
          h.selectedCategory.every((e: any) =>
            e.categoryIds.every((el: any) => el === route.params.categoryId)
          )
        )}
      </N.Text>
    </N.View>
  );
};

export { MealsOverviewScreen };
