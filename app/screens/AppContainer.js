import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from './Splash';
import CaptureScreen from './Capture';

const HomeStack = createSwitchNavigator({
    Splash: {
        screen: SplashScreen
    },
    Capture: {
        screen: CaptureScreen
    }
});

const AppContainer = createAppContainer(HomeStack);

export default AppContainer;