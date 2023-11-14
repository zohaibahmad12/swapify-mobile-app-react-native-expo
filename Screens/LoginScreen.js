import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
  ScrollView

} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useScrollToTop } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import ErrorPopup from "../components/ErrorPopup";
import { useFirebaseContext } from "../firebase/firebaseContext";
import { isEmailValid, isStrongPassword } from "../Utils/Validation";
const { width, height } = Dimensions.get("window");

export default function LoginScreen() {


  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loader, setLoader] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation();
  const { loginWithEmailPassword, signInWithGoogle } = useFirebaseContext();



  const handleLogin = async () => {

    let flag = 0;
    if (!email) {
      setEmailError("*Email cannot be empty");
      flag = 1;
    } else if (!(isEmailValid(email.trim()))) {
      setEmailError("*Please enter a valid email");
      flag = 1;
    } else {
      setEmailError("");
    }


    if (!password) {
      setPasswordError("*Password cannot be empty");
      flag = 1;
    } else if (!(isStrongPassword(password))) {
      setPasswordError("Password must contain atleast 6 characters");
      flag = 1;
    }
    else {
      setPasswordError("");
    }

    if (flag) {
      return;
    }


    try {
      setLoader(true)
      await loginWithEmailPassword(email.trim(), password);
      setLoader(false)
      navigation.navigate("Home")
    } catch (error) {
      setLoader(false)
      setErrorMessage("Invalid email and password")
      setIsErrorVisible(true)

    }


  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.topContainer}>
        <StatusBar style="light" />

        <View>
          <Animated.Image
            style={styles.background}
            entering={FadeInUp.delay(200).duration(1000).springify()}
            source={require("../assets/LoginImages/Background.png")}
          />

          <View style={styles.downContainer}>
            <Animated.Image
              entering={FadeInUp.delay(400).duration(1000).springify()}
              style={styles.logoImage}
              source={require("../assets/LoginImages/Logo.png")}
            />
          </View>
        </View>

        <View style={styles.fields}>
          <Animated.Text
            entering={FadeIn.delay(400).duration(1000).springify()}
            style={styles.heading}
          >
            Login
          </Animated.Text>




          <View style={{ alignItems: "center", marginHorizontal: 25, gap: 5 }}>

           
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={{
                backgroundColor: "#f0f0f0",
                padding: 13,
                borderRadius: 15,
                width: width * 0.87,
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
                marginTop: -6,
                marginRight: "auto",
                marginLeft: 8,
                marginBottom: 5,
              }}
            >
              {emailError}
            </Text>

            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={{
                backgroundColor: "#f0f0f0",
                padding: 13,
                borderRadius: 15,
                width: width * 0.87,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  placeholder="Enter password"
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
              }}
            >
              {passwordError}
            </Text>

            <View className="ml-auto">
              <TouchableOpacity>
                <Animated.Text
                  entering={FadeIn.delay(600).duration(1000).springify()}
                  style={{
                    color: "#69ADC6",
                    fontSize: 13,
                    marginBottom: 15,
                    marginTop: -5,
                  }}
                >
                  Forgot Password?
                </Animated.Text>
              </TouchableOpacity>
            </View>

            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
              style={{ width: width * 0.87 }}
            >
              <TouchableOpacity
                onPress={handleLogin}
                style={{
                  backgroundColor: "#23286A",
                  borderRadius: 15,
                  marginBottom: 25,
                  width: width * 0.87,
                  padding: 12,
                }}
                disabled={loader}
              >
                {loader ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    Login
                  </Text>)}
              </TouchableOpacity>
            </Animated.View>
           

            <Animated.View
              entering={FadeIn.delay(400).duration(1000).springify()}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: "#d4d3d2",
                  marginHorizontal: 5,
                  marginBottom: 15,
                }}
              />
              <Text style={{ color: "grey", fontSize: 14, marginBottom: 17 }}>
                Or Login with
              </Text>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: "#d4d3d2",
                  marginHorizontal: 5,
                  marginBottom: 15,
                }}
              />
            </Animated.View>

          </View>






          {/* This is to add sign in with google and facebook icons  */}
          <Animated.View
            entering={FadeInUp.delay(200).duration(1000).springify()}
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={signInWithGoogle}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 50,
                borderWidth: 1,
                borderColor: "#d4d3d2",
                marginHorizontal: 25,
                borderRadius: 10,
                marginBottom: 35,
                marginTop:18
              }}
            >
              <Image
                source={require("../assets/LoginImages/search.png")}
                style={{
                  height: 30,
                  width: 30,
                  marginRight: 20,
                }}
              />
              <Text style={{ fontSize: 15, color: "grey" }}>
                Login with Google
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{marginBottom:8}}
              entering={FadeIn.delay(800).duration(1000).springify()}
              className="flex-row justify-center"
            >
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.push("Signup")}>
                <Text className="text-[#69ADC6]"> SignUp</Text>
              </TouchableOpacity>
            </Animated.View>

        </View>

        <ErrorPopup
          isVisible={isErrorVisible}
          errorMessage={errorMessage}
          onClose={() => { setIsErrorVisible(false) }}
        ></ErrorPopup>

      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "white",
    height: "full",
    width: "full",
  },
  background: {
    height: height * 0.45,
    width: width,
    position: "absolute",
  },
  downContainer: {
    flexDirection: "row",
    width: width,
    position: "absolute",
  },
  logoImage: {
    height: height * 0.24,
    width: width * 0.95,
  },
  fields: {
    width: width,
    paddingTop: "58%",
    paddingBottom: 10,
   
  },
  heading: {
    marginBottom: 20,
    marginTop:10,
    textAlign: "center",
    color: "#23286A",
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 40,
  },
});
