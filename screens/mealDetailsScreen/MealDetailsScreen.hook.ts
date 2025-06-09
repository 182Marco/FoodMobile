import { getMealById } from '@/utils';
import * as R from 'react';
import * as C from '@/components';
import { IMealsDetailsScreenProps } from './MealDetailsScreen.models';

const useMealDetailsScreen = (p: IMealsDetailsScreenProps) => {
  const meal = getMealById(p.route.params.mealId);

  /*   R.useLayoutEffect(() => {
    p.navigation.setOptions({
      headerRight: () => <C.IconBtn name="star" color="white" />,s
    });
  }, []); */

  return { meal };
};

export { useMealDetailsScreen };
