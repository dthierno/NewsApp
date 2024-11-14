import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/constants";

const styles = StyleSheet.create({
    card: {
      width: 340,
      backgroundColor: COLORS.card_translate,
      marginTop: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    text: {
      lineHeight: 22,
    }
});

export default styles;