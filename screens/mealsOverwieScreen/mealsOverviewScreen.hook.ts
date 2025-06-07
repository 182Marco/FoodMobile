import { MEALS } from '@/data';
import { INavigation, IRoute } from './mealsOverview.models';
import { getStyles } from './mealsOverviewScreen.style';
import { getCategoryTitleById } from '@/utils';
import * as R from 'react';

const useMealsOverviewScreen = (navigation: INavigation, route: IRoute) => {
  const S = getStyles();
  const {
    params: { catId },
  } = route;

  const selectedCategory = MEALS.filter(e => e.categoryIds.includes(catId));

  R.useEffect(() => {
    navigation.setOptions(getCategoryTitleById(catId));
  }, [catId, navigation]);

  return { S, selectedCategory };
};

export { useMealsOverviewScreen };
