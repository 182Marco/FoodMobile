import * as R from 'react';
import { IoniconName, IUseBtnIconProp } from './BtnIcon.model';

const useBtnIcon: IUseBtnIconProp = ({ name, onPress }) => {
  const [outlined, setOutlined] = R.useState(true);

  const toggleIcon = () => {
    setOutlined(pv => !pv);
    onPress?.();
  };

  const baseName = (name || 'star').replace('-outline', '') as IoniconName;
  const iconName: IoniconName = outlined
    ? (`${baseName}-outline` as IoniconName)
    : baseName;

  return {
    toggleIcon,
    iconName,
    outlined,
  };
};

export { useBtnIcon };
