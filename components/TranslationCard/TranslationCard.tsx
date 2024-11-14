import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { Translation } from "@/app";

export type TranslationCardProps = {
  data: Translation;
  handleDelete: (TranslationId: number) => void;
};

const TranslationCard = ({ data, handleDelete }: TranslationCardProps) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleDelete(data._id)}
      >
        <View style={styles.boxNotTranslated}>
          <Text style={styles.text}>{data.text}</Text>
        </View>
        <View style={styles.boxTranslated}>
          <Text style={[styles.text, { color: "white", fontWeight: "bold" }]}>
            {data.translation}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TranslationCard;
