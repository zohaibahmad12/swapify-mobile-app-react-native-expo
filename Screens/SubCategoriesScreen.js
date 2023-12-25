import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  TextInput,
  FlatList,
  ScrollView,
  Animated
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useFirebaseContext } from "../firebase/firebaseContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
const { width, height } = Dimensions.get("window");

export default function SubCategoriesScreen() {
  const { currentUser, signOutUser } = useFirebaseContext();
  const navigation = useNavigation();
  const route = useRoute();
  // const handleLogout = async () => {
  //   await signOutUser();
  //   navigation.push("Login");
  // };

  const subcategoryData = [
  
        {
          id: "101",
          name: "Laptops",
          image: require("../assets/SubCategoryScreen/Computer&Accessories/laptop.png"),
        },
        {
          id: "102",
          name: "Desktops",
          image: require("../assets/SubCategoryScreen/Computer&Accessories/pc.png"),
        },
        {
          id: "103",
          name: "Gaming PC",
          image: require("../assets/SubCategoryScreen/Computer&Accessories/gamingpc.png"),
        },
        {
          id: "104",
          name: "Camera",
          image: require("../assets/SubCategoryScreen/Computer&Accessories/camera.png"),
        },
        {
          id: "105",
          name: "Speaker",
          image: require("../assets/SubCategoryScreen/Computer&Accessories/speaker.png"),
        },
        {
          id: "106",
          name: "Projector",
          image: require("../assets/SubCategoryScreen/Computer&Accessories/projector.png"),
        },
        {
          id: "107",
          name: "PC Components",
          image: require("../assets/SubCategoryScreen/Computer&Accessories/PcComponents.png"),
        },
        {
          id: "108",
          name: "Printer",
          image: require("../assets/SubCategoryScreen/Computer&Accessories/printer.png"),
        },
        {
          id: "109",
          name: "Others",
          image: require("../assets/SubCategoryScreen/Computer&Accessories/others.png"),
        },
     
  ];

 
  const handleSubCategoryPress = (subCategoryId, subCategoryName) => {
    navigation.navigate("Products Page", { subCategoryId, subCategoryName });
  };

  const [scrollY] = useState(new Animated.Value(0));

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 50], // adjust the range as needed
    outputRange: [0, -50], // adjust the translateY value as needed
    extrapolate: 'clamp',
  });



  return (
    <View>

      <Animated.View
        style={[
          styles.animatedContainer,
          { transform: [{ translateY: headerTranslateY }] },
        ]}
      >

        <View style={styles.topContainer}>
          <View style={styles.titleContainer}>
            <TouchableOpacity
              style={styles.backiconContainer}
              onPress={() => navigation.goBack()}
            >
              <MaterialIcon
                name="keyboard-arrow-left"
                size={50}
                color="#23286A"
              />
            </TouchableOpacity>

            <Text style={[styles.welcomeTitle, { color: "#23286a" }]}>
              {route.params.categoryName}
            </Text>


          </View>

          <View style={styles.searchBars}>

            <View style={styles.searchBarContainer}>
              <TextInput style={styles.searchInput} placeholder="Search..." />
              <TouchableOpacity>
                <Icon name="search" size={18} color="#23286A" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.iconContainer}>
              <Icon name="bell" size={27} color="#23286A" />
            </TouchableOpacity>

          </View>

        </View>


      </Animated.View>



      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <SafeAreaView style={styles.container}>
          <StatusBar style="Dark" />
          {/* <View style={styles.topContainer}>
            <View style={styles.titleContainer}>
              <TouchableOpacity
                style={styles.backiconContainer}
                onPress={() => navigation.goBack()}
              >
                <MaterialIcon
                  name="keyboard-arrow-left"
                  size={50}
                  color="#23286A"
                />
              </TouchableOpacity>

              <Text style={[styles.welcomeTitle, { color: "#23286a" }]}>
                {route.params.categoryName}
              </Text>


            </View>

            <View style={styles.searchBars}>

              <View style={styles.searchBarContainer}>
                <TextInput style={styles.searchInput} placeholder="Search..." />
                <TouchableOpacity>
                  <Icon name="search" size={18} color="#23286A" />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.iconContainer}>
                <Icon name="bell" size={27} color="#23286A" />
              </TouchableOpacity>

            </View>

          </View> */}


          {/* <View style={styles.bigImageContainer}>
          <Image
            style={styles.bigImage}
            source={require("../assets/HomeScreen/mainImage.png")}
            resizeMode="contain"
          />
        </View> */}

          <ScrollView>
            <View style={styles.allCategoriesContainer}>
              <FlatList
                nestedScrollEnabled={true}
                scrollEnabled={false}
                numColumns={1}
                data={subcategoryData}
                renderItem={({ item }) => (
                  <View style={styles.categoryContainer}>
                    <TouchableOpacity
                      style={[styles.categoryItem, styles.boxWithShadow]}
                      onPress={() => handleSubCategoryPress(item.id, item.name)}
                    >
                      <Image source={item.image} style={styles.categoryImage} />
                      <Text style={styles.categoryName}>{item.name}</Text>

                      <MaterialIcon
                        name="keyboard-arrow-right"
                        size={30}
                        color="#23286A"
                        style={styles.forwardiconContainer}
                      />

                    </TouchableOpacity>

                  </View>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.categoriesList}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ScrollView>
    </View>
    /* <Image
        style={styles.profileImage}
        source={{ uri: "https://placekitten.com/200/200" }}
      />

      {currentUser ? (
        <Text style={styles.userEmail}>{currentUser.email}</Text>
      ) : (
        <Text></Text>
      )}

      <View style={styles.staticContent}>
        <Text style={styles.staticContentText}>Member Since: January 2022</Text>
        <Text style={styles.staticContentText}>Total Orders: 25</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity> */
  );
}

const styles = StyleSheet.create({

animatedContainer: {

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor:"#ffffff",
    zIndex: 1,

  },
  topContainer: {

    width: width * 1,
    padding: 0,
    marginTop: 30,
    backgroundColor: "#f6f6f6"
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 5
  },
  backiconContainer: {
    // borderWidth: 1,
    fontSize: 20,
    marginRight: 20
  },

  welcomeTitle: {
    width: width * 0.6,
    textAlign: "center",
    // borderWidth:1,
    fontWeight: "bold",
    fontSize: 20,
    // marginTop: 70,
  },

  searchBars: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 2,
    width: width * 0.8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  bigImageContainer: {

  },
  bigImage: {
    height: height * 0.22,
    width: width * 0.92,
    marginHorizontal: 13,
    borderRadius: 15,
    marginTop: 10,
  },

  allCategoriesContainer: {
    padding: 7,
    alignItems: "center",
    // borderWidth:1
    marginTop: 170

  },
  categoryContainer: {
    width: width * 0.9,
    marginHorizontal: 3,
    // borderWidth:1
    marginBottom: 20

  },
  categoryItem: {
    height: width * 0.22,
    alignItems: "center",
    justifyContent: "flex-start",
    // borderWidth:1,
    flexDirection: "row",
    paddingHorizontal: 10

  },
  boxWithShadow: {
    backgroundColor: "#ffffff", // Set your background color
    borderRadius: 8, // Set your border radius
    elevation: 10, // For Android box shadow - increased elevation for more visibility
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1, // Adjust the shadow opacity for more visibility
    shadowRadius: 15,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
    backgroundColor: "#ffffff"
  },
  categoryImage: {
    width: width * 0.19,
    height: width * 0.19,
    borderRadius: 10,
    // borderWidth: 1,
    borderColor: "red",
    marginRight: 10,
    resizeMode: "stretch"
  },
  categoryName: {
    textAlign: "left",
    alignItems: "center",
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "#23286A",
    // borderWidth: 1,
    width: width * 0.55,
  },
  forwardiconContainer: {
    marginTop: 5
  },
  logoutButton: {
    backgroundColor: "#FF6347",
    padding: 10,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
