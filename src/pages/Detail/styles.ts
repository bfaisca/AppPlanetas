
import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image:{
        height: Dimensions.get('screen').width
    },

    description: {
      margin:5,
      textAlign:'justify'
    }
  });