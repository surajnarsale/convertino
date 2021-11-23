import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
} from "react-native";
import COLORS from "../../constants/colors";

const ConversionInput = ({ text, onButtonPress, ...props }) => {
	const containerStyles = [styles.container];

	if (props.editable === false) {
		containerStyles.push(styles.containerDisabled);
	}
	return (
		<View style={containerStyles}>
			<TouchableOpacity style={styles.button} onPress={onButtonPress}>
				<Text style={styles.buttonText}>{text}</Text>
			</TouchableOpacity>
			<TextInput style={styles.input} {...props} />
		</View>
	);
};

export default ConversionInput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
		marginVertical: 12,
		marginHorizontal: 20,
		flexDirection: "row",
		borderRadius: 10,
		borderWidth: 2,
		borderColor: COLORS.black,
	},
	containerDisabled: {
		backgroundColor: COLORS.offWhite,
	},
	button: {
		padding: 10,
		backgroundColor: COLORS.black,
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
	},
	buttonText: {
		fontSize: 18,
		color: COLORS.white,
		fontWeight: "bold",
		minWidth: 40,
		textAlign: "center",
	},
	input: {
		flex: 1,
		padding: 10,
		fontSize: 16,
		color: COLORS.textLight,
	},
});
