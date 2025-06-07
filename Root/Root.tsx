import * as Navi from '@react-navigation/native';
import * as Screens from '@/screens';
import * as N from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { S, screensStyles } from './Root.style';
import { RootStack } from './models';
import { useRoot } from './Root.hook';
/* import { getCategoryTitleById } from '@/utils'; */

const Root: React.FC = () => {
  const h = useRoot();
  return (
    <N.View style={S.wrap}>
      <StatusBar style="" />
      <Navi.NavigationContainer ref={h.navigationRef}>
        <RootStack.Navigator
          initialRouteName="MealsCategories"
          {...screensStyles}
        >
          <RootStack.Screen
            name="MealsCategories"
            component={Screens.CategoriesScreen}
            options={{
              title: 'Meals Categories',
            }}
          />
          <RootStack.Screen
            name="MealsOverview"
            component={Screens.MealsOverviewScreen}
            /* Same with other method in MealsOverviewScreen Logic */
            /*      options={({ route }) => getCategoryTitleById(route.params.categoryId)}  */
          />
        </RootStack.Navigator>
      </Navi.NavigationContainer>
    </N.View>
  );
};

export { Root };
