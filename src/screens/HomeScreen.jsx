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
import { SearchNormal1, Notification} from 'iconsax-react-native';
import FoodCard from '../components/FoodCard';
import foodData from '../data/foodData';

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const filteredFoods = foodData.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleNotificationPress = () => {
    console.log('Notifikasi ditekan');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white()} barStyle="dark-content" />

      {/* Header dengan judul, ikon notifikasi, dan search */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>
            Food
            <Text style={{ color: colors.green(1) }}>Tahes.</Text>
          </Text>
          <TouchableOpacity onPress={handleNotificationPress}>
            <Notification size={24} color={colors.black()} />
          </TouchableOpacity>
        </View>

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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontFamily: fontType['Pop-ExtraBold'],
    color: colors.black(),
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
});

export default HomeScreen;
