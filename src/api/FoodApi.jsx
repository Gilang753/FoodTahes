import firestore from '@react-native-firebase/firestore';

const collection = firestore().collection('foods');

export const getFoods = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
};

export const getFoodById = async id => {
  const doc = await collection.doc(id).get();
  return {id: doc.id, ...doc.data()};
};

export const addFood = async data => {
  const docRef = await collection.add(data);
  const doc = await docRef.get();
  return {id: doc.id, ...doc.data()};
};

export const updateFood = async (id, data) => {
  await collection.doc(id).update(data);
  const updatedDoc = await collection.doc(id).get();
  return {id: updatedDoc.id, ...updatedDoc.data()};
};

export const deleteFood = async id => {
  await collection.doc(id).delete();
  return {id};
};
