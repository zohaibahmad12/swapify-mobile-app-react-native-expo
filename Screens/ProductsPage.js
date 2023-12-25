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
import { useAppContext } from "../context/contextApi";

export default function SubCategoriesScreen() {
  const { currentUser, signOutUser } = useFirebaseContext();
  const navigation = useNavigation();
  const route = useRoute();
  const { likedItems, handleLikeToggle } = useAppContext();
  // const handleLogout = async () => {
  //   await signOutUser();
  //   navigation.push("Login");
  // };

  const productsData = [

    {
      id: "101",
      name: "FujiFilm Camera",
      image: require("../assets/ProductsScreen/camera1.webp"),
      pricePerDay: 200,
    },
    {
      id: "102",
      name: "Pentax HD Camera",
      image: require("../assets/ProductsScreen/camera2.webp"),
      pricePerDay: 900,
    },
    {
      id: "103",
      name: "Canon DSLR Camera",
      image: require("../assets/ProductsScreen/camera3.webp"),
      pricePerDay: 500,
    },
    {
      id: "104",
      name: "Pentax 4k",
      image: require("../assets/ProductsScreen/camera4.jpg"),
      pricePerDay: 550,
    },
    {
      id: "105",
      name: "Canon DSLR 33AS",
      image: require("../assets/ProductsScreen/camera5.jpg"),
      pricePerDay: 600,
    },
    {
      id: "106",
      name: "Canon 4k B42",
      image: require("../assets/ProductsScreen/camera6.jpg"),
      pricePerDay: 500,
    },
    {
      id: "107",
      name: "arlo CCTV Camera",
      image: require("../assets/ProductsScreen/camera7.jpg"),
      pricePerDay: 300,
    },
    {
      id: "108",
      name: "Vostro CCTV Cam",
      image: require("../assets/ProductsScreen/camera8.jpg"),
      pricePerDay: 200,
    },
    {
      id: "109",
      name: "Canon DSLR",
      image: require("../assets/ProductsScreen/camera9.webp"),
      pricePerDay: 250,
    },
    {
      id: "110",
      name: "Nikon DSLR Cam",
      image: require("../assets/ProductsScreen/camera10.webp"),
      pricePerDay: 450,
    },
    {
      id: "111",
      name: "FujiFilm DSLR",
      image: require("../assets/ProductsScreen/camera11.jpg"),
      pricePerDay: 300,
    },
    {
      id: "112",
      name: "CCTV Camera",
      image: require("../assets/ProductsScreen/camera12.jpg"),
      pricePerDay: 400,
    },

  ];


  const handleProductPress = (subCategoryId, subCategoryName) => {
    navigation.navigate("Product Details", { subCategoryId, subCategoryName });
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
              {route.params.subCategoryName}
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
                {route.params.subCategoryName}
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
                numColumns={2}
                data={productsData}
                renderItem={({ item }) => (
                  <View style={styles.categoryContainer}>
                    <TouchableOpacity
                      style={[styles.categoryItem, styles.boxWithShadow]}
                      onPress={() => handleProductPress(item.id, item.name)}
                    >
                      <Image source={item.image} style={styles.categoryImage} />
                      <View style={styles.productNameContainer}>
                        <Text style={styles.categoryName}>RS{item.pricePerDay}/day</Text>
                        <TouchableOpacity
                          style={[styles.heartIcon]}
                          onPress={() => handleLikeToggle(item.id)}
                        >
                          {likedItems.includes(item.id) ? (
                            <Icon name="heart" size={20} color="red" />
                          ) : (
                            <Icon name="heart-o" size={20} color="grey" />
                          )}
                        </TouchableOpacity>
                      </View>

                      <View style={styles.productPriceContainer}>
                        <Text style={styles.productPrice}>{item.name}</Text>
                      </View>

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
    backgroundColor: '#ffffff',
    zIndex: 1,

  },
 
  topContainer: {

    width: width * 1,
    marginTop: 30,
    backgroundColor: "#f6f6f6",

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
    alignItems: "center",
    // borderWidth:1,
    marginTop: 170,

  },
  categoryContainer: {
    width: width * 0.46,
    marginHorizontal: 3,
    // borderWidth:1,
    marginBottom: 20

  },
  categoryItem: {
    height: width * 0.62,
    alignItems: "center",
    justifyContent: "flex-start",
    // borderWidth: 1,

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
    width: width * 0.46,
    height: width * 0.46,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "stretch"
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "red",

  },
  productNameContainer: {
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "red",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 3
  },
  categoryName: {

    width: width * 0.37,
    // borderWidth: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "#23286A",
    // borderWidth: 1,
    marginRight: 5

  },
  heartIcon: {

  },
  productPriceContainer: {
    alignSelf: "flex-start",
    // borderWidth:1,
    width: width * 0.46,
    padding: 3
  },
  productPrice: {
    fontSize: 12,
    // fontWeight: "bold",
    color: "#23286A",

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
