import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from 'react-native';
import { colors, fontType } from '../theme';
import { SearchNormal1, Notification } from 'iconsax-react-native';
import FoodCard from '../components/FoodCard';
import { getFoods } from '../api/FoodApi';

const HEADER_HEIGHT = 80;

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  const fetchFoods = async () => {
    try {
      const data = await getFoods();
      setFoods(data);
    } catch (error) {
      console.error('Gagal mengambil data makanan:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const filteredFoods = foods.filter(item =>
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

      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={colors.green(1)} />
        </View>
      ) : (
        <Animated.FlatList
          data={filteredFoods}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <FoodCard
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              onRefresh={fetchFoods}
            />
          )}
          contentContainerStyle={{ paddingTop: HEADER_HEIGHT, paddingBottom: 100, paddingHorizontal: 20 }}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          
          scrollEventThrottle={16}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', marginTop: 20, fontFamily: fontType['Pop-Regular'] }}>
              Tidak ada makanan ditemukan.
            </Text>
          }
          refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchFoods} />
        }
        />
      )}
      
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
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
