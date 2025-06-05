import * as N from 'react-native';
import * as C from '@/components';
import { useMealsOverviewScreen } from './mealsOverviewScreen.hook';
import { IMealsOverviewScreen } from './mealsOverview.models';

const MealsOverviewScreen: IMealsOverviewScreen = ({ navigation, route }) => {
  const { S, ...h } = useMealsOverviewScreen(navigation, route);
  return (
    <N.View style={S.wrap}>
      <N.FlatList
        data={h.selectedCategory}
        keyExtractor={e => e.id}
        renderItem={e => <C.RenderMeal {...e.item} />}
      />
    </N.View>
  );
};

export { MealsOverviewScreen };
