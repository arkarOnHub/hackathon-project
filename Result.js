import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VideoStream from './VideoStream';

const Result = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Real-Time Height Measurement</Text>
            </View>
            <View style={styles.videoContainer}>
                <VideoStream />
            </View>
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 260,
    },
    textContainer: {
        position: 'absolute',
        top: -135,
        alignSelf: 'center',
        zIndex: 1,
        backgroundColor: '#c5e3f6',
        // borderWidth: 2,
        padding: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        // textDecorationLine: 'underline',
        letterSpacing: 2,
    },
    videoContainer: {
        flex: 1,
    },
    goBackButton: {
        backgroundColor: '#075EEC',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignSelf: 'center',
        marginBottom: 40,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Result;
