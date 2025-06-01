import * as N from 'react-native';
import * as C from '@/components';
import * as Gs from '@/styles';
import { texts } from '@/texts';
import { useStartGameScreen } from './startGameScreen.hook';
import { IStartGameScreen } from './startGameScreen.models';

const StartGameScreen: IStartGameScreen = p => {
  const { S, ...h } = useStartGameScreen(p);
  return <></>;
};

export { StartGameScreen };
