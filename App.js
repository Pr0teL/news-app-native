import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import styled from 'styled-components/native';

const Title = styled.Text`
   font-size: 30px;
   font-weight: 500;
   margin-bottom: 3%;
`;

const MainPage = styled.View`
   padding-top: 10%;
   padding-left: 10px;
   padding-right: 10px;
   height: 100%;
   background-color: #f8f8f8;
`;

const Post = styled.View`
   
   background-color: #fff;
   height: 350px;
   width: 100%;
   border-radius: 16px;
   margin: 0 auto;
   padding: 5px;
   box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
`;

const PostCategory = styled.Text`
   background-color: ##3380EF;
   height: 20px;
   width: 30%;
   border-radius: 16px;
`;

const PostImage = styled.Image`
   background-color: gray;
   height: 200px;
   width: 100%;
   border: 1px solid rgba(0,0,0,0.1);
   border-radius: 16px;
   margin: 0 auto;
   margin-bottom: 10px;
`;

export default function App() {
  return (
    <MainPage>
      <Title>Hot News</Title>
      <Post>
        <PostImage source={{ uri: "https://newsinitiative.withgoogle.com/info/assets/static/images/news-youtube/hero-image-a0d28e8991ec7398d914388a83d78d56.jpg"}}>
        </PostImage>
        <Title style={{fontSize:"25px", marginLeft: "3%"}}>8 Steps To Help You Stop Overthinking Everything</Title>
      </Post>
      <StatusBar style="auto" />
    </MainPage>
  );
}


