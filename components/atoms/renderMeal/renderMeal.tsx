import * as N from 'react-native';
import { IRenderMeal } from './renderMeal.models';
import { pressedEffect, S } from './renderMeal.style';

const RenderMeal: IRenderMeal = p => {
  return (
    <N.View style={S.wrap}>
      <N.Pressable {...pressedEffect}>
        <N.View style={S.innerWrap}>
          <N.View>
            <N.Image style={S.img} source={{ uri: p.imageUrl }} />
            <N.Text style={S.title}>{p.title}</N.Text>
          </N.View>
          <N.View style={S.details}>
            <N.Text style={S.detailEl}>{p.duration}m </N.Text>
            <N.Text style={S.detailEl}>{p.complexity.toUpperCase()}</N.Text>
            <N.Text style={S.detailEl}>{p.affordability.toUpperCase()}</N.Text>
          </N.View>
        </N.View>
      </N.Pressable>
    </N.View>
  );
};

export { RenderMeal };
