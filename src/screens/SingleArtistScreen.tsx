import React from "react";
import styled from "styled-components";
import { View, FlatList } from "react-native";
import artist from "../data/artist";
import SongList from "../components/SongList";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import SongListHeader from "../components/SongListHeader";
import theme from "../components/theme";

const Box = styled(View)`
  background: ${theme.colors.white};
`;

const singleArtist = {
  artist,
};

const SingleArtistScreen = () => {
  const route = useRoute();
  useEffect(() => {
    console.log(route);
  }, []);
  // const count = route.params.id;

  const { artist } = singleArtist;

  return (
    <Box>
      <FlatList
        data={artist.songs}
        renderItem={({ item }) => <SongList song={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <SongListHeader artist={artist} />}
      />
    </Box>
  );
};

export default SingleArtistScreen;
