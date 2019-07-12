import React from 'react';
import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import SplashScreen from './Splash';
import ColorSelectionScreen from './ColorSelection';
import CaptureScreen from './Capture';
import ConfirmationScreen from './Confirmation';
import LoadingScreen from './Loading';
import ResultsScreen from './Results';
import InfoScreen from './Info';

const CaptureStack = createStackNavigator(
    {
        Capture: {
            screen: CaptureScreen,
            navigationOptions: {
                header: null
            }
        },
        Info: {
            screen: InfoScreen,
            navigationOptions: {
                title: 'Instructions',
                headerStyle: {
                    backgroundColor: '#000000'
                },
                headerTintColor: '#FFCB05',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
        }
    },
    {
        initialRouteName: 'Capture',

    }
)

const MainNav = createSwitchNavigator(
    {
        Splash: SplashScreen,
        ColorSelection: ColorSelectionScreen,
        Capture: CaptureStack,
        Confirmation: ConfirmationScreen,
        Loading: LoadingScreen,
        Results: ResultsScreen,
    },
    {
        initialRouteName: 'Splash'
    }
);

const AppContainer = createAppContainer(MainNav);

export default AppContainer;
