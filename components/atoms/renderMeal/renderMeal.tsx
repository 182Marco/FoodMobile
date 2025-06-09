import * as N from 'react-native';
import * as C from '@/components';
import { IRenderMeal } from './renderMeal.models';
import { pressedEffect, S } from './renderMeal.style';
import { useRenderMeal } from './renderMeal.hook';
import { ScreenNames } from '@/constants';

const RenderMeal: IRenderMeal = p => {
  const h = useRenderMeal(p);
  return (
    <N.View style={S.wrap}>
      <N.Pressable
        {...pressedEffect}
        onPress={() => h.navigate(ScreenNames.mealsDetail, { mealId: p.id })}
      >
        <N.View style={S.innerWrap}>
          <N.View>
            <N.View style={S.imgWrap}>
              <N.Image style={S.img} source={{ uri: p.imageUrl }} />
            </N.View>
            <N.Text style={S.title}>{p.title}</N.Text>
          </N.View>
          <C.MealInfos
            duration={p.duration}
            complexity={p.complexity}
            affordability={p.affordability}
          />
        </N.View>
      </N.Pressable>
    </N.View>
  );
};

export { RenderMeal };
