import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import AppButton from "../../Components/AppButton";
import ScreenTemplate from "../../Components/ScreenTamplate";
import { useNavigation } from "@react-navigation/native";
import AppTextInput from "../../Components/AppTextInput";
import { emailValidationError, isEmpty } from "../../Utils/helpers";
import { useStores } from "../../Stores/useStores";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const rootStore = useStores();
  const handleLogin = () => {
    setError(null);

    const emailError = emailValidationError(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    const passwordError = isEmpty(password) ? "Password can't be blank" : "";
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (rootStore.users.has(email)) {
      const user = rootStore.users.get(email);
      if (password !== user?.password) {
        setError("Wrong password, please try again");
        return;
      } else {
        rootStore.setCurrentUser(email);
        navigation.navigate("Main" as never);
      }
    } else {
      setError("Email dosn't exist");
      return;
    }
  };

  const navigation = useNavigation();

  return (
    <ScreenTemplate>
      <AppTextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <AppTextInput
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        secureTextEntry
      />
      {error && <Text style={tw`text-red-500 text-center mt-2`}>{error}</Text>}

      <AppButton label="Login" onPress={handleLogin} />
      <Text style={tw`text-center mt-4`}>
        Don't have an account?
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp" as never)}
        >
          <Text style={tw`text-white`}> Signup</Text>
        </TouchableOpacity>
      </Text>
    </ScreenTemplate>
  );
};

export default Login;
