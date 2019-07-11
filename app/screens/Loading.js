import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import TextMono from '../components/TextMono';

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextMono style={styles.infoText}>Loading</TextMono>
                <Image source={require('../../assets/loading_hexagon.gif')} style={{width: 200, height: 200 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },
    infoText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFCB05'
    },
});
