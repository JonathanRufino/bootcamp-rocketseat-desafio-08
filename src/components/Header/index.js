import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Logo from '../../assets/images/logo.svg';
import {
  Container,
  Cart,
  CartBadge,
  CartCounter,
  Icon,
  Touchable,
} from './styles';

function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  function handleHomeNavigation() {
    const { routeName } = navigation.state;

    if (routeName !== 'Home') {
      navigation.pop();
    }
  }

  return (
    <Container>
      <Touchable onPress={handleHomeNavigation}>
        <Logo height={24} width={180} />
      </Touchable>

      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" />

        <CartBadge>
          <CartCounter>{cartSize}</CartCounter>
        </CartBadge>
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    pop: PropTypes.func,
    state: PropTypes.shape({
      routeName: PropTypes.string,
    }),
  }).isRequired,
};

export default Header;
