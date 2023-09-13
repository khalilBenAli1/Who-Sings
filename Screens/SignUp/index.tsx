import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import AppButton from "../../Components/AppButton";
import ScreenTemplate from "../../Components/ScreenTamplate";
import { useNavigation } from "@react-navigation/native";
import AppTextInput from "../../Components/AppTextInput";
import { UserCredentials } from "../../Utils/types";
import { validateSignup } from "../../Utils/helpers";
import { useStores } from "../../Stores/useStores";

const Signup: React.FC = () => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [Error, setError] = useState<string | null>(null);
  const rootStore = useStores();
  const navigation = useNavigation();

  const handleSignup = () => {
    setError(null);

    setError(null);

    const validationError = validateSignup(credentials);
    if (validationError) {
      setError(validationError);
      return;
    }
    if (rootStore.users.has(credentials.email)) {
      setError("User Exist Already");
      return;
    }

    rootStore.addUser({
      email: credentials.email,
      password: credentials.password,
      name: credentials.name,
      score: 0,
    });
    rootStore.setCurrentUser(credentials.email);
    navigation.navigate("Main" as never);
  };

  return (
    <ScreenTemplate>
      <AppTextInput
        value={credentials.name}
        onChangeText={(name) => setCredentials((prev) => ({ ...prev, name }))}
        placeholder="Name"
      />
      <AppTextInput
        value={credentials.email}
        onChangeText={(email) => setCredentials((prev) => ({ ...prev, email }))}
        placeholder="Email"
      />
      <AppTextInput
        value={credentials.password}
        onChangeText={(password) =>
          setCredentials((prev) => ({ ...prev, password }))
        }
        placeholder="Password"
        secureTextEntry
      />
      <AppTextInput
        value={credentials.confirmPassword}
        onChangeText={(confirmPassword) =>
          setCredentials((prev) => ({ ...prev, confirmPassword }))
        }
        placeholder="Confirm Password"
        secureTextEntry
      />
      {Error && <Text style={tw`text-red-500 mt-2`}>{Error}</Text>}
      <AppButton label="Signup" onPress={handleSignup} />
      <Text style={tw`text-center mt-4`}>
        Already have an account?
        <TouchableOpacity onPress={() => navigation.navigate("Login" as never)}>
          <Text style={tw`text-white`}> Login</Text>
        </TouchableOpacity>
      </Text>
    </ScreenTemplate>
  );
};

export default Signup;
