import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/constants";

const styles = StyleSheet.create({
    card: {
      width: 340,
    },
    text: {
      lineHeight: 22,
    },
    boxNotTranslated: {
      backgroundColor: COLORS.card_translate,
      marginTop: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
  
    boxTranslated: {
      backgroundColor: '#0CB16F',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
    },
    
    translatedText: {
      color: 'white',
  
    }
});

export default styles;