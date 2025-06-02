import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import { colors, fontType } from '../theme';
import { addFood } from '../api/FoodApi'; 
import {launchImageLibrary} from 'react-native-image-picker';
import {Image} from 'react-native'; 
import notifee, { TimestampTrigger, TriggerType, AndroidImportance } from '@notifee/react-native';



const AddFoodScreen = ({ navigation, route }) => {
  
  const { onRefresh } = route.params || {};

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const pickImage = async () => {
  const result = await launchImageLibrary({mediaType: 'photo', quality: 0.8});
  if (!result.didCancel && result.assets && result.assets.length > 0) {
    setImage(result.assets[0].uri);
  }
};

const [delay, setDelay] = useState(10); // default 10 detik




  const handleAdd = async () => {
    if (!title || !image || !description) {
      Alert.alert('Error', 'Mohon lengkapi semua field!');
      return;
    }

    try {
      await addFood({ title, image, description }); 
      Alert.alert('Sukses', 'Makanan berhasil ditambahkan!');
      setTitle('');
      setImage('');
      setDescription('');
      onRefresh?.(); 
      navigation.goBack();
      await scheduleNotification(delay);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

const scheduleNotification = async (delaySeconds) => {
  const date = new Date(Date.now() + delaySeconds * 1000);

  await notifee.createTriggerNotification(
    {
      title: delaySeconds === 10 
        ? 'Makanan sehat kesukaanmu berhasil ditambahkan!'
        : 'Ingat cek makanan sehatmu!',
      body: delaySeconds === 10 
        ? 'Silakan lihat detail makanan yang baru saja kamu tambahkan.'
        : 'Jangan lupa cek makanan sehatmu ya!',
      android: {
        channelId: await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
          importance: AndroidImportance.HIGH,
        }),
        smallIcon: 'ic_launcher', // pastikan ada icon di Android
      },
    },
    {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
    }
  );
};


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Tambah Makanan Sehat</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nama Makanan</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.inputGroup}>
  <Text style={styles.label}>Gambar</Text>
  <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
    {image ? (
      <Image source={{ uri: image }} style={styles.previewImage} />
    ) : (
      <Text style={styles.imagePlaceholder}>Pilih gambar dari perangkat</Text>
    )}
  </TouchableOpacity>
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
<View style={styles.inputGroup}>
  <Text style={styles.label}>Delay Notifikasi (detik)</Text>
  <View style={{ flexDirection: 'row', gap: 10 }}>
    {[10, 30].map((value) => (
      <TouchableOpacity
        key={value}
        style={[
          styles.delayButton,
          delay === value && styles.delayButtonSelected
        ]}
        onPress={() => setDelay(value)}
      >
        <Text
          style={[
            styles.delayButtonText,
            delay === value && styles.delayButtonTextSelected
          ]}
        >
          {value} detik
        </Text>
      </TouchableOpacity>
    ))}
  </View>
</View>

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Tambah</Text>
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

  imagePicker: {
  borderWidth: 1,
  borderColor: colors.grey(0.3),
  borderRadius: 10,
  padding: 12,
  backgroundColor: colors.white(),
  alignItems: 'center',
  justifyContent: 'center',
  height: 150,
  marginBottom: 10,
},
imagePlaceholder: {
  fontFamily: fontType['Pop-Regular'],
  fontSize: 14,
  color: colors.grey(0.6),
},
previewImage: {
  width: '100%',
  height: '100%',
  borderRadius: 10,
  resizeMode: 'cover',
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
    shadowOffset: { width: 0, height: 1 },
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontFamily: fontType['Pop-Bold'],
    fontSize: 16,
    color: colors.white(),
  },
  delayButton: {
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: colors.grey(0.5),
},
delayButtonSelected: {
  backgroundColor: colors.green(0.2),
  borderColor: colors.green(1),
},
delayButtonText: {
  fontFamily: fontType['Pop-Regular'],
  color: colors.grey(0.8),
},
delayButtonTextSelected: {
  color: colors.green(1),
  fontFamily: fontType['Pop-Medium'],
},

});

export default AddFoodScreen;
