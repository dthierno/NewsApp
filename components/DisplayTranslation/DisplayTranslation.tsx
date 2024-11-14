import React from 'react';
import { FlatList } from 'react-native';
import { Translation } from "@/app/index";
import styles from './styles';
import TranslationCard from '../TranslationCard/TranslationCard';
import EmptyState from '../EmptyState/EmptyState';

type DisplayTranslationProps = {
    translationList: Translation[],
    handleDelete: (todoId: number) => void,
};

const DisplayTranslation = ({
    translationList: todoList,
    handleDelete
}: DisplayTranslationProps) => {
  return (
        <>
            { todoList.length > 0 ?
                <FlatList 
                    style={styles.list}
                    data={todoList}
                    showsVerticalScrollIndicator={false} 
                    keyExtractor={(item) => `${item._id}`}
                    renderItem={({ item }) => (
                        <TranslationCard handleDelete={handleDelete} data={item} />
                    )}
                />
            :
                <EmptyState>
                    You have no previous translations
                </EmptyState>
            }
        </>
    );
};

export default DisplayTranslation;