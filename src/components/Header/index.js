import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../assets/images/logo.svg';
import { Container, Cart, CartBadge, CartCounter, Icon } from './styles';

function Header({ navigation }) {
  return (
    <Container>
      <Logo height={24} width={180} />

      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" />

        <CartBadge>
          <CartCounter>0</CartCounter>
        </CartBadge>
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Header;
