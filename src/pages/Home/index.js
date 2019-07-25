import React, { Component } from 'react';
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

class Home extends Component {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
  };

  state = {
    products: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const response = await api.get('/products');

      const products = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      this.setState({ products });
    } catch (e) {
      Alert.alert('Erro ao buscar produtos', e.toString());
    } finally {
      this.setState({ loading: false });
    }
  }

  handleAddToCard = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products, loading } = this.state;

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

              <AddToCartButton onPress={() => this.handleAddToCard(item)}>
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
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);
