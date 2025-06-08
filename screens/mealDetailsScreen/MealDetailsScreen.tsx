import * as N from 'react-native';
import * as C from '@/components';
import { S } from './MealDetailsScreen.style';
import { IMealsDetailsScreen } from './MealDetailsScreen.models';
import { useMealDetailsScreen } from './MealDetailsScreen.hook';
import { text } from '@/constants';

const MealDetailsScreen: IMealsDetailsScreen = ({ route, navigation }) => {
  const h = useMealDetailsScreen({ route, navigation });
  return (
    <N.ScrollView style={S.scrollWrap}>
      <N.Image style={S.img} source={{ uri: h.meal.imageUrl }} />
      <N.Text style={S.title}>{h.meal.title}</N.Text>
      <C.MealInfos
        duration={h.meal.duration}
        complexity={h.meal.complexity}
        affordability={h.meal.affordability}
        textStyle={S.detailsText}
      />
      <N.View style={S.detailOuterWrap}>
        <N.View style={S.detailWrap}>
          <C.Paragraph
            text={text.mealDetailSubtitle1}
            data={h.meal.ingredients}
          />
          <C.Paragraph text={text.mealDetailSubtitle2} data={h.meal.steps} />
        </N.View>
      </N.View>
    </N.ScrollView>
  );
};

export { MealDetailsScreen };
