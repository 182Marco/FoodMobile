import { Ionicons } from '@expo/vector-icons';
import * as N from 'react-native';
import { ModelBtnIcon } from './BtnIcon.model';
import { S } from './BtnIcon.style';

const BtnIcon: ModelBtnIcon = p => {
  return (
    <N.View>
      <N.Pressable
        onPress={p.onPress}
        style={({ pressed }) => pressed && S.pressed}
      >
        <Ionicons
          name={p.name || 'star'}
          size={p.size || 24}
          color={p.color || 'white'}
        />
      </N.Pressable>
    </N.View>
  );
};

export { BtnIcon };
