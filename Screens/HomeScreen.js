import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFirebaseContext } from '../firebase/firebaseContext';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

    const {currentUser,signOutUser}=useFirebaseContext();
    const navigation=useNavigation();

    const handleLogout=async()=>{

       await signOutUser();
       navigation.push("Login")

    }

  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{ uri: 'https://placekitten.com/200/200' }} // Replace with user's profile image URL
      />
     
     {(currentUser)?<Text style={styles.userEmail}>{currentUser.email}</Text>:<Text></Text>}
      

      <View style={styles.staticContent}>
        <Text style={styles.staticContentText}>Member Since: January 2022</Text>
        <Text style={styles.staticContentText}>Total Orders: 25</Text>
        {/* Add more static content as needed */}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  staticContent: {
    marginBottom: 20,
  },
  staticContentText: {
    fontSize: 16,
    marginBottom: 5,
  },
  logoutButton: {
    backgroundColor: '#FF6347', // Tomato color
    padding: 10,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
