import React from 'react';
import {
	StyleSheet,
	Dimensions,
	View
} from 'react-native';
import TextMono from '../components/TextMono';
import Swiper from 'react-native-swiper'

export default class InfoScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Swiper loop={false} style={styles.mainBG} showsButtons={true}>
				<View style={styles.mainBG}>
					<TextMono style={styles.infoText}>Page 1</TextMono>
				</View>
				<View style={styles.mainBG}>
					<TextMono style={styles.infoText}>Page 2</TextMono>
				</View>
				<View style={styles.mainBG}>
					<TextMono style={styles.infoText}>Page 3</TextMono>
				</View>
			</Swiper>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	mainBG: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000000'

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
	},
	infoText: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#FFCB05'
	},
});