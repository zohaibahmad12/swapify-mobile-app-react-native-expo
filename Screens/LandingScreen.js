import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
// import { removeItem } from "../Utils/AsyncStorage";

const { width, height } = Dimensions.get("window");

const LandingScreen = () => {
  const navigation = useNavigation();

  // const handleReset = async () => {
  //   await removeItem("onBoarded");
  //   navigation.push("Onboarding");
  // };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/WhiteLogoText.png")}
        style={{ width: 60, height: 60, marginTop: 50 }}
      />
      <Text style={[styles.title, { color: "#23286a" }]}>
        Welcome to Swapify!
      </Text>
      <Text style={[styles.subtitle, { color: "#455c8c" }]}>
        Embark on a journey to Connect, Share, and Thrive in a Sustainable
        Community of Borrowers, Lenders, Buyers, and Sellers.
      </Text>
      <View style={styles.lottie}>
        <Lottie
          source={require("../assets/Animations/Sharing.json")}
          autoPlay
          loop
        />
      </View>
      <TouchableOpacity onPress={() => navigation.push("Signup")}>
        <View style={styles.button}>
          <Text style={styles.text}>Sign Up</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push("Login")}>
        <View style={styles.button}>
          <Text style={styles.text}>Log In</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={handleReset}>
        <View style={styles.button}>
          <Text style={styles.text}>Reset</Text>
        </View>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#f2f1ed",
    backgroundColor: "white",
  },
  lottie: {
    // marginTop: 20,
    width: width * 0.8,
    height: width,
    // marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
    // marginTop: 70,
  },
  subtitle: {
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 25,
    marginBottom: -25,
  },
  button: {
    backgroundColor: "#23286a",
    marginVertical: 6,
    padding: 10,
    width: width * 0.8,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
