import * as N from 'react-native';
import * as Gs from '@/styles';
import { ICategoryGridTitle } from './categortGridTitle.models';
import { useCategoryGridTitle } from './categoryGridTitle.hook';

const CategoryGridTitle: ICategoryGridTitle = p => {
  const { S, ...h } = useCategoryGridTitle();
  return (
    <N.View style={S.gridItem}>
      <N.Pressable>
        <N.View>
          <N.Text style={S.text}>{p.title}</N.Text>
        </N.View>
      </N.Pressable>
    </N.View>
  );
};

export { CategoryGridTitle };
