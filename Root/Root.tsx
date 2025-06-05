import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { S } from './Root.style';
import * as Screens from '@/screens';
import { RootStack } from './models';

const Stack = createNativeStackNavigator();

const Root: React.FC = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <View style={S.wrap}>
      <StatusBar style="dark" />
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator initialRouteName="MealsCategories">
          <RootStack.Screen
            name="MealsCategories"
            component={Screens.CategoriesScreen}
          />
          <RootStack.Screen
            name="MealsOverview"
            component={Screens.MealsOverviewScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export { Root };
