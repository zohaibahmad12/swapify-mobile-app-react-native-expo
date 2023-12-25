import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LandingScreen from "../Screens/LandingScreen";
import OnboardingScreen from "../Screens/OnboardingScreen";
import { getItem } from "../Utils/AsyncStorage";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import HomePage from "../Screens/HomePage";
import ForgotPassword from "../Screens/ForgotPassword";
import ChatScreen from "../Screens/ChatScreen";
import ProfilePage from "../Screens/ProfilePage";
import WishlistPage from "../Screens/WishlistPage";
import StartListing from "../Screens/StartListing";
import SubCategoriesScreen from "../Screens/SubCategoriesScreen";
import ProductsPage from "../Screens/ProductsPage";
import ProductDetails from "../Screens/ProductDetails";
import { FirebaseContextProvider } from "../firebase/firebaseContext";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { AppContextProvider } from "../context/contextApi";
import ChangePassword from "../Screens/ChangePassword";
import { useNavigation, useRoute } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
  } else if (showOnboarding) {
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
                component={HomeTabs}
              />
              <Stack.Screen
                name="Sub Categories"
                options={{ headerShown: false }}
                component={SubCategoriesTabs}
              />
              <Stack.Screen
                name="Products Page"
                options={{ headerShown: false }}
                component={ProductsPageTabs}
              />
              <Stack.Screen
                name="Product Details"
                options={{ headerShown: false }}
                component={ProductDetailsTabs}
              />

              <Stack.Screen
                name="Forgot Password"
                options={{ headerShown: false }}
                component={ForgotPassword}
              />
              <Stack.Screen
                name="Change Password"
                options={{ headerShown: false }}
                component={ChangePassword}
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
                component={HomeTabs}
              />
              <Stack.Screen
                name="Sub Categories"
                options={{ headerShown: false }}
                component={SubCategoriesTabs}
              />
              <Stack.Screen
                name="Products Page"
                options={{ headerShown: false }}
                component={ProductsPageTabs}
              />
              <Stack.Screen
                name="Product Details"
                options={{ headerShown: false }}
                component={ProductDetailsTabs}
              />

              <Stack.Screen
                name="Forgot Password"
                options={{ headerShown: false }}
                component={ForgotPassword}
              />
              <Stack.Screen
                name="Change Password"
                options={{ headerShown: false }}
                component={ChangePassword}
              />
            </Stack.Navigator>
          </FirebaseContextProvider>
        </AppContextProvider>
      </NavigationContainer>
    );
  }
}

function createTabNavigator(screenComponent) {


  return function CustomTabNavigator() {

    const route = useRoute();
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#23286A",
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 12,
            marginBottom: 6,
          },
          tabBarInactiveTintColor: "#454545",

        }}
      >
        <Tab.Screen
          name="TabHome"
          component={screenComponent}
          initialParams={route.params}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcon
                name="home"
                size={size}
                color={color}
                style={{ marginTop: 3 }}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcon
                name="chat"
                size={size}
                color={color}
                style={{ marginTop: 3 }}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Start Listing"
          component={StartListing}
          options={{
            // tabBarLabel: "Start Listing",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcon
                name="plus-circle"
                size={50}
                color={color}
                style={{ marginTop: -43 }}
              />
            ),
            headerShown: false,
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={WishlistPage}
          options={{
            tabBarLabel: "Wishlist",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcon
                name="favorite"
                size={size}
                color={color}
                style={{ marginTop: 3 }}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcon
                name="account-circle"
                size={size}
                color={color}
                style={{ marginTop: 3 }}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  };
}



const HomeTabs = createTabNavigator(HomePage);
const SubCategoriesTabs = createTabNavigator(SubCategoriesScreen);
const ProductsPageTabs = createTabNavigator(ProductsPage);
const ProductDetailsTabs = createTabNavigator(ProductDetails);

