import React from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {colors, fontType} from '../theme';
import {useFavorite} from '../context/FavoriteContext';
import FoodCard from '../components/FoodCard';

const FavoriteScreen = () => {
  const {favorites} = useFavorite();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white()} barStyle="dark-content" />
      <Text style={styles.title}>Makanan Favorit</Text>

      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>Belum ada makanan favorit.</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {favorites.map(item => (
            <FoodCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </ScrollView>
      )}
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
    fontSize: 22,
    fontFamily: fontType['Pop-Bold'],
    color: colors.black(),
    marginBottom: 5,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: fontType['Pop-Regular'],
    color: colors.grey(0.7),
    textAlign: 'center',
    marginTop: 50,
  },
});

export default FavoriteScreen;
