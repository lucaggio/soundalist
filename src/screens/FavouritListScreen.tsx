import React from "react";
import styled from "styled-components";
import CardBox from "../components/CardBox";
import { FlatList, Text, View } from "react-native";
import { Dimensions } from "react-native";
import theme from "../components/theme";
import artist from "../data/artist";
import SongList from "../components/SongList";
import { useSelector } from "react-redux";
import { favouriteSelector } from "../redux/favouriteReducer";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Title = styled(Text)`
  color: ${theme.colors.white};
  font-size: 25;
  margin: 10px 0 10px 0px;
  font-family: ${theme.fontFamily.medium};
  text-align: center;
  padding-top: 50;
`;
const Box = styled(View)`
flex:1;
background: ${theme.colors.black};
display:flex;
padding-top 50px;
`;
const FavouritList = () => {
  const favourite = useSelector(favouriteSelector);
  let stringJson = JSON.stringify(favourite);
  const parseJson = JSON.parse(stringJson);
  const newList = parseJson.favourites;
  const newFavourite = newList.reverse();

  if (newList[0] !== undefined) {
    return (
      <Box>
        <FlatList
          data={newFavourite}
          renderItem={({ item }) => <SongList song={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<Title>Brani Preferiti</Title>}
        />
      </Box>
    );
  } else {
    return (
      <Box>
        <Title>Dic funziona</Title>
      </Box>
    );
  }
};

export default FavouritList;
