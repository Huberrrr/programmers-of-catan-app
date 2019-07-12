import React from 'react';
import {
	StyleSheet,
	Dimensions,
	View
} from 'react-native';
import TextMono from '../components/TextMono';

export default class InfoScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<TextMono>fwfwfwef</TextMono>
			</View>
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