import React from 'react';
import { FlatList } from 'react-native';
import { Translation } from "@/app/index";
import styles from './styles';
import TranslationCard from '../TranslationCard/TranslationCard';
import EmptyState from '../EmptyState/EmptyState';

type DisplayTranslationProps = {
    translationList: Translation[],
    handleDelete: (todoId: translationId) => void,
};

const DisplayTranslation = ({
    translationList: translationList,
    handleDelete
}: DisplayTranslationProps) => {
  return (
        <>
            { translationList.length > 0 ?
                <FlatList 
                    style={styles.list}
                    data={translationList}
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
