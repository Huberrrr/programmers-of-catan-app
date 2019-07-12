import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import TextMono from '../components/TextMono';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';

export default class CaptureScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasPermission: null,
            type: Camera.Constants.Type.back
        }
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasPermission: status === 'granted'
        });
    }

    async _captureBoard() {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();

            const manipulatedPhoto = await ImageManipulator.manipulateAsync(photo.uri, [
                { rotate: 0 }
            ], {
                    compress: 1,
                    format: ImageManipulator.SaveFormat.PNG,
                    base64: true
                }
            );

            this.props.navigation.navigate('Confirmation', {
                color: this.props.navigation.getParam('color'),
                photo: manipulatedPhoto
            });
        }
    }

    _navigateToInfo() {
        this.props.navigation.push('Info');
    }

    render() {
        const hasPermission = this.state.hasPermission;

        if (hasPermission === null) {
            return <SafeAreaView />
        } else if (!hasPermission) {
            return (
                <SafeAreaView style={styles.container}>
                    <Text>You must grant camera access to use the app.</Text>
                </SafeAreaView>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Camera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.camera}
                        type={Camera.Constants.Type.back}
                    >
                        <View style={styles.infoTextContainer}>
                            <TextMono style={styles.infoText}>Align the edges of the board with the white outline</TextMono>
                        </View>
                        <Image
                            style={styles.outline}
                            source={require('../../assets/outline-babies.png')}
                        />
                        <TouchableOpacity
                            style={styles.captureButton}
                            onPress={this._captureBoard.bind(this)}
                            activeOpacity={0.8}
                        >
                            <Image
                                source={require('../../assets/capture-button.png')}
                            />
                        </TouchableOpacity>
                    </Camera>
                    <Image
                        style={styles.bottomBar}
                        source={require('../../assets/bottom-bar-bg.png')}
                    />
                    <TouchableOpacity
                        style={styles.infoButton}
                        onPress={this._navigateToInfo.bind(this)}
                        activeOpacity={0.8}
                    >
                        <Image
                            source={require('../../assets/info.png')}
                        />
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
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
    outline: {
        position: 'absolute',
        top: (Dimensions.get('window').height / 2.3) - (307 / 2.3),
        left: (Dimensions.get('window').width / 2) - (353 / 2),
        width: 353,
        height: 307
    },
    captureButton: {
        top: -60
    },
    infoButton: {
        position: 'absolute',
        bottom: 40,
        right: 20
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0
    }
});