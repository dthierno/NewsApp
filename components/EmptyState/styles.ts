import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/constants";

const styles = StyleSheet.create({
    list: {
        marginTop: 20
    },
    txtNoTask: {
        color: COLORS.text_description
    },
    noTasks : {
        marginTop: 60,
        borderWidth: 0,
        paddingHorizontal: 60,
        paddingVertical: 120,
        borderRadius: 20,
        backgroundColor: COLORS.gray,
    }
});

export default styles;