import * as N from 'react-native';
import { S } from './Subtitle.style';
import { ISubTitle } from './Subtitle.models';

const Subtitle: ISubTitle = p => (
  <N.View style={S.subTitleWrap}>
    <N.Text style={S.subTitle}>{p.text}</N.Text>
  </N.View>
);

export { Subtitle };
