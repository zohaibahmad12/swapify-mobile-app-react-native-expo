import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons'; // You may need to install this library

const ErrorPopup = ({ isVisible, errorMessage, onClose }) => {
  return (
    <Modal isVisible={isVisible} animationIn="fadeIn" animationOut="fadeOut" backdropTransitionOutTiming={0}>
      <View style={styles.container}>
        <View style={styles.popup}>
          <Ionicons name="ios-alert-circle" size={50} color="red" style={styles.icon} />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 10,
    color:"#fe5e78"
  },
  errorMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fe5e78',
  },
  closeButton: {
    backgroundColor: "#23286A",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
   
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default ErrorPopup;
