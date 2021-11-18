/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	Image,
	Dimensions
} from 'react-native';

import {
	Colors
} from 'react-native/Libraries/NewAppScreen';

const { width } = Dimensions.get('window');

const Header = () => {
	const logo = require('./assets/logo.png');
	const image = require('./assets/defaultBcg.jpeg');

	return (
		<View style={styles.headerContainer}>
			<Image
				style={styles.logo}
				source={logo}></Image>
			<Image
				style={styles.imgBackground}
				source={image}></Image>
		</View>
	)
}

const Section = ({
	children, title, backgroundColor
}) => {
	const isDarkMode = useColorScheme() === 'dark';
	return (
		<View style={[styles.sectionContainer, {backgroundColor: backgroundColor}]}>
			<Text
				style={[
					styles.sectionTitle,
					{
					color: isDarkMode ? Colors.white : Colors.black,
					borderBottomWidth: 5,
					borderBottomColor: "red"
					},
				]}>
				{title}
			</Text>
			<Text
				style={[
					styles.sectionDescription,
					{
					color: isDarkMode ? Colors.light : Colors.dark,
					},
				]}>
				{children}
			</Text>
		</View>
	);
};

export default function App () {
	const isDarkMode = useColorScheme() === 'dark';


	const image1 = require('./assets/room-1.jpeg');
	const image2 = require('./assets/room-2.jpeg');
	const image3 = require('./assets/room-3.jpeg');

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={backgroundStyle}>
				<Header />
				<View
					style={{
					backgroundColor: isDarkMode ? Colors.black : Colors.white,
					}}>
						<Section title="Services" backgroundColor="#ccc">
							<View style={{alignItems: 'center'}}>
								<Text style={[styles.sectionTitle, {fontSize: 20, marginTop: 15, marginBottom: 10}]}>Free Cocktails</Text>
								<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
								<Text style={[styles.sectionTitle, {fontSize: 20, marginTop: 15, marginBottom: 10}]}>Endless Booking</Text>
								<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
								<Text style={[styles.sectionTitle, {fontSize: 20, marginTop: 15, marginBottom: 10}]}>Free Shuttle</Text>
								<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
								<Text style={[styles.sectionTitle, {fontSize: 20, marginTop: 15, marginBottom: 10}]}>Strongest Beer</Text>
								<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
							</View>
								
						</Section>
						<Section title="Featured Rooms" backgroundColor="#FFF">
							<View style={{alignItems: 'center'}}>
								<Image style={styles.imageSection} source={image1}></Image>
								<Image style={styles.imageSection} source={image2}></Image>
								<Image style={styles.imageSection} source={image3}></Image>
							</View>
								
						</Section>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		justifyContent: 'center',
    	alignItems: 'center',
	},
	logo: {
		marginBottom: 15,
		marginTop: 5
	},
	imgBackground: {
		height: 400
	},
	sectionContainer: {
		paddingTop: 30,
		alignItems: 'center',
		width
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
	imageSection: {
		marginTop: 30,
		height: 150,
		width: (width - 100)
	}
});