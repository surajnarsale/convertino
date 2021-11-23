import React from "react";
import { StatusBar, FlatList, View } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import currencies from "../constants/data.json";
import { RowItem, RowSeparator } from "../components/atom/RowItem";
import COLOR from "../constants/colors";

export default ({ navigation, route }) => {
	const insets = useSafeArea();

	const params = route.params;

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLOR.white,
			}}
		>
			<StatusBar barStyle="dark-content" backgroundColor={COLOR.blue} />
			<FlatList
				data={currencies}
				renderItem={({ item }) => {
					const selected = params.activeCurrency === item;
					return (
						<RowItem
							title={item}
							onPress={() => {
								navigation.pop();
							}}
							rightIcon={
								selected && (
									<View
										style={{
											width: 25,
											height: 25,
											borderRadius: 20,
											alignItems: "center",
											justifyContent: "center",
											backgroundColor: COLOR.green,
										}}
									>
										<Entypo
											name="check"
											size={20}
											color={COLOR.black}
										/>
									</View>
								)
							}
						/>
					);
				}}
				keyExtractor={(item) => item}
				ItemSeparatorComponent={() => <RowSeparator />}
				ListFooterComponent={() => (
					<View style={{ paddingBottom: insets.bottom }} />
				)}
			/>
		</View>
	);
};
