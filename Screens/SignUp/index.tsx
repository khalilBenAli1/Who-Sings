import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import AppButton from "../../Components/AppButton";
import ScreenTemplate from "../../Components/ScreenTamplate";
import { useNavigation } from "@react-navigation/native";
import AppTextInput from "../../Components/AppTextInput";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    console.log("signup");
  };

  const navigation = useNavigation();
  
  return (
    <ScreenTemplate topText="Create a new account">
      <AppTextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <AppTextInput
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        secureTextEntry
      />
      <AppTextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        secureTextEntry
      />
      <AppButton label="Signup" onPress={handleSignup} />
      <Text style={tw`text-center mt-4`}>
        Already have an account?
        <TouchableOpacity onPress={() => navigation.navigate("Login" as never)}>
          <Text style={tw`text-blue-500`}> Login</Text>
        </TouchableOpacity>
      </Text>
    </ScreenTemplate>
  );
};

export default Signup;
