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
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
const { width, height } = Dimensions.get("window");

export default function HomePage() {
  const { currentUser, signOutUser } = useFirebaseContext();
  const navigation = useNavigation();

  // const handleLogout = async () => {
  //   await signOutUser();
  //   navigation.push("Login");
  // };
  const categoriesData = [
    {
      id: "1",
      name: "Computer & Accessories",
      image: require("../assets/HomeScreen/laptop.png"),
    },
    {
      id: "2",
      name: "Mobiles & Smart Devices",
      image: require("../assets/HomeScreen/mobile.png"),
    },
    {
      id: "3",
      name: "Electronics & Home Appliances",
      image: require("../assets/HomeScreen/electronics.png"),
    },
    {
      id: "4",
      name: "Furniture & Home Decor",
      image: require("../assets/HomeScreen/furniture.png"),
    },
    {
      id: "5",
      name: "Fashion & Beauty",
      image: require("../assets/HomeScreen/fashion.png"),
    },
    {
      id: "6",
      name: "Books & Sports",
      image: require("../assets/HomeScreen/sports.png"),
    },
    {
      id: "7",
      name: "Gym & Fitness",
      image: require("../assets/HomeScreen/gym.png"),
    },
    {
      id: "8",
      name: "Kids",
      image: require("../assets/HomeScreen/kids.png"),
    },
    {
      id: "9",
      name: "Pets",
      image: require("../assets/HomeScreen/pets.png"),
    },
  ];

  const handleCategoryPress = (categoryId, categoryName) => {
    navigation.navigate("Sub Categories", { categoryId, categoryName });
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
              <Image
                source={require("../assets/WhiteLogoText.png")}
                style={{ width: 70, height: 70 }}
              />
              <Text style={[styles.welcomeTitle, { color: "#23286a" }]}>
                Welcome Zohaib
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
              <Image
                source={require("../assets/WhiteLogoText.png")}
                style={{ width: 70, height: 70 }}
              />
              <Text style={[styles.welcomeTitle, { color: "#23286a" }]}>
                Welcome Moto
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


          <View style={styles.bigImageContainer}>
            <Image
              style={styles.bigImage}
              source={require("../assets/HomeScreen/mainImage.png")}
              resizeMode="contain"
            />
          </View>

          <View style={[styles.categoryTitleContainer]}>
            <Text style={styles.allCategoriesTitle}>Browse Categories</Text>
          </View>

          <ScrollView>
            <View style={styles.allCategoriesContainer}>

              <FlatList
                nestedScrollEnabled={true}
                scrollEnabled={false}
                numColumns={3}
                data={categoriesData}
                renderItem={({ item }) => (
                  <View style={styles.categoryContainer}>
                    <TouchableOpacity
                      style={[styles.categoryItem, styles.boxWithShadow]}
                      onPress={() => handleCategoryPress(item.id, item.name)}
                    >
                      <Image source={item.image} style={styles.categoryImage} />

                    </TouchableOpacity>
                    <Text style={styles.categoryName}>{item.name}</Text>
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
    backgroundColor: "#f6f6f6"
  },
  titleContainer: {
    // borderWidth:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },

  welcomeTitle: {
    width: width * 0.6,
    textAlign: "center",
    // borderWidth:1,
    fontWeight: "bold",
    fontSize: 20,
    // marginTop: 70,
    marginLeft: 7
  },

  searchBars: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10
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
    marginTop:170
  },
  bigImage: {
    height: height * 0.22,
    width: width * 0.92,
    marginHorizontal: 13,
    borderRadius: 15,
    marginTop: 10,
  },
  categoryTitleContainer: {
    marginTop: 20,
    padding: 10
  },
  allCategoriesTitle: {
    textAlign: "center",
    // marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#23286A",
  },
  allCategoriesContainer: {
    padding: 7,
   
  },

  categoryContainer: {
    marginTop: 5,
    width: width * 0.30,
    marginHorizontal: 3,

  },
  categoryItem: {
    height: width * 0.29,
    alignItems: "center",
    justifyContent: "center",

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
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 10,
    resizeMode: "stretch"


  },
  categoryName: {
    textAlign: "center",
    alignItems: "center",
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
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
