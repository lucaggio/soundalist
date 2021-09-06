import React, { useState, useEffect, useContext } from "react";
import theme from "./theme";
import { Text, ImageBackground, View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Song } from "../../types";
import RollingText from "react-native-rolling-text";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio/Sound";

import { AppContext } from "../../appContext";
import { API, graphqlOperation } from "aws-amplify";
import { getSong } from "../graphql/queries";

const Box = styled(View)`
  position:absolute
  bottom:54
  width:100%
  background: ${theme.colors.black}fc
`;
const ProgressBar = styled(View)`
  height:2
  background: ${theme.colors.white}
`;

const RowBox = styled(View)`
  padding: 3px 0 3px 10px
  flex-direction: row;
`;

const RoundImage = styled(ImageBackground)`
  width: 60
  height: 60
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
  uri: "https://soundalistdata.s3.eu-central-1.amazonaws.com/techno/sounds/amelie/Airod+%26+Amelie+Lens+-+Adrenaline.mp3",
  image:
    "https://soundalistdata.s3.eu-central-1.amazonaws.com/techno/images/amelie.jpg",
  genre: "Techno",
  creator: "In Silence - Amelie Lens",
};

const PlayerWidget = () => {
  const [song, setSong] = useState(null);
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const { songId } = useContext(AppContext);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const data = await API.graphql(
          graphqlOperation(getSong, { id: songId })
        );
        console.log(data);
        setSong(data.data.getSong);
      } catch (e) {
        console.log(e);
      }
    };

    fetchSong();
  }, [songId]);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
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
    if (song) {
      playCurrentSong();
    }
  }, [song]);

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

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }
    return (position / duration) * 100;
  };

  if (!song) {
    return null;
  }
  if (song) {
    return (
      <Box>
        <ProgressBar style={{ width: `${getProgress()}%` }} />
        <RowBox>
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
                <Artist>{song.creator}</Artist>
              </RollingText>
              <Title>{song.genre}</Title>
            </ColumnBox>
            <IconBox>
              <AntDesign name="hearto" size={24} color={theme.colors.white} />
            </IconBox>
          </RightBox>
        </RowBox>
      </Box>
    );
  }
  return null;
};

export default PlayerWidget;
