import React from "react";
import styled from "styled-components";
import CardBox from "../components/CardBox";
import { FlatList, Text, View } from "react-native";
import { Dimensions } from "react-native";
import theme from "../components/theme";
import SongList from "../components/SongList";
import { useSelector } from "react-redux";
import { favouriteSelector } from "../redux/favouriteReducer";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { playerWidgetSelector } from "../redux/playerWidgetReducer";
import SpaceWidget from "../components/spaceWidget";

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

  const widgetSelector = useSelector(playerWidgetSelector);

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
        <SpaceWidget />
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
