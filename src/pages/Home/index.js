import React, { Component } from 'react';
import { Alert } from 'react-native';

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

class Home extends Component {
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
}

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
