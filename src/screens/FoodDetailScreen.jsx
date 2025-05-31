import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, fontType } from '../theme';
import { Heart, HeartSlash } from 'iconsax-react-native';
import { useFavorite } from '../context/FavoriteContext';

const FoodDetailScreen = ({ route }) => {
  const { id, title, image, description } = route.params;
  const { addToFavorite, removeFavorite, isFavorite } = useFavorite();
  
  
  const toggleFavorite = () => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addToFavorite({ id, title, image, description });
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <TouchableOpacity style={styles.favIcon} onPress={toggleFavorite}>
        {isFavorite(id) ? (
          <Heart color={colors.red()} variant="Bold" size={24} />
        ) : (
          <HeartSlash color={colors.grey(0.6)} size={24} />
        )}
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    paddingTop: 40,
  },
  image: {
    width: '100%',
    height: 250,
    
    
  },
  favIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: colors.white(),
    padding: 8,
    
    borderRadius: 20,
    elevation: 5,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: fontType['Pop-Bold'],
    color: colors.black(),
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
    fontFamily: fontType['Pop-Regular'],
    color: colors.grey(0.9),
    lineHeight: 22,
  },
});
export default FoodDetailScreen;