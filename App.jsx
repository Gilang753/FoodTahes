import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {SearchNormal1} from 'iconsax-react-native';
import {colors, fontType} from './src/theme';

export default function App() {
  const [search, setSearch] = useState('');

  const handleStart = () => {
    console.log('Kamu mencari:', search);
    // Arahkan ke halaman berikutnya (jika pakai navigasi)
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white()} barStyle="dark-content" />

      <Text style={styles.title}>FoodTahes</Text>
      <Text style={styles.subtitle}>Informasi makanan sehat ada di sini</Text>

      <Image
        source={{
          uri: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1594622094/attached_image/ini-makanan-sehat-yang-perlu-dikonsumsi-setiap-hari-0-alodokter.jpg',
        }}
        style={styles.image}
      />

      <View style={styles.searchWrapper}>
        <SearchNormal1 size={22} color={colors.grey()} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Cari makanan sehat..."
          placeholderTextColor={colors.grey(0.6)}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Mulai Jelajahi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontFamily: fontType['Pop-Bold'],
    color: colors.black(),
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontType['Pop-Regular'],
    color: colors.grey(),
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 20,
    marginBottom: 30,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey(0.1),
    borderRadius: 10,
    paddingHorizontal: 15,
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    fontFamily: fontType['Pop-Regular'],
    color: colors.black(),
  },
  button: {
    backgroundColor: colors.blue(),
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 60,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: fontType['Pop-SemiBold'],
    color: colors.white(),
  },
});
