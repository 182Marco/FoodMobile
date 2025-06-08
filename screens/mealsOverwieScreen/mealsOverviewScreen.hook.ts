import * as R from 'react';
import { INavigation, IRoute } from './mealsOverview.models';
import { getStyles } from './mealsOverviewScreen.style';
import { getCategoryTitleById, getMealsInCategory } from '@/utils';

const useMealsOverviewScreen = (navigation: INavigation, route: IRoute) => {
  const S = getStyles();
  const {
    params: { catId },
  } = route;

  const selectedCategory = getMealsInCategory(catId);

  R.useLayoutEffect(() => {
    navigation.setOptions(getCategoryTitleById(catId));
  }, [catId, navigation]);

  return { S, selectedCategory };
};

export { useMealsOverviewScreen };
