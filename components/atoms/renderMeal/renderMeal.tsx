import * as N from 'react-native';
import { IRenderMeal } from './renderMeal.models';

const RenderMeal: IRenderMeal = p => {
  return (
    <N.View>
      <N.Pressable>
        <N.Text>{p.title}</N.Text>
      </N.Pressable>
    </N.View>
  );
};

export { RenderMeal };
