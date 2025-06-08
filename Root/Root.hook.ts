import * as Navi from '@react-navigation/native';

const useRoot = () => {
  const navigationRef = Navi.useNavigationContainerRef();

  return { navigationRef };
};

export { useRoot };
