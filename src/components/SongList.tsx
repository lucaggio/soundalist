import React from "react";
import theme from "./theme";
import { Text, Image, View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Song } from "../../types";
import { useContext } from "react";
import { AppContext } from "../../appContext";

const Box = styled(View)`
  flex-direction: row
  padding: 5px 0px 5px 10px
  margin: 1px 0;
  background: ${theme.colors.totalBlack}ef
`;
const ColumnBox = styled(View)`
  flex-direction: column
  justify-content: space-around
  margin-left: 20
  width:70%
`;
const RoundImage = styled(Image)`
  width: 65
  height: 65
  border-radius: 100
  margin:2px 0;
`;
const Title = styled(Text)`
font-size:14
font-family: ${theme.fontFamily.regular}
color:${theme.colors.white}
`;
const Artist = styled(Text)`
font-family: ${theme.fontFamily.medium}
font-size:18
color:${theme.colors.white}
`;

interface SongListProps {
  song: Song;
}

const SongList = (props: SongListProps) => {
  const { song } = props;

  const { setSongId } = useContext(AppContext);

  const onPlay = () => {
    setSongId(song.id);
  };

  return (
    <TouchableOpacity onPress={onPlay}>
      <Box>
        <RoundImage source={{ uri: song.image }}></RoundImage>
        <ColumnBox>
          <Title>{song.genre}</Title>
          <Artist>{song.creator}</Artist>
        </ColumnBox>
      </Box>
    </TouchableOpacity>
  );
};

export default SongList;
