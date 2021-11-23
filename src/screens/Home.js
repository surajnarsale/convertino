import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import ConversionInput from "../components/atom/ConversionInput";
import Logo from "../components/Icons/Logo";
import COLOR from "../constants/colors";

const Home = () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" backgroundColor={COLOR.blue} />
			<View style={styles.logoContainer}>
				<View style={styles.logoWrapper}>
					<Logo />
				</View>
				<Text style={styles.logoText}>CONVERTINO</Text>
				<Text style={styles.logoCaption}>currency conveter</Text>
			</View>
			<View style={styles.inputContainer}>
				<ConversionInput
					text="USD"
					value="123"
					editable={true}
					onButtonPress={() => alert("todo!")}
				/>
				<ConversionInput
					text="INR"
					value="123"
					editable={false}
					onButtonPress={() => alert("todo!")}
				/>
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOR.blue,
	},
	logoContainer: {
		alignSelf: "center",
		marginTop: 80,
		marginBottom: 40,
	},
	logoWrapper: {
		alignItems: "center",
	},
	logoText: {
		textAlign: "center",
		fontSize: 25,
		fontWeight: "bold",
		color: COLOR.white,
		marginTop: 7,
	},
	logoCaption: {
		textAlign: "center",
		fontSize: 15,
		color: COLOR.offWhite,
	},
	inputContainer: {
		marginBottom: 10,
	},
});
