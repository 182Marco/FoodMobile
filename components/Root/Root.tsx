import * as N from 'react-native';
import { S } from './Root.style';
import { useRoot } from './Root.hook';
import { diceImg } from '@/constants';
import * as C from '@/components';

const Root: React.FC = () => {
  const h = useRoot();
  return <C.CategoriesScreen />;
};

export { Root };
