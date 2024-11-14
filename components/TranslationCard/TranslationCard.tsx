import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Translation } from '@/app';

export type TranslationCardProps = {
  data: Translation,
  handleDelete: (todoId: number) => void
}

const TodoCard = ({ data, handleDelete }: TranslationCardProps) => {
  return (
    <View style={styles.card}>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleDelete(data._id)}
        >
            <Text style={styles.text}>{data.text}</Text>
        </TouchableOpacity>
    </View>
  );
}

export default TodoCard;