import { MEALS } from '@/data';
import { INavigation, IRoute } from './mealsOverview.models';
import { getStyles } from './mealsOverviewScreen.style';

const useMealsOverviewScreen = (navigation: INavigation, route: IRoute) => {
  const S = getStyles();
  const {
    params: { categoryId },
  } = route;

  const selectedCategory = MEALS.filter(e =>
    e.categoryIds.includes(categoryId)
  );

  return { S, selectedCategory };
};

export { useMealsOverviewScreen };
