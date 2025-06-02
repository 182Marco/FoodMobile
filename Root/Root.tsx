import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { S } from './Root.style';
import { CategoriesScreen } from '@/screens';

const Stack = createNativeStackNavigator();

const Root: React.FC = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <View style={S.wrap}>
      <StatusBar style="dark" />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="MealsCategories">
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export { Root };
