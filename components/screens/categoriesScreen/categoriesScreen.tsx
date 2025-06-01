import * as N from 'react-native';
import * as C from '@/components';
import * as Gs from '@/styles';
import { texts } from '@/texts';
import { useCategoriesScreen } from './categoriesScreen.hook';
import { ICategoriesScreen } from './categoriesScreen.models';

const CategoriesScreen: ICategoriesScreen = () => {
  const { S, ...h } = useCategoriesScreen();
  return <></>;
};

export { CategoriesScreen };
