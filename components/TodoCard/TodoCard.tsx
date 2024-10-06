import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { type TodoCardProps } from './types';


const TodoCard = ({ data, handleDelete }: TodoCardProps) => {
  return (
    <View style={styles.card}>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleDelete(data._id)}
        >
            <Text style={styles.text}>{data.title}</Text>
        </TouchableOpacity>
    </View>
  );
}

export default TodoCard;