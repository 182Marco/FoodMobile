import * as N from 'react-native';
import * as U from '@/utils';
import * as C from '@/constants';
import * as Navi from '@react-navigation/native';
import * as Screens from '@/screens';
import { StatusBar } from 'expo-status-bar';
import { S, screensStyles } from './Root.style';
import { RootStack } from './models';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useRoot } from './Root.hook';

const Root: React.FC = () => {
  const h = useRoot();
  const Drawer = createDrawerNavigator();

  const DrawerNavigation = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name={C.ScreenNames.mealsCategories}
          component={Screens.CategoriesScreen}
        ></Drawer.Screen>
      </Drawer.Navigator>
    );
  };

  return (
    <N.View style={S.wrap}>
      <StatusBar style="light" />
      <Navi.NavigationContainer ref={h.navigationRef}>
        <RootStack.Navigator
          initialRouteName={C.ScreenNames.mealsCategories}
          {...screensStyles}
        >
          <RootStack.Screen
            name={C.ScreenNames.drawer}
            component={DrawerNavigation}
            options={{
              title: C.ScreenTitles.mealsCategories,
            }}
          />
          {/*     <RootStack.Screen
            name={C.ScreenNames.mealsCategories}
            component={Screens.CategoriesScreen}
            options={{
              title: C.ScreenTitles.mealsCategories,
            }}
          /> */}
          <RootStack.Screen
            name={C.ScreenNames.mealsOverview}
            options={{
              title: C.ScreenTitles.mealsOverview,
            }}
            component={Screens.MealsOverviewScreen}
          />
          <RootStack.Screen
            name={C.ScreenNames.mealsDetail}
            component={Screens.MealDetailsScreen}
            options={({ route }) => U.getMealTitleById(route.params.mealId)}
          />
        </RootStack.Navigator>
      </Navi.NavigationContainer>
    </N.View>
  );
};

export { Root };
