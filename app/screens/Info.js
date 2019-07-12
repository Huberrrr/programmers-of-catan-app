import React from 'react';
import {
	StyleSheet,
	Dimensions,
	View,
	Image
} from 'react-native';
import TextMono from '../components/TextMono';
import Swiper from 'react-native-swiper'

export default class InfoScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Swiper loop={false} style={styles.mainBG} showsButtons={true}
				nextButton={<View />} prevButton={<View />}>
				<View style={styles.mainBG}>
					<Page1/>
				</View>
				<View style={styles.mainBG}>
					<TextMono style={styles.infoTextHeading}>Page 2</TextMono>
				</View>
				<View style={styles.mainBG}>
					<TextMono style={styles.infoTextHeading}>Page 3</TextMono>
				</View>
			</Swiper>
		);
	}
}

const Page1 = () => {
	return(
		<View style= {styles.mainBG}>
			<TextMono style={styles.infoTextHeading}>Instructions</TextMono>
			<Image
				source = { require('../../assets/instructions_1.png') }	
				style = { {marginTop: 90, marginBottom: 25, width: 250, height: 250} }/>
			<TextMono style={styles.infoTextSubtext}>Set up the Catan board using a random configuration</TextMono>
		</View>
	);
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
	infoTextHeading: {
		fontSize: 26,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#FFCB05'
	},
	infoTextSubtext: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#ffffff',
		paddingLeft: 15,
		paddingRight: 15
	},
});