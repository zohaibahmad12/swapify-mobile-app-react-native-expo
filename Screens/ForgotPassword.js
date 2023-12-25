import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Lottie from "lottie-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeIn,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLinkSent, setIsLinkSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigation = useNavigation();

  const handleSubmission = async () => {
    setEmailError("");
    setIsLinkSent(false);
    setIsError(false);

    if (!email) {
      setEmailError("*Please enter email");
      return;
    }
    if (!email.includes("@gmail.com")) {
      setEmailError("*Please enter a valid email");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLinkSent(true);
    } catch (error) {
      console.error("Error checking email existence:", error.message);
      setIsError(true);
    }
  };

  const closeModal = () => {
    setIsLinkSent(false);
    setIsError(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.lottie}>
        <Lottie
          source={require("../assets/Animations/ForgotPassword.json")}
          autoPlay
          loop
        />
      </View>

      <View>
        <Animated.Text
          style={styles.heading}
          entering={FadeIn.delay(200).duration(1000).springify()}
        >
          Forgot Password?
        </Animated.Text>
        <Animated.Text
          style={styles.subtitle}
          entering={FadeIn.delay(400).duration(1000).springify()}
        >
          Don't worry sometimes people can forget too. Enter your email and we
          will send you a password reset link.
        </Animated.Text>
      </View>
      <View style={styles.fields}>
        <Animated.View
          entering={FadeInUp.delay(600).duration(1000).springify()}
          style={{
            backgroundColor: "#f0f0f0",
            padding: 13,
            borderRadius: 15,
            width: width * 0.87,
            marginTop: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={"gray"}
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{ flex: 1 }}
            />
            <Icon
              name="envelope"
              size={17}
              color="grey"
              style={{ marginRight: 5 }}
            />
          </View>
        </Animated.View>
        <Text
          style={{
            color: "red",
            marginTop: -4,
            marginRight: "auto",
            marginLeft: 28,
            marginBottom: 5,
          }}
        >
          {emailError}
        </Text>
        <Animated.View
          style={{ width: width * 0.87 }}
          entering={FadeInDown.delay(800).duration(1000).springify()}
        >
          <TouchableOpacity
            onPress={handleSubmission}
            style={{
              backgroundColor: "#23286A",
              borderRadius: 15,
              marginVertical: 50,
              width: width * 0.87,
              padding: 12,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/*This modal appers when a link is sent successfully. */}
      <Modal
        visible={isLinkSent}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.confirmationTextTitle}>Link Sent</Text>
            <Text style={styles.confirmationText}>
              A password reset link has been sent to {email}. Please check your
              email.
            </Text>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/*A second modal appers when an error occured while sending link. */}
      <Modal
        visible={isError}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.confirmationTextTitle}>Error Occurred</Text>
            <Text style={styles.confirmationText}>
              An error occurred while sending the link. Please try again later.
            </Text>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#f2f1ed",
    backgroundColor: "white",
    // height: "full",
    // width: "full",
  },
  lottie: {
    width: width * 0.6,
    height: width,
    marginTop: 10,
    marginBottom: -30,
  },
  heading: {
    fontSize: 29,
    fontWeight: "bold",
    textAlign: "center",
    color: "#23286a",
  },
  subtitle: {
    fontSize: 15,
    color: "grey",
    marginHorizontal: 26,
    textAlign: "center",
    marginVertical: 10,
  },
  fields: {
    width: width,
    // paddingTop: "58%",
    paddingTop: 10,
    height: height * 1.5,
    alignItems: "center",
    gap: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: width * 0.8,
  },
  confirmationText: {
    color: "black",
    textAlign: "center",
    marginBottom: 20,
  },
  confirmationTextTitle: {
    color: "#23286A",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  closeButton: {
    backgroundColor: "#23286A",
    borderRadius: 10,
    padding: 10,
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
