import React, { useState, useContext } from "react";
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
import { ConversionContext } from "../util/ConversionContext";

const screen = Dimensions.get("window");

const Home = ({ navigation }) => {
	const [value, setValue] = useState("100");
	const conversionRate = 0.89824;
	const date = "2020-03-23";
	const {
		baseCurrency,
		quoteCurrency,
		swapCurrencies,
		setBaseCurrency,
		setQuoteCurrency,
	} = useContext(ConversionContext);

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
						text={baseCurrency}
						value={value}
						editable={true}
						onButtonPress={() =>
							navigation.push("CurrencyList", {
								title: "Base Currency",
								activeCurrency: baseCurrency,
								onChange: (currency) => setBaseCurrency(currency),
							})
						}
						onChangeText={(text) => setValue(text)}
						keyboardType="numeric"
					/>
					<ConversionInput
						text={quoteCurrency}
						value={
							value &&
							`${(parseFloat(value) * conversionRate).toFixed(2)}`
						}
						editable={false}
						onButtonPress={() =>
							navigation.push("CurrencyList", {
								title: "Quote Currency",
								activeCurrency: quoteCurrency,
								onChange: (currency) => setQuoteCurrency(currency),
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
					onPress={() => swapCurrencies()}
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
