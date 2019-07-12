import React from 'react';
import {
    ImageBackground,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import TextMono from '../components/TextMono';

export default class ResultsScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    _navigateToCapture() {
        this.props.navigation.navigate('Capture', {
            color: this.props.navigation.getParam('color')
        });
    }

    render() {
        console.log('data:image/png;base64,' + this.props.navigation.getParam('photo'));
        return (
            <ImageBackground
                source={{ uri: 'data:image/png;base64,' + this.props.navigation.getParam('photo') }}
                style={styles.container}
            >
                <View style={styles.blackTop}></View>
                <View style={styles.blackBottom}></View>
                <View style={styles.blackLeft}></View>
                <View style={styles.blackRight}></View>

                <Image
                    source={require('../../assets/hexagon-overlay.png')}
                    style={styles.overlay}
                />

                <View style={styles.infoTextContainer}>
                    <TextMono style={styles.infoText}>This is your optimized starting position</TextMono>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.startButton}
                        activeOpacity={0.8}
                    >
                        <TextMono style={styles.startButtonText}>Save Result</TextMono>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._navigateToCapture.bind(this)}
                        style={styles.backButton}
                        activeOpacity={0.8}
                    >
                        <TextMono style={styles.backButtonText}>Try Another Board</TextMono>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    infoTextContainer: {
        paddingTop: 125,
        paddingLeft: 25,
        paddingRight: 25
    },
    infoText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFCB05'
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 75
    },
    startButton: {
        width: Dimensions.get('window').width * .7,
        backgroundColor: '#FFCB05',
        width: '70%',
        alignItems: 'center',
        padding: 10,
        borderColor: '#FFCB05',
        borderWidth: 5,
        borderRadius: 50
    },
    backButton: {
        width: Dimensions.get('window').width * .7,
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        borderColor: '#FFCB05',
        borderWidth: 5,
        borderRadius: 50
    },
    startButtonText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    backButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFCB05'
    },
    blackTop: {
        backgroundColor: '#000000',
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: (Dimensions.get('window').height / 2.3) - (307 / 2.3)
    },
    blackBottom: {
        backgroundColor: '#000000',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - ((Dimensions.get('window').height / 2.3) - (307 / 2.3)) - 307
    },
    blackLeft: {
        backgroundColor: '#000000',
        position: 'absolute',
        top: (Dimensions.get('window').height / 2.3) - (307 / 2.3),
        left: 0,
        width: (Dimensions.get('window').width - 353) / 2,
        height: 307
    },
    blackRight: {
        backgroundColor: '#000000',
        position: 'absolute',
        top: (Dimensions.get('window').height / 2.3) - (307 / 2.3),
        right: 0,
        width: (Dimensions.get('window').width - 353) / 2,
        height: 307
    },
    overlay: {
        position: 'absolute',
        top: (Dimensions.get('window').height / 2.3) - (307 / 2.3),
        left: (Dimensions.get('window').width / 2) - (353 / 2),
        width: 353,
        height: 307
    }
});