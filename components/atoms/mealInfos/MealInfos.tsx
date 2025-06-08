import * as N from 'react-native';
import { S } from './MealInfos.style';
import { IMealInfos } from './MealInfos.models';

const MealInfos: IMealInfos = p => {
  return (
    <N.View style={[S.details, p.wrapStyle]}>
      <N.Text style={[S.detailEl, p.textStyle]}>{p.duration}m </N.Text>
      <N.Text style={[S.detailEl, p.textStyle]}>
        {p.complexity.toUpperCase()}
      </N.Text>
      <N.Text style={[S.detailEl, p.textStyle]}>
        {p.affordability.toUpperCase()}
      </N.Text>
    </N.View>
  );
};

export { MealInfos };
