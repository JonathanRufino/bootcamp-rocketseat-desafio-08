import styled from 'styled-components/native';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const Cart = styled.TouchableOpacity``;

export const Icon = styled(MIcon).attrs({
  size: 24,
  color: colors.primaryText,
})``;

export const CartBadge = styled.View`
  position: absolute;
  top: -3;
  right: -3;
  background: ${colors.accent};
  border-radius: 7.5;
  width: 15;
  height: 15;
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

export const CartCounter = styled.Text`
  color: ${colors.accentText};
  font-size: 10;
`;

export const Touchable = styled.TouchableOpacity``;
