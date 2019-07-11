import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from './Splash';
import ColorSelectionScreen from './ColorSelection';
import CaptureScreen from './Capture';

const HomeStack = createSwitchNavigator(
    {
        Splash: SplashScreen,
        ColorSelection: ColorSelectionScreen,
        Capture: CaptureScreen
    },
    {
        initialRouteName: 'Splash'
    }
);

const AppContainer = createAppContainer(HomeStack);

export default AppContainer;