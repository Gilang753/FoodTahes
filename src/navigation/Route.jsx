import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home, Heart, AddCircle, Setting2} from 'iconsax-react-native';
import { FavoriteProvider } from '../context/FavoriteContext';

// Import semua screen
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import AddFoodScreen from '../screens/AddFoodScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import FoodDetailScreen from '../screens/FoodDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#A0A0A0',
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 4,
        },
        tabBarIcon: ({color, size}) => {
          switch (route.name) {
            case 'Home':
              return <Home color={color} size={size} variant="Bold" />;
            case 'Favorite':
              return <Heart color={color} size={size} variant="Bold" />;
            case 'Add':
              return <AddCircle color={color} size={size} variant="Bold" />;
            case 'Settings':
              return <Setting2 color={color} size={size} variant="Bold" />;
            default:
              return null;
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: 'Beranda'}}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{tabBarLabel: 'Favorit'}}
      />
      <Tab.Screen
        name="Add"
        component={AddFoodScreen}
        options={{tabBarLabel: 'Tambah'}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{tabBarLabel: 'Pengaturan'}}
      />
    </Tab.Navigator>
  );
};

const Route = () => {
  return (
    <FavoriteProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainTabs" component={BottomTabs} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="FoodDetail" component={FoodDetailScreen} options={{ title: 'Detail Makanan' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </FavoriteProvider>
    
  );
};

export default Route;
