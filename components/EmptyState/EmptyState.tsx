import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


type EmptyStateProps = {
  children: string
};

const EmptyState = ({ children }: EmptyStateProps) => {
  return (
    <View style={styles.noTasks}>
        <Text style={styles.txtNoTask}>
            {children}
        </Text>
    </View>
  )
};

export default EmptyState;