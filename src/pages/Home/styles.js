import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.primary};
`;

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 20,
    paddingLeft: 20,
  },
})``;

export const Product = styled.View`
  background: ${colors.secondary};
  border-radius: 4px;
  padding: 10px;
  margin-right: 15px;
  width: 250px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 250px;
`;

export const Title = styled.Text`
  font-size: 18px;
  line-height: 20px;
  color: ${colors.tertiaryText};
  margin: 5px 0 0 10px;
`;

export const Price = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 5px 0 20px 10px;
  color: ${colors.secondaryText};
  margin-top: auto;
`;

export const AddToCartButton = styled(RectButton)`
  background: ${colors.accent};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const Cart = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const Icon = styled(MIcon).attrs({
  size: 20,
  color: colors.primaryText,
})``;

export const CartCounter = styled.Text`
  color: ${colors.accentText};
  margin-left: 5px;
`;

export const AddToCartButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 16px;
  color: ${colors.accentText};
  font-weight: bold;
`;
