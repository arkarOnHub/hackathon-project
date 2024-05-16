import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Result() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true); // State for loading indicator

  // Dummy height value, replace it with actual height value
  const height = 175;

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Measurement Result</Text>
      </View>

      {/* Video Placeholder */}
      <View style={styles.videoContainer}>
        {/* Placeholder icon or image */}
        {isLoading ? (
          <ActivityIndicator size="large" color="#075EEC" />
        ) : (
          <Text style={styles.videoPlaceholder}>Real-time Video Streaming</Text>
        )}
      </View>

      {/* Height text */}
      <View style={styles.heightContainer}>
        <Text style={styles.heightText}>Height: {height} cm</Text>
      </View>

      {/* Go Back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 44 : 0, // Adjust for iOS notch
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#075EEC',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  videoContainer: {
    width: '100%',
    height: '30%',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlaceholder: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  heightContainer: {
    marginVertical: 20,
  },
  heightText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#075EEC',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
