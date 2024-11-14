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
  title = "Your Todo Application",
  description = "Add the  you want to accomplish today", 
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
        value={todo}  // Set the input value from state
        onChangeText={value => setTodo(value)}  // Update the todo value
        onSubmitEditing={handleSubmit}  // Handle form submission on "done"
      />
    </>
  )
}

export default AddTranslation