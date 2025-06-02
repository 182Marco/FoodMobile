import {} from 'expo';
import { useRoot } from './Root.hook';
import * as C from '@/components';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Root: React.FC = () => {
  const h = useRoot();
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={C.CategoriesScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export { Root };
