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

function Cart({ cart, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
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

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
