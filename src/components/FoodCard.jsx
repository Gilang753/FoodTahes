import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors, fontType} from '../theme';

const FoodCard = ({title, image, description}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white(),
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: colors.black(),
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: fontType['Pop-SemiBold'],
    color: colors.black(),
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    fontFamily: fontType['Pop-Regular'],
    color: colors.grey(0.8),
  },
});

export default FoodCard;
