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
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeIn,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Lottie from "lottie-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function ChangePassword() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigation = useNavigation();

  const handleSubmission = async () => {
    setPasswordError("");
    setConfirmPasswordError("");
    setSuccess(false);
    setIsError(false);

    if (!password || !confirmPassword) {
      if (!password) setPasswordError("*Please enter password");
      if (!confirmPassword) setConfirmPasswordError("*Please enter password");
      return;
    }

    if (password.length < 6) {
      setPasswordError("*Password should be at least 6 characters");
      return;
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError("*Password do not match");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess(true);
    } catch (error) {
      console.error("Error occured while changing password:", error.message);
      setIsError(true);
    }
  };

  const closeModal = () => {
    setSuccess(false);
    setIsError(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.lottie}>
        <Lottie
          source={require("../assets/Animations/ChangePassword.json")}
          autoPlay
          loop
        />
      </View>

      <View>
        <Animated.Text
          style={styles.heading}
          entering={FadeIn.delay(200).duration(1000).springify()}
        >
          Change your password
        </Animated.Text>
        <Animated.Text
          style={styles.subtitle}
          entering={FadeIn.delay(400).duration(1000).springify()}
        >
          Time to reset your password. Remember don't forget to write it to
          notes.
        </Animated.Text>
      </View>
      <View style={styles.fields}>
        <View style={{ alignItems: "center", marginHorizontal: 25, gap: 5 }}>
          <Animated.View
            entering={FadeInUp.delay(600).duration(1000).springify()}
            style={{
              backgroundColor: "#f0f0f0",
              padding: 13,
              borderRadius: 15,
              width: width * 0.87,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                placeholder="Enter new password"
                placeholderTextColor={"gray"}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={!passwordVisible}
                style={{ flex: 1 }}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={{ padding: 4 }}
              >
                <Icon
                  name={passwordVisible ? "eye" : "eye-slash"}
                  size={20}
                  color="grey"
                />
              </TouchableOpacity>
            </View>
          </Animated.View>
          <Text
            style={{
              color: "red",
              marginTop: -6,
              marginRight: "auto",
              marginLeft: 8,
              marginBottom: 5,
            }}
          >
            {passwordError}
          </Text>

          <Animated.View
            entering={FadeInUp.delay(600).duration(1000).springify()}
            style={{
              backgroundColor: "#f0f0f0",
              padding: 13,
              borderRadius: 15,
              width: width * 0.87,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                placeholder="Confirm new password"
                placeholderTextColor={"gray"}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry={!passwordVisible}
                style={{ flex: 1 }}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={{ padding: 4 }}
              >
                <Icon
                  name={passwordVisible ? "eye" : "eye-slash"}
                  size={20}
                  color="grey"
                />
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
        <Text
          style={{
            color: "red",
            marginTop: -4,
            marginRight: "auto",
            marginLeft: 28,
            marginBottom: 5,
          }}
        >
          {confirmPasswordError}
        </Text>
        <Animated.View style={{ width: width * 0.87 }} entering={FadeInUp.delay(800).duration(1000).springify()}>
          <TouchableOpacity
            onPress={handleSubmission}
            style={{
              backgroundColor: "#23286A",
              borderRadius: 15,
              marginVertical: 15,
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
      <Modal
        visible={success}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Icon
              name="check-circle"
              size={30}
              color="#23286A"
              style={{ marginLeft: 5, marginVertical: 5, alignSelf: "center" }}
            />
            <Text style={styles.confirmationText}>
              Your account password has been successfully changed. Please login
              with your new password.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.push("Login")}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Continue to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={isError}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Icon
              name="exclamation-triangle"
              size={30}
              color="#23286A"
              style={{ marginLeft: 5, marginVertical: 5, alignSelf: "center" }}
            />
            <Text style={styles.confirmationText}>
              An error occurred while changing your password. Please try again
              later.
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
    marginBottom: -50,
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
    marginTop: 10,
    marginBottom: 25,
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
  confirmationTextTitle: {
    color: "#23286A",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
});
