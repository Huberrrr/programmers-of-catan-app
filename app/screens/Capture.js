import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    TouchableOpacity,
    Image,
    CameraRoll
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
                { rotate: 0 },
            ], {
                    compress: 0.5,
                    format: ImageManipulator.SaveFormat.JPG,
                    base64: true
                }
            );

            this.props.navigation.navigate('Confirmation', {
                photo: manipulatedPhoto
            });
        }
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
                            source={require('../../assets/outline.png')}
                        />
                        <TouchableOpacity
                            style={styles.captureButton}
                            onPress={this._captureBoard.bind(this)}
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
        paddingTop: 150,
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
        top: -50,
        width: 250 * 1.3,
        height: 216 * 1.3
    },
    captureButton: {
        top: -60
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0
    }
});