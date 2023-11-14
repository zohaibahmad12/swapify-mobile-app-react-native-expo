import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../Screens/LandingScreen";
import OnboardingScreen from "../Screens/OnboardingScreen";
import { getItem } from "../Utils/AsyncStorage";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import HomeScreen from "../Screens/HomeScreen";
import { FirebaseContextProvider } from "../firebase/firebaseContext";
import { AppContextProvider } from "../context/contextApi";
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [showOnboarding, setShowOnboarding] = useState(null);

  const checkIfAlreadyOnboarding = async () => {
    let onBoarded = await getItem("onBoarded");
    if (onBoarded == 1) {
      setShowOnboarding(false);
    } else {
      setShowOnboarding(true);
    }
  };

  useEffect(() => {
    checkIfAlreadyOnboarding();
  });


  if (showOnboarding == null) {

  }

  else if (showOnboarding) {
    return (
      <NavigationContainer>
        <AppContextProvider>
          <FirebaseContextProvider>
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
              <Stack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={HomeScreen}
              />

            </Stack.Navigator>
          </FirebaseContextProvider>
        </AppContextProvider>
      </NavigationContainer>
    );
  } else {

    return (
      <NavigationContainer>
        <AppContextProvider>
          <FirebaseContextProvider>
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

              <Stack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={HomeScreen}
              />

            </Stack.Navigator>
          </FirebaseContextProvider>
        </AppContextProvider>
      </NavigationContainer>
    );
  }
}
