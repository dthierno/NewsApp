import React from 'react';
import { FlatList } from 'react-native';

import styles from './styles';
import TodoCard from '../TodoCard/TodoCard';
import { type DisplayTodoProps } from './types';
import EmptyState from '../EmptyState/EmptyState';

const DisplayTodo = ({
    todoList,
    handleDelete
}: DisplayTodoProps) => {
  return (
        <>
            { todoList.length > 0 ?
                <FlatList 
                    style={styles.list}
                    data={todoList}
                    showsVerticalScrollIndicator={false} 
                    keyExtractor={(item) => `${item._id}`}
                    renderItem={({ item }) => (
                        <TodoCard handleDelete={handleDelete} data={item} />
                    )}
                />
            :
                <EmptyState>
                    You have no tasks for the day
                </EmptyState>
            }
        </>
    );
};

export default DisplayTodo;