import React, { useState } from "react";
import { View } from "react-native";
import axios from "axios";

import styles from "./styles";
import { APP_NAME } from "@/constants/constants";
import AddTranslation from "@/components/AddTranslation/AddTranslation";
import DisplayTranslation from "@/components/DisplayTranslation/DisplayTranslation";

export type Translation = {
  readonly _id: number;
  text: string;
  translation: string;
};

const Index = () => {
  const [translation, setTranslation] = useState<string>("");
  const [translationList, setTranslationList] = useState<Translation[]>([]);

  function createNewTranslation(
    prevTranslationList: Translation[],
    newTranslationText: string,
    translation: string,
  ): Translation {
    return {
      _id:
        prevTranslationList.length > 0
          ? [...prevTranslationList].slice(-1)[0]._id + 1
          : 0,
      text: newTranslationText.trim(),
      translation: translation,
    };
  }

  function addNewTranslation(
    prevTranslationList: Translation[],
    newTranslation: Translation
  ): void {
    setTranslationList([...prevTranslationList, newTranslation]);
    setTranslation("");
  }

  function handleDelete(todoId: number): void {
    const updatedTranslationList = translationList.filter(
      (todo) => todo._id != todoId
    );
    setTranslationList(updatedTranslationList);
  }

  async function handleSubmit() {
    try {
      const response = await axios.post("https://api.funtranslations.com/translate/yoda", {
          text: translation,
      });

      const data = response.data.contents.translated;

      if (data.trim().length > 0) {
        const newTranslation: Translation = createNewTranslation(
          translationList,
          translation,
          data
        );
        addNewTranslation(translationList, newTranslation);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 429) {
        alert("Yoda translation API rate limit exceeded. Please try again later.");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  }

  return (
    <View style={styles.background}>
      <AddTranslation
        translation={translation}
        title={APP_NAME}
        description={"Add the text you wish to translate"}
        handleSubmit={handleSubmit}
        setTranslation={setTranslation}
      />

      <DisplayTranslation
        translationList={translationList}
        handleDelete={handleDelete}
      />
    </View>
  );
};

export default Index;
