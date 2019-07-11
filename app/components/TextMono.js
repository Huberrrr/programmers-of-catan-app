import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import * as Font from 'expo-font'

export default class TextMono extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'plex': require('../../assets/IBMPlexMono-Regular.ttf'),
            'plex-bold': require('../../assets/IBMPlexMono-Bold.ttf')
        });

        this.setState({
            fontLoaded: true
        });
    }

    render() {
        const propsFontStyle = (this.props.style) ? this.props.style : null;
        const customFontStyle = (this.props.style && this.props.style.fontWeight && this.props.style.fontWeight === 'bold') ? styles.textBold : styles.text;

        if (this.state.fontLoaded) {
            return <Text style={[propsFontStyle, customFontStyle]}>{this.props.children}</Text>
        } else {
            return <Text>{this.props.children}</Text>
        }
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'plex'
    },
    textBold: {
        fontFamily: 'plex-bold'
    }
});