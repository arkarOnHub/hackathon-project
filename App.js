import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import User from './assets/profile.png';

import { SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import LoginScreen from './LoginScreen';
import Home from './screens/Home';
import Profile from './screens/Profile';
import AboutUs from './screens/AboutUs';
import Result from './Result';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#f4f4f4',
          borderBottomWidth: 1,
        }}
      >
        <Image
          source={User}
          style={{
            height: 130,
            width: 130,
            borderRadius: 65,
            borderWidth: 2,
            borderColor: 'white',
          }}
        />
        <Text
          style={{
            fontSize: 22,
            marginVertical: 6,
            fontWeight: 'bold',
            color: '#111',
          }}
        >
          4G
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#111',
          }}
        >
          Development Team
        </Text>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  );
}

function DrawerNavigator({ setIsLoggedIn }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        },
        headerStyle: {
          backgroundColor: '#075EEC',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: 'blue',
        drawerLabelStyle: {
          color: '#111',
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          drawerIcon: () => <SimpleLineIcons name="home" size={20} color="#075EEC" />,
        }}
        component={Home}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: 'Profile',
          title: 'Profile',
          drawerIcon: () => <SimpleLineIcons name="user" size={20} color="#075EEC" />,
        }}
        component={Profile}
      />
      <Drawer.Screen
        name="About Us"
        options={{
          drawerLabel: 'About Us',
          title: 'About Us',
          drawerIcon: () => <SimpleLineIcons name="info" size={20} color="#075EEC" />,
        }}
        component={AboutUs}
      />
      <Drawer.Screen
        name="Logout"
        options={{
          drawerLabel: 'Logout',
          title: 'Logout',
          drawerIcon: () => <SimpleLineIcons name="logout" size={20} color="#075EEC" />,
        }}
      >
        {() => {
          setIsLoggedIn(false);
          return null;
        }}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="Drawer">
            {(props) => <DrawerNavigator {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        )}
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecf4',
  },
});
