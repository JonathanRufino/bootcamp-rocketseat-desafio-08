import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  EmptyList,
  EmptyListMessage,
  EmptyListIcon,
} from './styles';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <Products
        data={cart}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={
          <EmptyList>
            <EmptyListIcon name="remove-shopping-cart" />
            <EmptyListMessage>Seu carrinho está vazio</EmptyListMessage>
          </EmptyList>
        }
        renderItem={({ item }) => (
          <Product>
            <ProductInfo>
              <Image source={{ uri: item.image }} />

              <ProductDetails>
                <Title>{item.title}</Title>
                <Price>{item.priceFormatted}</Price>
              </ProductDetails>

              <Touchable
                onPress={() => dispatch(CartActions.removeFromCart(item.id))}
              >
                <Icon name="delete-forever" size={30} />
              </Touchable>
            </ProductInfo>

            <Footer>
              <FooterActions>
                <Touchable onPress={() => decrement(item)}>
                  <Icon name="remove-circle-outline" />
                </Touchable>

                <Amount>{item.amount}</Amount>

                <Touchable onPress={() => increment(item)}>
                  <Icon name="add-circle-outline" />
                </Touchable>
              </FooterActions>

              <SubTotal>{item.subtotal}</SubTotal>
            </Footer>
          </Product>
        )}
      />

      {cart.length > 0 && (
        <>
          <Label>TOTAL</Label>
          <Total>{total}</Total>

          <SubmitButton>
            <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
          </SubmitButton>
        </>
      )}
    </Container>
  );
}

export default Cart;
