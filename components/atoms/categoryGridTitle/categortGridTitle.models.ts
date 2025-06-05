interface ICategoryGridTitleProps {
  title: string;
  color: string;
  id: string;
}

type ICategoryGridTitle = React.FC<ICategoryGridTitleProps>;
type IPassCategoryGridTitleProp = (p: ICategoryGridTitleProps) => any;

export { ICategoryGridTitle, IPassCategoryGridTitleProp };
