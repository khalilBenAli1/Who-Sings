import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import AppButton from "../../Components/AppButton";
import ScreenTemplate from "../../Components/ScreenTamplate";
import { useNavigation } from "@react-navigation/native";
import AppTextInput from "../../Components/AppTextInput";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("login");
  };
  
  const navigation = useNavigation();

  return (
    <ScreenTemplate topText="Login to your account">
      <AppTextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <AppTextInput
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        secureTextEntry
      />
      <AppButton label="Login" onPress={handleLogin} />
      <Text style={tw`text-center mt-4`}>
        Don't have an account?
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp" as never)}
        >
          <Text style={tw`text-blue-500`}> Signup</Text>
        </TouchableOpacity>
      </Text>
    </ScreenTemplate>
  );
};

export default Login;
