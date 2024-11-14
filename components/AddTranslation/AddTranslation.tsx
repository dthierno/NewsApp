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
  translation: todo,
  title = "Your Yoda Application",
  description = "Add the text you wish to translate", 
  handleSubmit, 
  setTranslation: setTodo 
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
        value={todo} 
        onChangeText={value => setTodo(value)}  
        onSubmitEditing={handleSubmit} 
      />
    </>
  )
}

export default AddTranslation
