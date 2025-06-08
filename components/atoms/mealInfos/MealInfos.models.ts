import N from 'react-native';

interface IMealInfosPorps {
  duration: number;
  complexity: string;
  affordability: string;
  wrapStyle?: N.ViewStyle;
  textStyle?: N.TextStyle;
}

type IMealInfos = React.FC<IMealInfosPorps>;

export { IMealInfos };
