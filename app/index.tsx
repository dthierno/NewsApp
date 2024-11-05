import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.boxNotTranslated}>
          <Text>Text to translate</Text>
        </View>

        <View style={styles.boxTranslated}>
        <Text style={styles.translatedText}>Translated text</Text>
        </View>
      </View>
      {/* <View style={styles.box}>
        <Text style={styles.color}>
          No recent translations
        </Text>
      </View> */}
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
    borderRadius: 20,
    

  },

  color: {
    color: 'grey',

  },

  boxNotTranslated: {
    width: 316,
    height: 97,
    backgroundColor: '#F4F4F4',

    borderBottomWidth: 2,
    borderBottomColor: '#B4B4B4',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    
    justifyContent: 'space-around',
    paddingLeft: 15
  },

  boxTranslated: {
    width: 316,
    height: 97,
    backgroundColor: '#0CB16F',

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    
    justifyContent: 'space-around',
    paddingLeft: 15,
  },
  
  translatedText: {
    color: 'white',

  }

}
)