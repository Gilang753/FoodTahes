import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { colors, fontType } from '../theme';
import { SearchNormal1, Setting2, Information, Heart } from 'iconsax-react-native';
import FoodCard from '../components/FoodCard';
import foodData from '../data/foodData';

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const filteredFoods = foodData.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white()} barStyle="dark-content" />

      {/* Header dengan judul dan search */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Food
          <Text style={{ color: colors.green(1) }}>Tahes.</Text>
        </Text>

        <View style={styles.searchWrapper}>
          <SearchNormal1 size={22} color={colors.grey()} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Cari makanan sehat..."
            placeholderTextColor={colors.grey(0.6)}
            value={search}
            onChangeText={setSearch}
            clearButtonMode="while-editing"
          />
        </View>
        <Text style={styles.subtitle}>Rekomendasi Makanan Sehat</Text>
      </View>

      {/* List makanan */}
      <FlatList
        data={filteredFoods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FoodCard
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 20 }}
      />

      {/* Footer dengan menu ikon */}
      <View style={styles.footer}>
        <View style={styles.menuRow}>
          <TouchableOpacity style={styles.menuButton}>
            <Information size={24} color={colors.green(1)} />
            <Text style={styles.menuText}>Tentang</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButton}>
            <Heart size={24} color={colors.green(1)} />
            <Text style={styles.menuText}>Favorit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButton}>
            <Setting2 size={24} color={colors.green(1)} />
            <Text style={styles.menuText}>Pengaturan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  title: {
    fontSize: 26,
    fontFamily: fontType['Pop-ExtraBold'],
    color: colors.black(),
    marginBottom: 10,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 10,  
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontFamily: fontType['Pop-Regular'],
    color: colors.black(),
    fontSize: 14,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontType['Pop-SemiBold'],
    color: colors.black(),
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: colors.grey(0.2),
    backgroundColor: colors.white(),
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuButton: {
    alignItems: 'center',
    flex: 1,
  },
  menuText: {
    fontSize: 12,
    fontFamily: fontType['Pop-Medium'],
    marginTop: 5,
    color: colors.grey(0.8),
  },
});

export default HomeScreen;
