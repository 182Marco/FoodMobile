import * as N from 'react-native';
import { ICategoryGridTitle } from './categortGridTitle.models';
import { useCategoryGridTitle } from './categoryGridTitle.hook';
import { pressedBtnEffects } from './categoryGridTitle.style';

const CategoryGridTitle: ICategoryGridTitle = p => {
  const { S, ...h } = useCategoryGridTitle(p);

  return (
    <N.View style={S.gridItem}>
      <N.Pressable
        {...pressedBtnEffects(p)}
        onPress={() => h.navigate('MealsOverview', { categoryId: p.id })}
      >
        <N.View style={S.innerWrap}>
          <N.Text style={S.text}>{p.title}</N.Text>
        </N.View>
      </N.Pressable>
    </N.View>
  );
};

export { CategoryGridTitle };
