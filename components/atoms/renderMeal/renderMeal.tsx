import * as N from 'react-native';
import { IRenderMeal } from './renderMeal.models';
import { S } from './renderMeal.style';

const RenderMeal: IRenderMeal = p => {
  return (
    <N.View>
      <N.Pressable>
        <N.View>
          <N.Image style={S.img} source={{ uri: p.imageUrl }} />
          <N.Text>{p.title}</N.Text>
        </N.View>
      </N.Pressable>
    </N.View>
  );
};

export { RenderMeal };
