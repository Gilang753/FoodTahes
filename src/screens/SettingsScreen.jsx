import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, fontType } from '../theme';
import { Moon, Notification, InfoCircle } from 'iconsax-react-native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);
  const [notification, setNotification] = useState(true);

  const handleAbout = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>

      {/* Mode Gelap */}
      <View style={styles.settingItem}>
        <View style={styles.settingInfo}>
          <Moon size={24} color={colors.black()} variant="Bold" />
          <Text style={styles.settingText}>Mode Gelap</Text>
        </View>
        <Switch
          value={darkMode}
          onValueChange={value => setDarkMode(value)}
          trackColor={{ false: '#ccc', true: colors.primary(0.6) }}
          thumbColor={darkMode ? colors.primary() : '#f4f3f4'}
        />
      </View>

      {/* Notifikasi */}
      <View style={styles.settingItem}>
        <View style={styles.settingInfo}>
          <Notification size={24} color={colors.black()} variant="Bold" />
          <Text style={styles.settingText}>Notifikasi</Text>
        </View>
        <Switch
          value={notification}
          onValueChange={value => setNotification(value)}
          trackColor={{ false: '#ccc', true: colors.primary(0.6) }}
          thumbColor={notification ? colors.primary() : '#f4f3f4'}
        />
      </View>

      {/* Tentang Aplikasi */}
      <TouchableOpacity style={styles.settingItem} onPress={handleAbout}>
        <View style={styles.settingInfo}>
          <InfoCircle size={24} color={colors.black()} variant="Bold" />
          <Text style={styles.settingText}>Tentang Aplikasi</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontFamily: fontType['Pop-Bold'],
    color: colors.black(),
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey(0.15),
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingText: {
    fontSize: 16,
    fontFamily: fontType['Pop-Regular'],
    color: colors.black(),
  },
});

export default SettingsScreen;
