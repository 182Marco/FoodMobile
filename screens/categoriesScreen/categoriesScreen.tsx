import * as N from 'react-native';
import * as C from '@/components';
import { CATEGORIES } from '@/data';
import { useCategoriesScreen } from './categoriesScreen.hook';
import { ICategoriesScreen } from './categoriesScreen.models';

const CategoriesScreen: ICategoriesScreen = ({ route }) => {
  const { S, ...h } = useCategoriesScreen(route);
  return (
    <>
      <N.FlatList
        style={S.list}
        data={CATEGORIES}
        keyExtractor={e => e.id}
        renderItem={e => <C.CategoryGridTitle {...e.item} />}
        numColumns={2}
      />
    </>
  );
};

export { CategoriesScreen };
