import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/login";

const Stack = createStackNavigator();

export const AppRoutes = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={LoginScreen} />
    </Navigator>
  );
};
