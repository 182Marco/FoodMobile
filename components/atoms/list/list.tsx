import * as N from 'react-native';
import { IList } from './list.model';
import { S } from './list.style';

const List: IList = p => (
  <>
    {p.data.map((e, i) => (
      <N.View style={S.wrap} key={i}>
        <N.Text style={S.text}>{e}</N.Text>
      </N.View>
    ))}
  </>
);

export { List };
