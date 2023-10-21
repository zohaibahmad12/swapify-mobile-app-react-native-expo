import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
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
        <Text className="text-center text-[#23286A] font-bold tracking-wider text-4xl mt-10">
          SignUp
        </Text>

        <View className="items-center mx-6 space-y-4 ">
          <View className="bg-black/5 p-3 rounded-2xl w-full">
            <TextInput placeholder="Full name" placeholderTextColor={"gray"} />
          </View>

          <View className="bg-black/5 p-3 rounded-2xl w-full">
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={"gray"}
            />
          </View>

          <View className="bg-black/5 p-3 rounded-2xl w-full">
            <TextInput
              placeholder="Enter password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </View>

          <View className="bg-black/5 p-3 rounded-2xl w-full">
            <TextInput placeholder="Address" placeholderTextColor={"gray"} />
          </View>

          <View className="bg-black/5 p-4 rounded-2xl w-full">
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ marginRight: 5 }}>+92 | </Text>
              <TextInput
                placeholder="Contact"
                placeholderTextColor={"gray"}
                keyboardType="numeric"
              />
            </View>
          </View>

          <View className="w-full">
            <TouchableOpacity className="w-full bg-[#23286A] p-3 rounded-2xl">
              <Text className="text-xl font-bold text-white text-center ">
                Register
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center">
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="text-[#69ADC6]"> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
