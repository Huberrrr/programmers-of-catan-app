import React from 'react';
import {
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import TextMono from '../components/TextMono';

export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    _navigateToCapture() {
        this.props.navigation.navigate('Capture');
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/background.png')} style={styles.container}>
                <Image
                    source={require('../../assets/logo.png')}
                />
                <TouchableOpacity
                    onPress={this._navigateToCapture.bind(this)}
                    style={styles.button}
                >
                    <TextMono style={styles.buttonText}>Analyze Board</TextMono>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        position: 'absolute',
        bottom: '15%',
        backgroundColor: '#F6CC45',
        width: '70%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});