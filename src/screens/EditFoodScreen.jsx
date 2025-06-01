import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {colors, fontType} from '../theme';
import {updateFood} from '../api/FoodApi';

const EditFoodScreen = ({route, navigation}) => {
  const {onRefresh} = route.params;
  const {
    id,
    title: initTitle,
    image: initImage,
    description: initDescription,
  } = route.params;
  const [title, setTitle] = useState(initTitle);
  const [image, setImage] = useState(initImage);
  const [description, setDescription] = useState(initDescription);

  const handleUpdate = async () => {
    if (!title || !image || !description) {
      Alert.alert('Error', 'Mohon lengkapi semua field!');
      return;
    }

    try {
      await updateFood(id, {title, image, description});
      Alert.alert('Sukses', 'Makanan berhasil diperbarui!');
      onRefresh?.();
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Gagal memperbarui makanan!');
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Edit Makanan Sehat</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nama Makanan</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Link Gambar</Text>
        <TextInput style={styles.input} value={image} onChangeText={setImage} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Deskripsi</Text>
        <TextInput
          multiline
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Simpan Perubahan</Text>
      </TouchableOpacity>
    </ScrollView>
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
    fontSize: 24,
    fontFamily: fontType['Pop-Bold'],
    color: colors.black(),
    marginBottom: 25,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontFamily: fontType['Pop-Medium'],
    fontSize: 14,
    color: colors.black(),
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grey(0.3),
    borderRadius: 10,
    padding: 12,
    fontFamily: fontType['Pop-Regular'],
    fontSize: 14,
    color: colors.black(),
    backgroundColor: colors.white(),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: colors.green(1),
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontFamily: fontType['Pop-Bold'],
    fontSize: 16,
    color: colors.white(),
  },
});

export default EditFoodScreen;
