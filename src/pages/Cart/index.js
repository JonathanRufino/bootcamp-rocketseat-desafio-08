import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

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
import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <Products
        data={cart}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product>
            <ProductInfo>
              <Image source={{ uri: item.image }} />

              <ProductDetails>
                <Title>{item.title}</Title>
                <Price>{item.priceFormatted}</Price>
              </ProductDetails>

              <Touchable onPress={() => removeFromCart(item.id)}>
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

      <Label>TOTAL</Label>
      <Total>{total}</Total>

      <SubmitButton>
        <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ).isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
