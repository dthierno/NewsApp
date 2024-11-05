import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.color}>
          No recent translations
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,

    justifyContent : 'center',

  },

  box: {
    backgroundColor: '#f9fafc',
    paddingHorizontal: 85,
    paddingVertical: 110,
    borderRadius: 20
    

  },

  color: {
    color: 'grey',


  }

}
)