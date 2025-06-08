import { IParagraph } from './paragraph.model';
import { List } from '../list';
import { Subtitle } from '../subtitle';

const Paragraph: IParagraph = p => (
  <>
    <Subtitle text={p.text} />
    <List data={p.data} />
  </>
);

export { Paragraph };
