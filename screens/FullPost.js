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
   opacity: 0.7;
`;
const FullPostDescr = styled.View`
   border-radius: 20px;
   background-color: #fff;
   padding: 15px;
   margin-top: 35%;
   min-height: 100%;
   z-index: 2;
`;



export default function FullPost({route}) {
    const [loading, setLoading] = React.useState(true)
    const [data, setData] = React.useState([])
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
        <ScrollView style={{ height: "100%"}}>
                <View style={{ height: "30%", position: "absolute", width:"100%", backgroundColor: "#000"}}>
                <FullPostImage source={{ uri: data.imageUrl }} style={{ height: "100%" }} />
                </View>
                <FullPostDescr>
                        <Text style={{ fontSize: "22px", fontWeight: "700", marginBottom: "6%" }}>{data.title}</Text>
                        <Text style={{ fontSize: "17px", marginBottom: "10%"}}>{data.text}</Text>
                        <View style={{marginBottom: "2%", flexDirection: 'row', backgroundColor: "#2192FF", padding: "2%", width: "51%", borderRadius: "10px"}}>
                        <Text style={{ fontSize: "14px", fontWeight: "600", color: "#FFF", }}>{data.author} /</Text>
                        <Text style={{ fontSize: "14px", color: "#FFF",}}> {new Date(data.createdAt).toLocaleDateString()}</Text>
                        </View>
                </FullPostDescr>
                </ScrollView>
            </>}
        </View>
    )
}