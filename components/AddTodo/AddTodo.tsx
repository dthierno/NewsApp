import React from 'react'
import { Text, TextInput } from 'react-native'

import { type AddTodoType } from './type';
import styles from './styles';

const AddTodo = ({ 
  todo,
  title = "Your Todo Application",
  description = "Add the tasks you want to accomplish today", 
  handleSubmit, 
  setTodo 
} : AddTodoType) => {
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

export default AddTodo