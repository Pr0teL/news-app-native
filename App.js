

import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Alert, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity} from 'react-native';
import React from 'react';
import Home from './screens/Home';
import FullPost from './screens/FullPost';

export default function App() {

   return (
      <View>
          <StatusBar style="auto" />
          <Home/>
          {/* <FullPost/> */}
      </View>
   )
}
