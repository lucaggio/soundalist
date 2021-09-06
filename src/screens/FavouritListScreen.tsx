import React from "react";
import styled from "styled-components";
import CardBox from "../components/CardBox";
import { FlatList, Text, View } from "react-native";
import { Dimensions } from "react-native";
import theme from "../components/theme";
import artist from "../data/artist";
import SongList from "../components/SongList";

const Title = styled(Text)`
  color: ${theme.colors.white};
  font-size: 25;
  margin: 10px 0 10px 0px;
  font-family: ${theme.fontFamily.medium};
  text-align: center;
`;
const Box = styled(View)`
flex:1;
background: ${theme.colors.black};
display:flex;
flex-direction:column;
justify-content:center;
padding-top 50px;
`;
const FavouritList = () => {
  return (
    <Box>
      <FlatList
        data={artist}
        renderItem={({ item }) => <SongList song={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Title>Brani Preferiti</Title>}
      />
    </Box>
  );
};

export default FavouritList;
