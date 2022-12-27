import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';
import Post from './components/Post'

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
   justify-content: space-between
`;

const Title = styled.Text`
   font-size: 30px;
   font-weight: 500;
   margin-bottom: 3%;
`;

const Search = styled.TextInput`
   margin-bottom: 3%;
   border: 2px solid rgba(0,0,0,0.1);
   font-size: 22px;
   padding: 5px 10px;
   width: 200px;
   border-radius: 10px;
`;

export default function App() {
   return (
      <MainPage>
         <Header>
            <Title>IT NEWS</Title>
            <Search placeholder={"Поиск..."}/>
         </Header>
         <Post createdAt={"10.01.2023"} author={"Victor Botov"} title={"Более 30% IT-специалистов уехали из России или планируют релокацию"} imageUrl={"https://rsv.ru/blog/wp-content/uploads/2022/04/rear-view-of-programmer-working-all-night-long-918x516.jpg"}/>
         <StatusBar style="auto" />
      </MainPage>
   );
}


