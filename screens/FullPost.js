import React from "react";
import styled from "styled-components/native";
import axios from 'axios';
import { ScrollView, Text, View, ActivityIndicator } from 'react-native'


const FullPostImage = styled.Image`
   background-color: gray;
   width: 100%;
   border: 1px solid rgba(0,0,0,0.1);
   margin: 0 auto;
   z-index: 1;
   position: absolute;
`;
const FullPostDescr = styled.View`
   border-radius: 20px;
   background-color: #fff;
   padding: 15px;
   height: 90%;
   top: 32%;
   z-index: 2;
   background-position: center;
`;



export default function FullPost({route}) {
    const [loading, setLoading] = React.useState(true)
    const [data, setData] = React.useState([])
    console.log(route);
    React.useEffect(() => {
        setLoading(true)
        axios.get('https://63accbc034c46cd7ae8a1f69.mockapi.io/posts/' + route.params.id)
            .then(({ data }) => {
                setData(data)
            }).catch(err => {
                console.log(err)
                Alert.alert('Ошибка', 'Не удалось получить данные с сервера')
            }).finally(() => {
                setLoading(false)
            })
    }, [])
    return (
        <View>
           {loading ? 
         <View style={{height: "80%", justifyContent: "center"}}>
         <ActivityIndicator size="large" />
        </View> : <>
                <FullPostImage source={{ uri: data.imageUrl }} style={{ height: "35%" }} />
                <FullPostDescr>
                    <ScrollView style={{ height: "100%" }}>
                        <Text style={{ fontSize: "22px", fontWeight: "700", marginBottom: "6%" }}>{data.title}</Text>
                        <Text style={{ fontSize: "17px" }}>{data.text}</Text>
                    </ScrollView>
                </FullPostDescr>
            </>}
        </View>
    )
}