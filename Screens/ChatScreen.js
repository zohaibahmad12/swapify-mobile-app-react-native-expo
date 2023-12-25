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
  TextInput
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

export default function ChatScreen() {
  const navigation = useNavigation();

  const chatsData = [
    {
      id: "chat1",
      userName: "Ali Ahmad",
      lastMessage: "Sir 2000 is the final price",
      profileImage: require("../assets/profileicon.jpg"),
      lastMessageTime: "10:30 AM",
      unreadMessages: 2,
    },
    {
      id: "chat2",
      userName: "Zain Junaid",
      lastMessage: "Is product delivered?",
      profileImage: require("../assets/profileicon.jpg"),
      lastMessageTime: "9:00 AM",
      unreadMessages: 4,
    },
    {
      id: "chat3",
      userName: "Hassan Khan",
      lastMessage: "Hello sir",
      profileImage: require("../assets/profileicon.jpg"),
      lastMessageTime: "Yesterday",
      unreadMessages: 0,
    },
    {
      id: "chat4",
      userName: "Mohsin Shoaib",
      lastMessage: "What's the plan for today?",
      profileImage: require("../assets/profileicon.jpg"),
      lastMessageTime: "Yesterday",
      unreadMessages: 0,
    },
    {
      id: "chat5",
      userName: "Zarar Ahmad",
      lastMessage: "Send me your address",
      profileImage: require("../assets/profileicon.jpg"),
      lastMessageTime: "Yesterday",
      unreadMessages: 0,
    },
   
   

  ];

  const handleChatPress = (userId, userName) => {
    // Navigate to the chat details screen or conversation with the selected user
    // navigation.navigate("ChatDetails", { userId, userName });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.backiconContainer}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcon name="keyboard-arrow-left" size={50} color="#23286A" />
          </TouchableOpacity>
          <Text style={[styles.welcomeTitle, { color: "#23286a" }]}>Chats</Text>
        </View>

        <View style={styles.searchBars}>

          <View style={styles.searchBarContainer}>
            <TextInput style={styles.searchInput} placeholder="Search..." />
            <TouchableOpacity>
              <Icon name="search" size={18} color="#23286A" />
            </TouchableOpacity>
          </View>

         
        </View>
      </View>

      <SafeAreaView style={styles.chatListContainer}>
        <FlatList
          data={chatsData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.chatItemContainer}
              onPress={() => handleChatPress(item.id, item.userName)}
            >
              <Image
                source={item.profileImage}
                style={styles.profileImage}
                resizeMode="cover"
              />
              <View style={styles.chatDetailsContainer}>
                <Text style={styles.userName}>{item.userName}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.lastMessageTime}>{item.lastMessageTime}</Text>
                {item.unreadMessages > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{item.unreadMessages}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
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
    // borderWidth:1,

  },
  topContainer: {
    // borderWidth:1,
    width: width * 1,
    marginTop: 30,
    backgroundColor: "#f6f6f6",
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
  searchBars: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    // borderWidth: 1,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 2,
    width: width * 0.92,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  chatListContainer: {
    flex: 1,
    // borderWidth:1
    backgroundColor: "#ffffff"
  },
  chatItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatDetailsContainer: {
    flex: 1,
    height: 55,
    // borderWidth:1
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#23286A",
  },
  lastMessage: {
    marginTop: 7,
    fontSize: 14,
    color: "#777777",
  },
  rightContainer: {
    height: 55,
    // borderWidth:1,
    alignItems: "flex-end",
  },
  lastMessageTime: {
    fontSize: 12,
    color: "#777777",
  },
  unreadBadge: {

    backgroundColor: "#23286A",
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 7,
    marginTop: 11,
  },
  unreadText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
