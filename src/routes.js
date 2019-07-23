import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Header } from './components';
import Home from './pages/Home';
import Cart from './pages/Cart';
import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: colors.primary,
      },
    }
  )
);

export default Routes;
