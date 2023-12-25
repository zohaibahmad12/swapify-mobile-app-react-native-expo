import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import { useAppContext } from "../context/contextApi";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function WishlistScreen() {


  const navigation=useNavigation();
  const { likedItems, deleteLikedItem } = useAppContext();
  const wishlistData = [

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

  const handleProductPress = (productId, productName) => {
    // Implement your logic for product press
  };

 

  const handleBorrowPress = (productId) => {
    // Implement your logic for borrow press
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <TouchableOpacity style={styles.backiconContainer}
           onPress={() => navigation.goBack()}>

            <MaterialIcon name="keyboard-arrow-left" size={50} color="#23286A" />
          </TouchableOpacity>
          <Text style={[styles.welcomeTitle, { color: "#23286a" }]}>Wishlist</Text>
        </View>
      </View>

      <SafeAreaView style={styles.wishlistContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={wishlistData}
          renderItem={({ item }) => (
            likedItems.includes(item.id) && (
              <View style={[styles.productItemContainer, styles.boxWithShadow]}>
                <Image source={item.image} style={styles.productImage} resizeMode="cover" />
                <View style={styles.productDetailsContainer}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>RS{item.pricePerDay}</Text>
                  <TouchableOpacity styles={styles.borrowButton} onPress={() => handleBorrowPress(item.id)}>
                    <Text style={styles.borrowButton}>Borrow</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => deleteLikedItem(item.id)}>
                  <Icon name="trash-o" size={20} color="#777777" style={styles.icon} />
                </TouchableOpacity>

              </View>
            )
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    width: width * 1,
    marginTop: 30,
    backgroundColor: "#f6f6f6",
    zIndex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 5,
  },
  backiconContainer: {
    fontSize: 20,
    marginRight: 20,
  },
  welcomeTitle: {
    width: width * 0.6,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  wishlistContainer: {
    flex: 1,
    padding: 10
  },
  productItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
  productImage: {
    width: 85,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  productDetailsContainer: {

    flex: 1,
    // borderWidth:1
  },
  productName: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#23286A",
    // borderWidth:1
  },
  productPrice: {
    marginTop: 2,
    fontSize: 11,
    color: "#777777",

  },
  icon: {
    marginLeft: 10,
    color: "#23286A",
  },
  borrowButton: {
    width: width * 0.3,
    backgroundColor: "#23286A",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
    paddingVertical: 8,
    // paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    textAlign: "center"
  },

  boxWithShadow: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
});
