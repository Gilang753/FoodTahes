import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { colors, fontType } from '../theme';
import FoodCard from '../components/FoodCard';

// Contoh data favorit statis
const favoriteFoods = [
  {
    id: 2,
    title: 'Capcay Seafood',
    image: 'https://img-global.cpcdn.com/recipes/3d17c2395fd4f7dd/680x964f0.5_0.537917_1.0q90/capcay-seafood-foto-resep-utama.jpg',
    description: 'Capcay Seafood mengandung berbagai sayuran dan protein laut, kaya serat dan omega-3, baik untuk metabolisme dan jantung.'
  },
  {
    id: 6,
    title: 'Sayur Bening Bayam',
    image: 'https://assets-cloudflare.segari-ops.id/recipes/sayur-bening-bayam-lsbc8j6kVPQ1Z.jpg',
    description: 'Sayur Bening Bayam kaya vitamin A dan C serta zat besi, mendukung sistem kekebalan tubuh dan kesehatan darah.'
  },
];

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white()} barStyle="dark-content" />
      <Text style={styles.title}>Makanan Favorit</Text>

      {favoriteFoods.length === 0 ? (
        <Text style={styles.emptyText}>Belum ada makanan favorit.</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {favoriteFoods.map(item => (
            <FoodCard
              key={item.id}
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
  },
  title: {
    fontSize: 22,
    fontFamily: fontType['Pop-Bold'],
    color: colors.black(),
    marginBottom: 20,
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
