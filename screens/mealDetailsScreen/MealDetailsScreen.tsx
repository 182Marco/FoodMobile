import * as N from 'react-native';
import * as C from '@/components';
import { S } from './MealDetailsScreen.style';
import { IMealsDetailsScreen } from './MealDetailsScreen.models';
import { useMealDetailsScreen } from './MealDetailsScreen.hook';

const MealDetailsScreen: IMealsDetailsScreen = ({ route }) => {
  const h = useMealDetailsScreen(route.params.mealId);
  return (
    <N.View>
      <N.Image style={S.img} source={{ uri: h.meal.imageUrl }} />
      <N.Text style={S.title}>{h.meal.title}</N.Text>
      <C.MealInfos
        duration={h.meal.duration}
        complexity={h.meal.complexity}
        affordability={h.meal.affordability}
        textStyle={S.detailsText}
      />
      <N.View style={S.subTitleWrap}>
        <N.Text style={S.subTitle}>Ingredients</N.Text>
      </N.View>
      {h.meal.ingredients.map((e, i) => (
        <N.Text key={i}>{e}</N.Text>
      ))}
      <N.View style={S.subTitleWrap}>
        <N.Text style={S.subTitle}>Steps</N.Text>
      </N.View>
      {h.meal.steps.map((e, i) => (
        <N.Text key={i}>{e}</N.Text>
      ))}
      <N.Text>Meal ID: {JSON.stringify(h.meal, null, 2)}</N.Text>
    </N.View>
  );
};

export { MealDetailsScreen };
