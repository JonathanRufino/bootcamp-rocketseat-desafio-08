import React from 'react';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  Image,
  ProductDetails,
  Title,
  Price,
  Icon,
  Footer,
  FooterActions,
  Amount,
  SubTotal,
  Label,
  Total,
  SubmitButton,
  SubmitButtonText,
  Touchable,
} from './styles';
import { formatPrice } from '../../util/format';

export default function Cart() {
  return (
    <Container>
      <Products
        data={[
          {
            id: 1,
            title: 'Tênis de Caminhada Leve Confortável',
            price: 179.9,
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
            amount: 1,
          },
          {
            id: 2,
            title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
            price: 139.9,
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
            amount: 2,
          },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product>
            <ProductInfo>
              <Image source={{ uri: item.image }} />

              <ProductDetails>
                <Title>{item.title}</Title>
                <Price>{formatPrice(item.price)}</Price>
              </ProductDetails>

              <Touchable>
                <Icon name="delete-forever" size={30} />
              </Touchable>
            </ProductInfo>

            <Footer>
              <FooterActions>
                <Touchable>
                  <Icon name="remove-circle-outline" />
                </Touchable>

                <Amount>{item.amount}</Amount>

                <Touchable>
                  <Icon name="add-circle-outline" />
                </Touchable>
              </FooterActions>

              <SubTotal>{formatPrice(item.price * item.amount)}</SubTotal>
            </Footer>
          </Product>
        )}
      />

      <Label>TOTAL</Label>
      <Total>R$ 1619,10</Total>

      <SubmitButton>
        <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}

Cart.navigationOptions = {
  title: 'Carrinho',
};
