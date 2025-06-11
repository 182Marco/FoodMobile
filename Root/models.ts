import { IDrawerStackParamList, IRootStackParamList } from '@/models';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator<IRootStackParamList>();
const Drawer = createDrawerNavigator<IDrawerStackParamList>();

export { RootStack, Drawer };
