import React from "react";
import { View, FlatList } from "react-native";
import artist from "../data/artist";
import SongList from "../components/SongList";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";

const singleArtist = {
  artist,
};

const SingleArtistScreen = () => {
  const route = useRoute();
  useEffect(() => {
    console.log(route);
  }, []);
  const count = route.params.id;

  return (
    <View>
      <FlatList
        data={artist[count - 1].songs}
        renderItem={({ item }) => <SongList song={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SingleArtistScreen;
