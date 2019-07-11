import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from './Splash';

const HomeStack = createStackNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions: {
            header: null
        }
    }
});

const AppContainer = createAppContainer(HomeStack);

export default AppContainer;