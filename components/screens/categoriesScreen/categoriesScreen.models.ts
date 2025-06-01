interface ICategoriesScreenProps {
  setPickedNum: (n: number) => void;
}

type ICategoriesScreen = React.FC;

type IUseCategoriesScreen = () => Record<string, any>;

type IGetAlertMsg = (description: string, fn: () => void) => void;

type IAlertFn = (onPressBtnFn: () => void) => void;

export { IAlertFn, IGetAlertMsg, ICategoriesScreen, IUseCategoriesScreen };
