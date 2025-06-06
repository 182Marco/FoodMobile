import * as Navi from '@react-navigation/native';
import * as Screens from '@/screens';
import * as N from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { S, screensStyles } from './Root.style';
import { RootStack } from './models';

const Root: React.FC = () => {
  const navigationRef = Navi.useNavigationContainerRef();

  return (
    <N.View style={S.wrap}>
      <StatusBar style="dark" />
      <Navi.NavigationContainer ref={navigationRef}>
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
            options={{ title: 'Meals Overview' }}
          />
        </RootStack.Navigator>
      </Navi.NavigationContainer>
    </N.View>
  );
};

export { Root };
