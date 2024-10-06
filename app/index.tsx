import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { type TodoList } from './types';
import { APP_NAME } from '@/constants/constants';
import AddTodo from '@/components/AddTodo/AddTodo';
import DisplayTodo from '@/components/DisplayTodo/DisplayTodo';


const Index = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoList[]>([]);  

  function createNewTodo(
    prevTodoList: TodoList[], 
    newTodoTitle: string
  ) : TodoList {
    return {
      _id: prevTodoList.length > 0? [...prevTodoList].slice(-1)[0]._id + 1 : 0,
      title: newTodoTitle.trim()
    };
  }

  function addNewTodo(
    prevTodoList: TodoList[], 
    newTodo:TodoList
  ) : void {
    setTodoList([...prevTodoList, newTodo]);
    setTodo("");  // Reset the input
  }

  function handleDelete(todoId: number) : void {
    const updatedTodoList = todoList.filter((todo) => todo._id != todoId);
    setTodoList(updatedTodoList);
  }

  function handleSubmit() {
    if (todo.trim().length > 0) {
      const newTodo: TodoList = createNewTodo(todoList, todo);
      addNewTodo(todoList, newTodo);
    }
  }

  return (
      <View style={styles.background}>

        <AddTodo 
          todo={todo}
          title={APP_NAME} 
          description={'Add the tasks you want to accomplish today'} 
          handleSubmit={handleSubmit} 
          setTodo={setTodo}          
        />

        <DisplayTodo 
          todoList={todoList}
          handleDelete={handleDelete}
        /> 
        
      </View>
  );
}

export default Index;
