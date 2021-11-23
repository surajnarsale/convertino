import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import COLOR from "../../constants/colors";

export const Button = ({ onPress, text }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Image
				source={require("../../../assets/reverse.png")}
				style={styles.buttonIcon}
				resizeMode="contain"
			/>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 20,
	},
	buttonIcon: {
		marginRight: 10,
		width: 20,
		height: 20,
	},
	buttonText: {
		fontSize: 16,
		color: COLOR.white,
	},
});
