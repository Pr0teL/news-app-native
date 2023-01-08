import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Alert, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Post from '../components/Post';
import axios from 'axios';
import React from 'react';

const MainPage = styled.View`
   padding-top: 13%;
   padding-left: 10px;
   padding-right: 10px;
   height: 100%;
   background-color: #f8f8f8;
`;

const Header = styled.View`
   width: 100%;
   margin: 0 auto;
   margin-bottom: 10px;
   align-items: center;
   flex-direction: row;
   justify-content: space-between,
`;

const Title = styled.Text`
   font-size: 20px;
   font-weight: 500;
`;

const Search = styled.TextInput`
   margin-bottom: 3%;
   border: 2px solid rgba(0,0,0,0.1);
   font-size: 22px;
   padding: 5px 10px;
   width: 200px;
   border-radius: 10px;
`;

export default function Home({ navigation }) {
   const [items, setItems] = React.useState()
   const [loading, setLoading] = React.useState(true)
   const fetchPosts = () => {
      setLoading(true)
      axios.get('https://63accbc034c46cd7ae8a1f69.mockapi.io/posts')
         .then(({ data }) => {
            setItems(data)
         }).catch(err => {
            console.log(err)
            Alert.alert('Ошибка', 'Не удалось получить данные с сервера')
         }).finally(() => {
            setLoading(false)
         })
   }

   React.useEffect(() => {
      fetchPosts()
   }, [])

   return (
      <MainPage>
         <Header style={{ justifyContent: "center" }}>
            <Title>IT NEWS</Title>
            {/* <Search placeholder={"Поиск..."} /> */}
         </Header>
         {loading ?
            <View style={{ height: "80%", justifyContent: "center" }}>
               <ActivityIndicator size="large" />
            </View> :
            <FlatList
               showsVerticalScrollIndicator={false}
               refreshControl={<RefreshControl
                  refreshing={loading}
                  onRefresh={() => fetchPosts()}
               />}
               data={items}
               renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('Post', { id: item.id })}>
                  <Post
                     createdAt={item.createdAt}
                     author={item.author}
                     title={item.title}
                     imageUrl={item.imageUrl} />
               </TouchableOpacity>}
            />}
         <StatusBar style="auto" />
      </MainPage>
   );
}
