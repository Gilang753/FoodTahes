import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors, fontType} from '../theme';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/736x/74/33/b1/7433b1cd63ce9c72fbf8ca8e37f55ba5.jpg',
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>
        Tentang Food<Text style={{color: 'green'}}>Tahes.</Text>
      </Text>
      <Text style={styles.text}>
        FoodTahes adalah aplikasi yang menyajikan informasi tentang makanan
        sehat untuk mendukung gaya hidup lebih baik.
      </Text>
      <View style={styles.divider} />
      <Text style={styles.subtitle}>Dikembangkan oleh</Text>
      <Text style={styles.text}>Gilang Ramadan</Text>
      <Text style={styles.subtitle}>Versi Aplikasi</Text>
      <Text style={styles.text}>1.0.0</Text>
      <View style={{flex: 10}} /> 
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Beri Masukan</Text>
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
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: fontType['Pop-Bold'],
    color: colors.black(),
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: fontType['Pop-Regular'],
    color: colors.grey(0.8),
    lineHeight: 22,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontType['Pop-SemiBold'],
    color: colors.black(),
    marginTop: 20,
    marginBottom: 5,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: colors.grey(0.3),
    marginVertical: 20,
  },
  button: {
    marginTop: 30,
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white(),
    fontFamily: fontType['Pop-Medium'],
    fontSize: 16,
  },
});

export default AboutScreen;
