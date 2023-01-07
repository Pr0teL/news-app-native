

import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Alert, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity} from 'react-native';
import React from 'react';
import Home from './screens/Home';
import FullPost from './screens/FullPost';
import { Navigation } from './screens/Navigation';

export default function App() {

   return (
      <Navigation/>
   )
}
