import React from 'react';
import {
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import TextMono from '../components/TextMono';

export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    _navigateToColorSelection() {
        this.props.navigation.navigate('ColorSelection');
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/background.png')} style={styles.container}>
                <Image
                    source={require('../../assets/logo.png')}
                />
                <TouchableOpacity
                    onPress={this._navigateToColorSelection.bind(this)}
                    style={styles.button}
                    activeOpacity={0.8}
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
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#FFCB05',
        width: Dimensions.get('window').width * .7,
        alignItems: 'center',
        padding: 10,
        borderRadius: 50
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});