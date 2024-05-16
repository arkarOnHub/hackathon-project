import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <View style={styles.member}>
        <Text style={styles.memberName}>John Doe</Text>
        <Text style={styles.memberRole}>Frontend Developer</Text>
      </View>
      <View style={styles.member}>
        <Text style={styles.memberName}>Jane Smith</Text>
        <Text style={styles.memberRole}>Backend Developer</Text>
      </View>
      <View style={styles.member}>
        <Text style={styles.memberName}>Alice Johnson</Text>
        <Text style={styles.memberRole}>UI/UX Designer</Text>
      </View>
      <View style={styles.member}>
        <Text style={styles.memberName}>Bob Brown</Text>
        <Text style={styles.memberRole}>QA Engineer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  member: {
    marginBottom: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  memberRole: {
    fontSize: 16,
    color: '#666',
  },
});
