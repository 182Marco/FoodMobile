import { MEALS } from '@/data';
import { IUseMealsOverviewScreen } from './mealsOverview.models';
import { getStyles } from './mealsOverviewScreen.style';

const useMealsOverviewScreen: IUseMealsOverviewScreen = (navigation, route) => {
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
