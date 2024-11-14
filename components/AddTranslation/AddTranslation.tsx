import { Text, TextInput } from 'react-native';
import styles from './styles';
import React from 'react';

type AddTranslationType = {
  translation: string,
  title?: string,
  description?: string,
  handleSubmit: () => void,
  setTranslation: (value: React.SetStateAction<string>) => void
}

const AddTranslation = ({ 
  translation: translation,
  title = "Your Yoda Application",
  description = "Add the text you wish to translate", 
  handleSubmit, 
  setTranslation: setTranslation 
} : AddTranslationType) => {
  return (
    <>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>
      
      <TextInput
        returnKeyType='done'
        style={styles.input}
        value={translation} 
        onChangeText={value => setTranslation(value)}  
        onSubmitEditing={handleSubmit} 
      />
    </>
  )
}

export default AddTranslation
