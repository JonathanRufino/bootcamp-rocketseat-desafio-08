import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

function Cart({ cart, dispatch }) {
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

              <Touchable
                onPress={() =>
                  dispatch({ type: 'REMOVE_FROM_CART', id: item.id })
                }
              >
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

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
