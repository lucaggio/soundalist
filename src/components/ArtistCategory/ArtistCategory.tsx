import React from "react";
import styled from "styled-components";
import theme from "./../theme";
import { Text, View, FlatList } from "react-native";
import { Artist } from "../../../types";
import CardArtist from "./../CardArtist";
import { StyleSheet } from "react-native";

const Title = styled(Text)`
  color: ${theme.colors.white};
  font-size: 40;
  text-align: center;
  margin: 30px 0 20px 0;
  font-family: ${theme.fontFamily.title};
`;
const Box = styled(View)`
padding-top 50px;
`;
const ArtistList = styled(FlatList)`
  margin: 10 0;
`;

interface CategoryProps {
  title: string;
  artist: Artist[];
}

const ArtistCategory = (props: CategoryProps) => {
  return (
    <Box>
      <Title>{props.title}</Title>
      <FlatList
        style={styles.list}
        data={props.artist}
        renderItem={({ item }) => <CardArtist artist={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    marginBottom: 100,
  },
});

export default ArtistCategory;
