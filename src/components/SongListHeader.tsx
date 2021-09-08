import React from "react";
import styled from "styled-components";
import { View, Text, Image, TouchableOpacity } from "react-native";
import theme from "./theme";
import { Artist } from "../../types";

const Box = styled(View)`
  padding-top: 65;
  justify-content: center;
  align-items: center;
`;
const ArtistImage = styled(Image)`
height:160
width:160
border-radius: 100

`;
const Title = styled(Text)`
position:absolute
top:170
font-size:35
  color: ${theme.colors.white};
  font-family: ${theme.fontFamily.regular}
`;
const PlayButton = styled(View)`
height:40
width:150
justify-content: center;
align-items: center;
border-radius:100
background:#000
border: 1px solid ${theme.colors.pink}
margin: 30px 0 25px 0

`;
const ButtonText = styled(Text)`
  color: ${theme.colors.white};
  font-size: 20;
  font-family: ${theme.fontFamily.regular};
`;

interface SongListHeaderProps {
  artist: Artist;
}

const SongListHeader = (props: SongListHeaderProps) => {
  const { artist } = props;
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <ArtistImage source={{ uri: artist.image }} />
        <Title>{artist.name}</Title>
        <TouchableOpacity>
          <PlayButton>
            <ButtonText>PLAY</ButtonText>
          </PlayButton>
        </TouchableOpacity>
      </Box>
    </View>
  );
};

export default SongListHeader;
