import React from 'react';

import {
  Container,
  ProductList,
  Product,
  Image,
  Title,
  Price,
  AddToCartButton,
  AddToCartButtonText,
  Cart,
  Icon,
  CartCounter,
} from './styles';
import { formatPrice } from '../../util/format';

export default function Home() {
  return (
    <Container>
      <ProductList
        data={[
          {
            id: 1,
            title: 'Tênis de Caminhada Leve Confortável',
            price: 179.9,
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          },
          {
            id: 2,
            title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
            price: 139.9,
            image:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
          },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product>
            <Image source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>{formatPrice(item.price)}</Price>

            <AddToCartButton>
              <Cart>
                <Icon name="add-shopping-cart" />
                <CartCounter>0</CartCounter>
              </Cart>

              <AddToCartButtonText>ADICIONAR</AddToCartButtonText>
            </AddToCartButton>
          </Product>
        )}
      />
    </Container>
  );
}

Home.navigationOptions = {
  title: 'Home',
};
