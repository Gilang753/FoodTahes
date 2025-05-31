import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import { colors, fontType } from '../theme';
import { SearchNormal1, Notification } from 'iconsax-react-native';
import FoodCard from '../components/FoodCard';
import foodData from '../data/foodData';

const HEADER_HEIGHT = 80;

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  const filteredFoods = foodData.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleNotificationPress = () => {
    console.log('Notifikasi ditekan');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white()} barStyle="dark-content" />

      <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
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
      </Animated.View>

      <Animated.FlatList
        data={filteredFoods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FoodCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        )}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT, paddingBottom: 100, paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    paddingTop: 106,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white(),
    zIndex: 10,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
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
