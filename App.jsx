import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';

const App = () => {
  //Ganti ke <AboutScreen /> jika ingin melihat halaman about
  //Ganti ke <HomeScreen /> jika ingin melihat halaman home
  //Ganti ke <FavoriteScreen /> jika ingin melihat halaman favorite

  return <FavoriteScreen />;
};
export default App;
