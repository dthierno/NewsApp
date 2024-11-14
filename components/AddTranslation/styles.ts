import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/constants";

const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      color: COLORS.black
    },
    description: {
      fontSize: 14,
      marginTop: 10,
      color: COLORS.text_description,
    },
    input: {
      height: 35,
      width: "80%",
      borderColor: "gray",
      borderRadius: 10,
      borderWidth: 1,
      paddingHorizontal: 10,
      marginTop: 30,
    },
});

export default styles;