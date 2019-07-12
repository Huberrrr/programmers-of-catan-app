import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from './Splash';
import ColorSelectionScreen from './ColorSelection';
import CaptureScreen from './Capture';
import ConfirmationScreen from './Confirmation';
import LoadingScreen from './Loading';
import ResultsScreen from './Results';

const HomeStack = createSwitchNavigator(
    {
        Splash: SplashScreen,
        ColorSelection: ColorSelectionScreen,
        Capture: CaptureScreen,
        Confirmation: ConfirmationScreen,
        Loading: LoadingScreen,
        Results: ResultsScreen
    },
    {
        initialRouteName: 'Splash'
    }
);

const AppContainer = createAppContainer(HomeStack);

export default AppContainer;
