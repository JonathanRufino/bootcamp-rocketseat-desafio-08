import styled from 'styled-components/native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.View`
  margin: 20px 20px 0;
  padding: 20px 15px 10px;
  background: ${colors.secondary};
  border-radius: 4px;
  align-items: center;
`;

export const Products = styled.FlatList`
  width: 100%;
`;

export const Product = styled.View`
  margin-bottom: 20px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.Text`
  color: ${colors.tertiaryText};
  font-size: 14px;
`;

export const Price = styled.Text`
  color: ${colors.secondaryText};
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const Icon = styled(MIcon).attrs({
  size: 20,
  color: colors.accent,
})``;

export const Footer = styled.View`
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  margin-top: 10px;
`;

export const FooterActions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Amount = styled.TextInput.attrs({
  editable: false,
})`
  padding: 0 10px 0;
  height: 26;
  background: ${colors.secondary};
  border-radius: 4px;
  margin: 0 10px;
  border-color: #ddd;
  border-width: 1px;
  color: #666;
`;

export const SubTotal = styled.Text`
  color: ${colors.secondaryText};
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #999;
  font-weight: bold;
  margin-top: 10px;
`;

export const Total = styled.Text`
  color: ${colors.secondaryText};
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
`;

export const SubmitButton = styled(RectButton)`
  margin-top: 30px;
  background: ${colors.accent};
  padding: 13px;
  border-radius: 4px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.accentText};
`;

export const Touchable = styled.TouchableOpacity``;

export const EmptyList = styled.View`
  justify-content: center;
  align-items: center;
`;

export const EmptyListMessage = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.secondaryText};
  margin-top: 20px;
`;

export const EmptyListIcon = styled(MIcon).attrs({
  size: 60,
  color: '#ddd',
})``;
