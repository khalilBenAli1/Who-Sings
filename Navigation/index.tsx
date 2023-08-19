import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../Screens/MainScreen";
import Login from "../Screens/Login";
import Signup from "../Screens/SignUp";
import { useStores } from "../Stores/useStores";

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  const { currentUser } = useStores();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={currentUser ? "Main" : "Login"}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false, headerTransparent: true }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, headerTransparent: true }}
        />
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{ headerShown: false, headerTransparent: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
