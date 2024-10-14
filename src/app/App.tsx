import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	I18nManager,
} from "react-native";

export default function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		// Implement your login logic here
		console.log("Login attempted with:", email, password);
		alert("Login attempted!");
	};

	useEffect(() => {
		I18nManager.forceRTL(true);
		I18nManager.allowRTL(true);
		// Uncomment the following line to reload the app and apply RTL changes
		// RNRestart.Restart();
	}, []);

	return (
		<View
			className="bg-white h-full flex justify-center p-12"
			style={styles.container}
		>
			<Text className="mb-4 text-2xl font-bold" style={{ textAlign: "left" }}>
				התחברות
			</Text>

			<TextInput
				className="w-full bg-gray-100 rounded-md p-3 mb-4 border border-gray-300 text-right"
				placeholder="אימייל"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
				autoCapitalize="none"
			/>
			<TextInput
				className="w-full bg-gray-100 rounded-md p-3 mb-6 text-right border border-gray-300"
				placeholder="סיסמה"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<TouchableOpacity
				className="bg-blue-500 w-full rounded-md p-3"
				onPress={handleLogin}
			>
				<Text className="text-white text-center font-bold">התחברות</Text>
			</TouchableOpacity>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		textAlign: "right",
	},
});
