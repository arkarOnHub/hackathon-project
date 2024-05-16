import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.hero}>
        <Text style={styles.heroText}>Hi Jim 👋🏻</Text>
        <Image source={require('../assets/homebg.png')} style={styles.heroImg} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Measure the height in{'\n'}ONE CLICK</Text>

          <Text style={styles.message}>
            Press 'Measure' to start the process.
          </Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={() => {
          //add action
          navigation.navigate('Result');
        }}>
          <Text style={styles.btnText}>Measure</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
    justifyContent: 'space-between',
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    marginTop: 60,
  },
  title: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '500',
    color: '#281b52',
    textAlign: 'center',
    marginBottom: 12,
  },
  message: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
  },
  hero: {
    alignItems: 'center',
    padding: 16,
    margin: 12,
  },
  heroText: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '500',
    color: '#281b52',
    alignSelf: 'flex-start', // Aligns text to the left
    paddingLeft: 10,
  },
  heroImg: {
    width: 400,
    height: 200,
  },
  btn: {
    backgroundColor: '#075EEC',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  }
})