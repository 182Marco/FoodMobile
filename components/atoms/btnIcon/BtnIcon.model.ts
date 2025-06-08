import { CSSColor } from '@/models';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as React from 'react';

type IoniconNames = React.ComponentProps<typeof Ionicons>['name']; // get the type of the 'name' prop from Ionicons

interface IBtnIconProps {
  name?: IoniconNames;
  onPress: () => void;
  color?: CSSColor;
  size?: number;
}

type ModelBtnIcon = React.FC<IBtnIconProps>;

export { ModelBtnIcon };
