import { JSX } from 'react/jsx-runtime';

interface ICategoryGridTitleProps {
  title: string;
  color?: string;
}

type ICategoryGridTitle = React.FC<ICategoryGridTitleProps>;
type IPassCategoryGridTitleProp = (p: ICategoryGridTitleProps) => any;

export { ICategoryGridTitle, IPassCategoryGridTitleProp };
