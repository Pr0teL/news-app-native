import React from "react";
import styled from "styled-components/native";
import { Text, View } from 'react-native'

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
   height: 80%;
   margin-top: 80%;
   z-index: 2;
   background-position: center;
`;

export default function FullPost() {
    return (
        <View>
            <FullPostImage source={{ uri: "https://habrastorage.org/getpro/habr/upload_files/1f2/3c1/db4/1f23c1db49915e05648bffb7eeebdadd.webp" }} style={{ height: "33%" }}/>
            <FullPostDescr>
                <Text style={{fontSize: "22px", fontWeight: "700" , marginBottom: "6%"}}>Президент Казахстана подписал закон о введении дифференцированных ставок налога на цифровой майнинг</Text>
                <Text style={{fontSize: "17px"}}>Президент Казахстана Касым-Жомарт Токаев подписал законопроект с поправками в налоговое законодательство, среди которых указано введение дифференцированных ставок налога на цифровой майнинг, передаёт ТАСС со ссылкой на пресс-службу президента. Это предусматривает повышение налога на майнинг при использовании дешёвой электроэнергии, что необходимо для распределения нагрузки и снижения потребления электроэнергии. При этом ставка снижается в случае, если энергия добыта из возобновляемых источников.</Text>
            </FullPostDescr>
        </View>
    )
}