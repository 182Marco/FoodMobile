import * as N from 'react-native';
import * as C from '@/components';
import * as Gs from '@/styles';
import { texts } from '@/texts';
import { CATEGORIES } from '@/data';
import { useCategoriesScreen } from './categoriesScreen.hook';
import { ICategoriesScreen } from './categoriesScreen.models';

const CategoriesScreen: ICategoriesScreen = ({ navigation }) => {
  const { S, ...h } = useCategoriesScreen();
  return (
    <>
      <N.FlatList
        style={S.list}
        data={CATEGORIES}
        keyExtractor={e => e.id}
        renderItem={e => (
          <C.CategoryGridTitle
            onPress={() => navigation.navigate('MealsOverview')}
            title={e.item.title}
            color={e.item.color}
          />
        )}
        numColumns={2}
      />
    </>
  );
};

export { CategoriesScreen };
