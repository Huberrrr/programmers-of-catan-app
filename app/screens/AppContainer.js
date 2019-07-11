import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from './Splash';
import CaptureScreen from './Capture';

const HomeStack = createSwitchNavigator(
    {
        Splash: SplashScreen,
        Capture: CaptureScreen
    },
    {
        initialRouteName: 'Splash'
    }
);

const AppContainer = createAppContainer(HomeStack);

export default AppContainer;