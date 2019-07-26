import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

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
  Loading,
} from './styles';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

function Home({ amount, addToCartRequest }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const productsResponse = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(productsResponse);
    }

    try {
      loadProducts();
    } catch (e) {
      Alert.alert('Erro ao buscar produtos', e.toString());
    } finally {
      setLoading(false);
    }
  }, []);

  function handleAddToCard(id) {
    addToCartRequest(id);
  }

  if (loading) {
    return <Loading size="large" />;
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product>
            <Image source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>{item.priceFormatted}</Price>

            <AddToCartButton onPress={() => handleAddToCard(item.id)}>
              <Cart>
                <Icon name="add-shopping-cart" />
                <CartCounter>{amount[item.id] || 0}</CartCounter>
              </Cart>

              <AddToCartButtonText>ADICIONAR</AddToCartButtonText>
            </AddToCartButton>
          </Product>
        )}
      />
    </Container>
  );
}

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  amount: PropTypes.objectOf(PropTypes.number).isRequired,
};

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
