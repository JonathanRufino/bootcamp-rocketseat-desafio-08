import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Logo from '../../assets/images/logo.svg';
import { Container, Cart, CartBadge, CartCounter, Icon } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <Logo height={24} width={180} />

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
  }).isRequired,
  cartSize: PropTypes.number,
};

Header.defaultProps = {
  cartSize: 0,
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
