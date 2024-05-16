import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Image } from 'react-native';

export default function Profile() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [biometricsEnabled, setBiometricsEnabled] = useState(true);
  const [language, setLanguage] = useState('English');
  const [themeColor, setThemeColor] = useState('Blue');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontSize, setFontSize] = useState(16);
  const [backupEnabled, setBackupEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(previousState => !previousState);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(previousState => !previousState);
  };

  const toggleAutoPlay = () => {
    setAutoPlayEnabled(previousState => !previousState);
  };

  const toggleLocation = () => {
    setLocationEnabled(previousState => !previousState);
  };

  const toggleBiometrics = () => {
    setBiometricsEnabled(previousState => !previousState);
  };

  const toggleBackup = () => {
    setBackupEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.setting}>
          <Text>Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
          />
        </View>
        <View style={styles.setting}>
          <Text>Dark Mode</Text>
          <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
        </View>
        <View style={styles.setting}>
          <Text>Auto Play Videos</Text>
          <Switch value={autoPlayEnabled} onValueChange={toggleAutoPlay} />
        </View>
        <View style={styles.setting}>
          <Text>Location Services</Text>
          <Switch value={locationEnabled} onValueChange={toggleLocation} />
        </View>
        <View style={styles.setting}>
          <Text>Biometrics</Text>
          <Switch value={biometricsEnabled} onValueChange={toggleBiometrics} />
        </View>
        <View style={styles.setting}>
          <Text>Language</Text>
          <Text>{language}</Text>
        </View>
        <View style={styles.setting}>
          <Text>Theme Color</Text>
          <Text>{themeColor}</Text>
        </View>
        <View style={styles.setting}>
          <Text>Font Family</Text>
          <Text>{fontFamily}</Text>
        </View>
        <View style={styles.setting}>
          <Text>Font Size</Text>
          <Text>{fontSize}</Text>
        </View>
        <View style={styles.setting}>
          <Text>Backup Enabled</Text>
          <Switch value={backupEnabled} onValueChange={toggleBackup} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  settingsSection: {
    width: '80%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
