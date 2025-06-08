import { getMealById } from '@/utils';
import * as R from 'react';
import * as C from '@/components';
import { IMealsDetailsScreenProps } from './MealDetailsScreen.models';

const useMealDetailsScreen = (p: IMealsDetailsScreenProps) => {
  const meal = getMealById(p.route.params.mealId);

  /*   R.useLayoutEffect(() => {
    p.navigation.setOptions({
      headerRight: () => {
        return (
          <C.BtnIcon
            name="star"
            size={24}
            color="white"
            onPress={() => {
              console.log('Favorite button pressed');
            }}
          />
        );
      },
    });
  }, [p.navigation]); */

  return { meal };
};

export { useMealDetailsScreen };
