import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, fontType } from '../theme';

const FoodCard = ({ title, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white(),
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    shadowColor: colors.black(0.1),
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginBottom: 15,
  },
  image: {
    width: 160,
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontFamily: fontType['Pop-Medium'],
    fontSize: 14,
    color: colors.black(),
    textAlign: 'center',
  },
});

export default FoodCard;
