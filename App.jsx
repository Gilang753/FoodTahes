import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import {colors, fontType} from './src/theme';
import FoodCard from './src/components/FoodCard';
import {SearchNormal1} from 'iconsax-react-native';

const App = () => {
  const [search, setSearch] = useState('');
  const [foods] = useState([
    {
      id: 1,
      title: 'Sop Ayam',
      image:
        'https://asset.kompas.com/crops/vC51StTe42MpsBFJKfu2oVLA2XE=/0x0:968x645/1200x800/data/photo/2024/04/12/66189a0a2b318.jpg',
    },
    {
      id: 2,
      title: 'Capcay Seafood',
      image:
        'https://img-global.cpcdn.com/recipes/3d17c2395fd4f7dd/680x964f0.5_0.537917_1.0q90/capcay-seafood-foto-resep-utama.jpg',
    },
    {
      id: 3,
      title: 'Pepes Tahu Ati Ampela',
      image:
        'https://img-global.cpcdn.com/recipes/17c92f6515943b1b/680x964f0.5_0.5_1.0q90/pepes-tahu-ati-ampela-foto-resep-utama.jpg',
    },
    {
      id: 4,
      title: 'Tumis Kangkung',
      image:
        'https://img-global.cpcdn.com/recipes/4b01d791aa14928d/680x964cq90/tumis-kangkung-bakso-foto-resep-utama.jpg',
    },
    {
      id: 5,
      title: 'Bubur Ayam',
      image:
        'https://www.finnafood.com/blog/wp-content/uploads/2023/05/bubur-ayam-gurih.jpg',
    },
    {
      id: 6,
      title: 'Sayur Bening Bayam',
      image:
        'https://assets-cloudflare.segari-ops.id/recipes/sayur-bening-bayam-lsbc8j6kVPQ1Z.jpg',
    },
    {
      id: 7,
      title: 'Sop Daging',
      image:
        'https://www.astronauts.id/blog/wp-content/uploads/2023/11/Resep-Sop-Iga-Sapi-Khas-Betawi-untuk-Makan-Siang-Keluarga-1-1024x678.jpg',
    },
    {
      id: 8,
      title: 'Tempe Bacem',
      image:
        'https://cdn1-production-images-kly.akamaized.net/ArRdulz2AUHsJy5kUoJcnQ7pMtE=/680x383/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2481057/original/089681800_1543315065-resep-menu-sahur-praktis-tempe-bacem-pedas-manis.jpg',
    },
  ]);

  const filteredFoods = foods.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white()} />
      <Text style={styles.title}>
        Food<Text style={{color: 'green'}}>Tahes.</Text>
      </Text>

      <View style={styles.searchWrapper}>
        <SearchNormal1 size={22} color={colors.grey()} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Cari makanan sehat..."
          placeholderTextColor={colors.grey(0.6)}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {filteredFoods.map(item => (
          <FoodCard key={item.id} title={item.title} image={item.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: colors.white()},
  title: {
    fontSize: 24,
    fontFamily: fontType['Pop-ExtraBold'],
    color: colors.black(),
    marginBottom: 20,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {marginRight: 8},
  input: {
    flex: 1,
    fontFamily: fontType['Pop-Regular'],
    color: colors.black(),
    fontSize: 14,
  },
  content: {paddingBottom: 30},
});

export default App;
