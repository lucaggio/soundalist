import React, { useState } from "react";
import styled from "styled-components";
import { View, Text, FlatList } from "react-native";
import SongList from "../components/SongList";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import SongListHeader from "../components/SongListHeader";
import theme from "../components/theme";

import { API, graphqlOperation } from "aws-amplify";
import { getArtist } from "../graphql/queries";
import LinearGradientComponent from "../components/linearGradient";
import { useSelector } from "react-redux";
import { playerWidgetSelector } from "../redux/playerWidgetReducer";

const Box = styled(View)`
  background: ${theme.colors.black};
`;
const BoxSpace = styled(View)`
  background: ${theme.colors.black};
  margin.bottom: 72;
`;

const SingleArtistScreen = () => {
  const route = useRoute();
  const artistId = route.params.id;

  const widgetSelector = useSelector(playerWidgetSelector);
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const data = await API.graphql(
          graphqlOperation(getArtist, { id: artistId })
        );
        setArtist(data.data.getArtist);
      } catch (e) {
        console.log(e);
      }
    };
    fetchArtistDetails();
  }, []);
  if (!artist) {
    return <Text> Loading...</Text>;
  } else {
    if (widgetSelector.existing) {
      return (
        <BoxSpace>
          <LinearGradientComponent type={artist.artistCategory.title} />
          <FlatList
            data={artist.songs.items}
            renderItem={({ item }) => <SongList song={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <SongListHeader artist={artist} />}
          />
        </BoxSpace>
      );
    } else {
      return (
        <Box>
          <LinearGradientComponent type={artist.artistCategory.title} />
          <FlatList
            data={artist.songs.items}
            renderItem={({ item }) => <SongList song={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <SongListHeader artist={artist} />}
          />
        </Box>
      );
    }
  }
};

export default SingleArtistScreen;
