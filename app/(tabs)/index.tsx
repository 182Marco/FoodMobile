import { AppRegistry, Platform } from 'react-native';
import appConfig from '../../app.json';
import * as R from 'react';
import { Root } from '@/Root';

const RootEl = () => <Root />;

const { name } = appConfig.expo;

if (Platform.OS === 'web') {
  R.useEffect(() => {
    const rootTag = document.getElementById('app-root');
    if (rootTag) {
      AppRegistry.runApplication(name, {
        initialProps: {},
        rootTag,
      });
    } else {
      console.error("Element with id 'app-root' not found.");
    }
  }, []);
} else {
  AppRegistry.registerComponent(name, () => RootEl);
}

export default RootEl;
