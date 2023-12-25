import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  FlatList,
  ScrollView,
  Platform,
  
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import ImageSlider from "react-native-image-slider";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useFirebaseContext } from "../firebase/firebaseContext";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useAppContext } from "../context/contextApi";
const { width, height } = Dimensions.get("window");

export default function ProductDetails() {
  const { currentUser, signOutUser } = useFirebaseContext();
  const { likedItems, handleLikeToggle } = useAppContext();
  const navigation = useNavigation();

 

 


  const productData = [
    {
      id: "102",
      name: "Pentax HD Camera",
    
      images: [
        require("../assets/ProductsScreen/camera1.webp"),
        require("../assets/ProductsScreen/camera2.webp"),
        require("../assets/ProductsScreen/camera3.webp"),
      ],
      rating: 4.5,
      condition: "Good",
      Age: "2 years",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      PricePerDay: "Rs 900",
      PricePerWeek: "Rs 1000",
      PricePerMonth: "Rs 2000",
      SellingPrice: "Rs 10,000",
    },
  ];
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      nestedScrollEnabled={true}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar style="Dark" />
        <View style={styles.topContainer}>
          <TouchableOpacity
            style={styles.BackiconContainer}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcon
              name="keyboard-arrow-left"
              size={30}
              color="#23286A"
            />
          </TouchableOpacity>
          <Image
            style={styles.logoImage}
            source={require("../assets/LoginImages/BlueLogo.png")}
          />

          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="bell" size={23} color="#23286A" />
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Product Detail</Text>

        <ScrollView>
          <FlatList
            nestedScrollEnabled={true}
            scrollEnabled={false}
            numColumns={2}
            data={productData}
            renderItem={({ item }) => (
              <View>
                <View style={styles.productCard}>
                  <ImageSlider
                    autoPlayWithInterval={3000}
                    images={item.images}
                    resizeMode="contain" 
                  />
                  <View style={styles.productNameContainer}>
                    <Text style={styles.productName}>{item.name}</Text>

                    {/* <StarRating rating={item.rating} /> */}

                    <TouchableOpacity
                      style={[styles.heartIcon, { marginLeft: -5 }]}
                      onPress={() => handleLikeToggle(item.id)}
                    >
                      <Icon
                        name={
                          likedItems.includes(item.id) ? "heart" : "heart-o"
                        }
                        size={18}
                        color={likedItems.includes(item.id) ? "red" : "grey"}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.conditionContainer}>
                    <Text style={styles.conditionLabel}>Condition: </Text>
                    <Text style={styles.condition}>{item.condition}</Text>
                  </View>
                  <View style={styles.ageContainer}>
                    <Text style={styles.ageLabel}>Age: </Text>
                    <Text style={styles.age}>{item.Age}</Text>
                  </View>

                  <Text style={styles.description}>{item.description}</Text>
                </View>

                <View style={styles.productCard}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.PricePerDayLabel}>Price Per Day: </Text>
                    <Text style={styles.PricePerDayValue}>
                      {item.PricePerDay}
                    </Text>
                  </View>
                  <View
                    style={{
                      borderBottomColor: "lightgrey",
                      borderBottomWidth: 1,
                      marginVertical: 10,
                    }}
                  />
                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Text style={styles.PricePerWeekLabel}>
                      Price Per Week:{" "}
                    </Text>
                    <Text style={styles.PricePerWeekValue}>
                      {item.PricePerWeek}
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Text style={styles.PricePerMonthLabel}>
                      Price Per Month:{" "}
                    </Text>
                    <Text style={styles.PricePerMonthValue}>
                      {item.PricePerMonth}
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Text style={styles.SellingPriceLabel}>
                      Selling Price:{" "}
                    </Text>
                    <Text style={styles.SellingPrice}>{item.SellingPrice}</Text>
                  </View>

                  <View style={styles.DateSection}>
                    <Text style={styles.DateLabel}>Choose Date:</Text>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <TouchableOpacity style={styles.dateButton}>
                        <Text style={styles.dateButtonText}>From</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.dateButton}>
                        <Text style={styles.dateButtonText}>To</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.ButtonSection}>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <TouchableOpacity style={styles.ProductButton}>
                        <Text style={styles.ButtonText}>Borrow</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.ProductButton}>
                        <Text style={styles.ButtonText}>Buy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={styles.lenderProductCard}>
                  <View style={{ flexDirection: "row" }}>
                    <MaterialIcon
                      name="account-circle"
                      size={40}
                      color={"grey"}
                      style={{ marginRight: 10 }}
                    />
                    <Text style={styles.LenderInfo}>Lender Name</Text>
                  </View>
                  <View
                    style={{
                      borderBottomColor: "lightgrey",
                      borderBottomWidth: 1,
                      marginVertical: 10,
                    }}
                  />

                  <View style={styles.ButtonSection}>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <TouchableOpacity style={styles.ContactButton}>
                        <Text style={styles.ButtonText}>Show Contact</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.ContactButton}>
                        <Text style={styles.ButtonText}>Send Message</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.categoriesList}
          />
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    // justifyContent: "flex-start",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#23286A",
    marginBottom: 15,
    marginTop: -130,
  },
  logoImage: {
    height: height * 0.5,
    width: width * 0.5,
    marginTop: -110,
  },
  iconContainer: {
    position: "absolute",
    top: 47,
    right: -75,
  },
  BackiconContainer: {
    position: "absolute",
    top: 44,
    left: -83,
  },
  productNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 15,
    marginTop: 5,
  },
  ageContainer: {
    flexDirection: "row",
    paddingRight: 15,
    marginTop: 5,
  },
  conditionContainer: {
    flexDirection: "row",
    paddingRight: 15,
    marginTop: 5,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  productName: {
    flex: 1,
    marginRight: 25,
    textAlign: "left",
    alignItems: "flex-start",
    marginTop: 5,
    fontSize: 23,
    fontWeight: "bold",
    color: "#23286A",
  },
  heartIcon: {
    marginLeft: -25,
    marginTop: 5,
  },
  description: {
    marginTop: 5,
    color: "grey",
    fontSize: 12,
  },
  productCard: {
    backgroundColor: "#e6e6e8",
    borderRadius: 15,
    marginBottom: 10,
    padding: 10,
    width: width * 0.94,
    height: height * 0.4,
    marginLeft: 5,
    marginRight: 5,
  },
  condition: {
    color: "grey",
    fontSize: 12,
  },
  conditionLabel: {
    fontWeight: "bold",
    color: "#23286A",
    fontSize: 13,
  },
  age: {
    color: "grey",
    fontSize: 12,
  },
  ageLabel: {
    fontWeight: "bold",
    color: "#23286A",
    fontSize: 13,
  },
  PricePerWeekLabel: {
    fontWeight: "bold",
    color: "#23286A",
    fontSize: 14,
  },
  PricePerWeekValue: {
    color: "grey",
    fontSize: 14,
  },
  PricePerMonthLabel: {
    fontWeight: "bold",
    color: "#23286A",
    fontSize: 14,
  },
  PricePerMonthValue: {
    color: "grey",
    fontSize: 14,
  },
  SellingPriceLabel: {
    fontWeight: "bold",
    color: "#23286A",
    fontSize: 14,
  },
  SellingPrice: {
    color: "grey",
    fontSize: 14,
  },
  PricePerDayLabel: {
    fontWeight: "bold",
    color: "#23286A",
    fontSize: 18,
  },
  PricePerDayValue: {
    color: "grey",
    fontSize: 18,
  },
  dateButton: {
    borderColor: "#23286A",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 60,
    marginHorizontal: 6,
    borderRadius: 5,
    marginRight: 10,
  },
  ProductButton: {
    backgroundColor: "#23286A",
    paddingVertical: 10,
    paddingHorizontal: 54,
    marginHorizontal: 6,
    borderRadius: 5,
    marginRight: 10,
  },
  dateButtonText: {
    color: "#23286A",
    fontWeight: "bold",
    fontSize: 15,
  },
  ButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  DateSection: {
    marginTop: 10,
  },
  DateLabel: {
    fontWeight: "bold",
    color: "#23286A",
    fontSize: 17,
    marginBottom: 5,
  },
  LenderInfo: {
    fontWeight: "bold",
    color: "#23286A",
    fontSize: 20,
    marginTop: 8,
  },
  ContactButton: {
    backgroundColor: "#23286A",
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginRight: 10,
  },
  lenderProductCard: {
    backgroundColor: "#e6e6e8",
    borderRadius: 15,
    marginBottom: 10,
    padding: 10,
    width: width * 0.94,
    height: height * 0.2,
    marginLeft: 5,
    marginRight: 5,
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
