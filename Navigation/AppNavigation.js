import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../Screens/LandingScreen";
import OnboardingScreen from "../Screens/OnboardingScreen";
import { getItem } from "../Utils/AsyncStorage";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [showOnboarding, setShowOnboarding] = useState(null);
  useEffect(() => {
    checkIfAlreadyOnboarding();
  });
  const checkIfAlreadyOnboarding = async () => {
    let onBoarded = await getItem("onBoarded");
    if (onBoarded == 1) {
      setShowOnboarding(false);
    } else {
      setShowOnboarding(true);
    }
  };

  if (showOnboarding == null) {
    return null;
  }
  // return (
  //   <NavigationContainer>
  //         <Stack.Navigator initialRouteName='Onboarding'>
  //         <Stack.Screen
  //             name='Onboarding'
  //             options={{headerShown: false}}
  //             component={OnboardingScreen}
  //           />
  //           <Stack.Screen
  //             name='Landing Page'
  //             options={{headerShown: false}}
  //             component={LandingScreen}
  //           />
  //           <Stack.Screen
  //             name='Login'
  //             options={{headerShown: false}}
  //             component={LoginScreen}
  //           />
  //       </Stack.Navigator>
  //       </NavigationContainer>
  // )
  if (showOnboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="Onboarding"
            options={{ headerShown: false }}
            component={OnboardingScreen}
          />
          <Stack.Screen
            name="Landing Page"
            options={{ headerShown: false }}
            component={LandingScreen}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="Signup"
            options={{ headerShown: false }}
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing Page">
          <Stack.Screen
            name="Onboarding"
            options={{ headerShown: false }}
            component={OnboardingScreen}
          />
          <Stack.Screen
            name="Landing Page"
            options={{ headerShown: false }}
            component={LandingScreen}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="Signup"
            options={{ headerShown: false }}
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
