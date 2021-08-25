import React, { useState, useEffect } from "react";
import theme from "./theme";
import { Text, ImageBackground, View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Song } from "../../types";
import RollingText from "react-native-rolling-text";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio/Sound";

const Box = styled(View)`
position:absolute
bottom:49
  flex-direction: row
  padding: 5px 0 5px 10px
  width:100%
  background: ${theme.colors.black}fc
`;

const RoundImage = styled(ImageBackground)`
  width: 65
  height: 65
  border-radius: 100
  margin:2px 20px 2px 0;
  justify-content:center
  align-items:center
`;
const RightBox = styled(View)`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;
const ColumnBox = styled(View)`
  flex-direction: column
  justify-content: space-around
  align-items:center
  width:220
  max-width:220
  overflow:hidden
`;
const Title = styled(Text)`
font-size:14
font-family: ${theme.fontFamily.regular}
color:${theme.colors.white}
`;
const Artist = styled(Text)`
font-family: ${theme.fontFamily.medium}
font-size:15
color:${theme.colors.white}
`;

const IconBox = styled(View)`
margin-right:25
justify-content:center
align-items:center
`;

const song = {
  id: "1",
  uri: "http://educational.utego.it/wp-content/uploads/2021/04/consumatori_570.mp3",
  image:
    "https://media.resources.festicket.com/image/300x300/center/top/filters:quality(70)/www/artists/AmelieLens_New.jpg",
  genre: "Techno",
  artist: "In Silence - Amelie Lens",
};

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    console.log(status);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };

  useEffect(() => {
    playCurrentSong();
  }, []);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  return (
    <Box>
      <RoundImage
        imageStyle={{ borderRadius: 100 }}
        source={{ uri: song.image }}
      >
        <TouchableOpacity onPress={onPlayPausePress}>
          <FontAwesome
            name={isPlaying ? "pause" : "play"}
            size={30}
            color={theme.colors.white}
          />
        </TouchableOpacity>
      </RoundImage>

      <RightBox>
        <ColumnBox>
          <RollingText durationMsPerWidth={15}>
            <Artist>{song.artist}</Artist>
          </RollingText>
          <Title>{song.genre}</Title>
        </ColumnBox>
        <IconBox>
          <AntDesign name="hearto" size={24} color={theme.colors.white} />
        </IconBox>
      </RightBox>
    </Box>
  );
};

export default PlayerWidget;
