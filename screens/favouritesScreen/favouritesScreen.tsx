import * as N from 'react-native';
import * as S from './favouritesScreen.style';
import { IFavouriteScreen } from './favouritesScreen.models';
import { useFavouritesScreen } from './favouritesScreen.hook';

const FavouritesScreen: IFavouriteScreen = () => {
  const h = useFavouritesScreen();
  return (
    <N.View>
      <N.Text>This is the new favourites screen</N.Text>
    </N.View>
  );
};

export { FavouritesScreen };
