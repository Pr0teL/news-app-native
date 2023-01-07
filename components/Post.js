import { Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';

const Title = styled.Text`
   font-size: 30px;
   font-weight: 500;
   margin-bottom: 2%;
`;


const PostView = styled.View`
   
   background-color: #fff;
   height: 350px;
   width: 100%;
   border-radius: 16px;
   margin: 0 auto;
   margin-bottom: 3%;
   padding: 5px;
   box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
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

const cutTitle = (str) => {
    return str.length > 75 ? str.substring(0, 75) + '...' : str
}

const Post = ({ title, imageUrl, createdAt, author, top = true }) => {
    return (<PostView>
        <PostImage source={{ uri: imageUrl }}>
        </PostImage>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: "2%", paddingRight: "2%", marginBottom: "2%" }}>
            <Text style={{ color: "rgba(0,0,0,0.3)" }}>{top ? "🔥 Top news" : "Daily"}</Text>
            <Text style={{ color: "rgba(0,0,0,0.3)" }}>{createdAt}</Text>
        </View>
        <Title style={{ fontSize: "18px", marginLeft: "3%" }}>{cutTitle(title)}</Title>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: "2%", paddingRight: "2%", alignItems: "center" }}>
            <Text style={{ fontSize: "13px", fontWeight: "400" }}>{author}</Text>
            <Text style={{ color: "rgba(0,0,0,0.3)", fontSize: "33px", fontWeight: "600", marginBottom: "4%" }}>...</Text>
        </View>
    </PostView>)
}

export default Post
