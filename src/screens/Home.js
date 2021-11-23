import React from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	ScrollView,
	Dimensions,
} from "react-native";
import ConversionInput from "../components/atom/ConversionInput";
import Logo from "../components/Icons/Logo";
import COLOR from "../constants/colors";
import { format } from "date-fns";
import { Button } from "../components/atom/Button";

const screen = Dimensions.get("window");

const Home = ({ navigation }) => {
	const baseCurrency = "USD";
	const quoteCurrency = "INR";
	const conversionRate = 0.89824;
	const date = "2020-03-23";

	return (
		<View style={styles.container}>
			<ScrollView>
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
						onButtonPress={() =>
							navigation.push("CurrencyList", {
								title: "Base Currency",
								activeCurrency: baseCurrency,
							})
						}
						onChangeText={(text) => console.log("text:", text)}
						keyboardType="numeric"
					/>
					<ConversionInput
						text="INR"
						value="123"
						editable={false}
						onButtonPress={() =>
							navigation.push("CurrencyList", {
								title: "Quote Currency",
								activeCurrency: quoteCurrency,
							})
						}
					/>
				</View>
				<Text style={styles.text}>
					{`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
						new Date(date),
						"MMM do, yyyy"
					)}`}
				</Text>
				<Button
					text="Reverse Currencies"
					onPress={() => navigation.push("CurrencyList")}
				/>
			</ScrollView>
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
		marginTop: screen.height * 0.1,
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
	text: {
		fontSize: 14,
		color: COLOR.white,
		textAlign: "center",
	},
});
