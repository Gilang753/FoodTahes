import React, { useState } from 'react';
import { Alert, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { colors, fontType } from '../theme';
import { Heart, HeartSlash, Edit, Trash, More } from 'iconsax-react-native'; 
import { useFavorite } from '../context/FavoriteContext';
import { deleteFood } from '../api/FoodApi';

const FoodDetailScreen = ({ route, navigation }) => {
  const { id, title, image, description } = route.params;
  const { addToFavorite, removeFavorite, isFavorite } = useFavorite();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleFavorite = () => {
  if (isFavorite(id)) {
    removeFavorite(id);
    Alert.alert('Favorit dihapus');
  } else {
    addToFavorite({ id, title, image, description });
    Alert.alert('Ditambahkan ke favorit');
  }
};


  const handleDelete = () => {
    setModalVisible(false);
    Alert.alert(
      'Konfirmasi',
      'Apakah kamu yakin ingin menghapus makanan ini?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteFood(id);
              removeFavorite(id); // tambahkan baris ini
              Alert.alert('Sukses', 'Data berhasil dihapus');
              navigation.goBack();
            } catch (error) {
              Alert.alert('Error', error.message || 'Gagal menghapus data');
            }
          },
        },
      ],
    );
  };

  const handleEdit = () => {
    setModalVisible(false);
    navigation.navigate('EditFood', { id, title, image, description });
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

      <TouchableOpacity style={styles.moreIcon} onPress={() => setModalVisible(true)}>
        <More color={colors.black()} size={28} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalButton} onPress={handleEdit}>
              <Edit color={colors.black()} size={20} />
              <Text style={styles.modalButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={handleDelete}>
              <Trash color={colors.red()} size={20} />
              <Text style={[styles.modalButtonText, { color: colors.red() }]}>Hapus</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
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
  moreIcon: {
    position: 'absolute',
    top: 16,
    left: 16,
    padding: 8,
    backgroundColor: colors.white(),
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 60,
    paddingLeft: 16,
  },
  modalContent: {
    backgroundColor: colors.white(),
    borderRadius: 8,
    width: 140,
    elevation: 10,
    paddingVertical: 10,
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  modalButtonText: {
    fontFamily: fontType['Pop-Medium'] || fontType['Pop-Regular'],
    fontSize: 16,
    marginLeft: 10,
    color: colors.black(),
  },
});

export default FoodDetailScreen;
