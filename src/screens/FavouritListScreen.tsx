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
  const favourite = useSelector(favouriteSelector);
  const list = JSON.stringify(favourite);
  const newList = JSON.parse(list);
  const newFavourite = newList.favourites;

  if (newFavourite[0] !== undefined) {
    return (
      <>
        <TouchableWithoutFeedback onPress={() => console.log(newFavourite)}>
          <Title>FFFFFFFFFFFFFFFFFFFff</Title>
        </TouchableWithoutFeedback>
        <Box>
          <FlatList
            data={newFavourite}
            renderItem={({ item }) => <SongList song={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<Title>Brani Preferiti</Title>}
          />
        </Box>
      </>
    );
  } else {
    return <Title>Dic funziona</Title>;
  }
};

export default FavouritList;
