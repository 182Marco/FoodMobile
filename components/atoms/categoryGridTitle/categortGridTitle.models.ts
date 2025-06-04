import { JSX } from 'react/jsx-runtime';

interface ICategoryGridTitleProps {
  title: string;
  color?: string;
  onPress: (screen: string, p?: { id: number; name: string }) => {};
}

type ICategoryGridTitle = React.FC<ICategoryGridTitleProps>;
type IPassCategoryGridTitleProp = (p: ICategoryGridTitleProps) => any;

export { ICategoryGridTitle, IPassCategoryGridTitleProp };
