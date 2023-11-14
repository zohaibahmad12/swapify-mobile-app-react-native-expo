import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../Utils/AsyncStorage";

const { height, width } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Landing Page");
    setItem("onBoarded", "1");
  };
  const DoneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.DoneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={DoneButton}
        bottomBarHighlight={false}
        containerStyles={{ paddingHorizontal: 16 }}
        pages={[
          {
            backgroundColor: "#f2f1ed",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../assets/Animations/Welcome.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: (
              <View>
                <Text style={[styles.title, { color: "#23286a" }]}>
                  Versatile Shopping
                </Text>
              </View>
            ),
            subtitle: (
              <View>
                <Text style={[styles.subtitle, { color: "#455c8c" }]}>
                  Empower your choices at Swapify – you decide whether to borrow
                  or buy, it's all in your hands.
                </Text>
              </View>
            ),
          },
          {
            backgroundColor: "#ffffff",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../assets/Animations/Messges.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: (
              <View>
                <Text style={[styles.title, { color: "#23286a" }]}>
                  List with Ease
                </Text>
              </View>
            ),
            subtitle: (
              <View>
                <Text style={[styles.subtitle, { color: "#455c8c" }]}>
                  Effortlessly manage your product listings, connect with
                  borrowers and buyers, and watch your community grow on
                  Swapify.
                </Text>
              </View>
            ),
          },
          {
            backgroundColor: "#f2f1ed",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../assets/Animations/Feedback.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: (
              <View>
                <Text style={[styles.title, { color: "#23286a" }]}>
                  Share & Thrive
                </Text>
              </View>
            ),
            subtitle: (
              <View>
                <Text style={[styles.subtitle, { color: "#455c8c" }]}>
                  Join Swapify's community of sharing, connect with care, and
                  thrive together.
                </Text>
              </View>
            ),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.8,
    height: width,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
    marginTop: -40,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 20,
  },
  DoneButton: {
    padding: 20,
    // backgroundColor: '',
    // fontSize: 30
  },
});
