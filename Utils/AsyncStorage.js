import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async(key, value) => {
    try{
        await AsyncStorage.setItem(key, value);
    } 
    catch (error)
    {
        console.log('Error storing value: ', e)
    }
};

export const getItem = async(key) => {
    try{
       const value = await AsyncStorage.getItem(key);
       return value;
    } 
    catch (error)
    {
        console.log('Error retrieving value: ', e)
    }
};

export const removeItem = async(key) => {
    try{
        await AsyncStorage.removeItem(key);
    } 
    catch (error)
    {
        console.log('Error deleting value: ', e)
    }
};