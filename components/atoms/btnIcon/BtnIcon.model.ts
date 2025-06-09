import { CSSColor } from '@/models';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as N from 'react-native';
import * as React from 'react';

interface BtnIconProps {
  name?: string;
  color?: CSSColor;
  size?: number;
  wrap?: N.ViewStyle;
  onPress?: () => void;
}

type ModelBtnIcon = React.FC<BtnIconProps>;

type IUseBtnIconProp = (obj: Pick<BtnIconProps, 'name' | 'onPress'>) => {
  toggleIcon: () => void;
  iconName: string;
  outlined: boolean;
};

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

export { ModelBtnIcon, IoniconName, IUseBtnIconProp };
