import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Space,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { KeyboardAvoidingView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="position"
      contentContainerStyle={{ flex: 1 }}
      keyboardVerticalOffset={-700}
    >
      <View className="bg-white h-full w-full">
        <StatusBar style="light" />

        <View>
          <Animated.Image
            entering={FadeInUp.delay(200).duration(1000).springify()}
            className="h-[300] w-full absolute"
            source={require("../assets/LoginImages/Background.png")}
          />
          <View className="flex-row justify-around w-full absolute">
            <Animated.Image
              entering={FadeInUp.delay(400).duration(1000).springify()}
              className="h-[150] w-[300]"
              source={require("../assets/LoginImages/Logo.png")}
            />
          </View>
        </View>

        <View className="h-full w-full justify-around pt-40 pb-10">
          <Text className="text-center text-[#23286A] font-bold tracking-wider text-4xl">
            Login
          </Text>

          <View className="items-center mx-6 space-y-4 ">
            <View className="bg-black/5 p-4 rounded-2xl w-full">
              <TextInput
                placeholder="Email Address"
                placeholderTextColor={"gray"}
              />
            </View>

            <View className="bg-black/5 p-4 rounded-2xl w-full mb-3">
              {/* <TextInput
                placeholder="Enter password"
                placeholderTextColor={"gray"}
                secureTextEntry
              /> */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  placeholder="Enter password"
                  placeholderTextColor={"gray"}
                  secureTextEntry={!passwordVisible} // Toggles secureTextEntry
                  style={{ flex: 1 }}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  style={{ padding: 10 }}
                >
                  <Icon
                    name={passwordVisible ? "eye" : "eye-slash"} // Toggles eye icon
                    size={20}
                    color="black" // Change the color as needed
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View className="ml-auto">
              <TouchableOpacity>
                <Animated.Text
                  entering={FadeInDown.delay(400).duration(1000).springify()}
                  className="text-[#69ADC6] text-xs mt-[-25] mb-5"
                >
                  Forgot Password?
                </Animated.Text>
              </TouchableOpacity>
            </View>

            <View className="w-full">
              <TouchableOpacity className="w-full bg-[#23286A] p-3 rounded-2xl mb-3">
                <Text className="text-xl font-bold text-white text-center ">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text className="text-[#69ADC6]"> SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
