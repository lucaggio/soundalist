import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";
import { Artist } from "../../types";
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import theme from "./theme";

const Card = styled(View)`
  display: flex;
  margin: 5px 10px;
  height: 180px;
  border-radius: 10;
`;

const Box = styled(View)`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContent = styled(Text)`
  color: #fff;
  font-size: ${(props) => props.theme.size};
  text-align: center;
  font-family: ${(props) => props.theme.font};
`;

CardContent.defaultProps = {
  theme: {
    font: `${theme.fontFamily.regular}`,
    size: 50,
  },
};

interface ArtistsProps {
  artist: Artist;
}

const CardArtist = (props: ArtistsProps) => {

  const navigation = useNavigation()

  const onPress = () =>{
    navigation.navigate('SingleArtistScreen', {id: props.artist.id})
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <Card>    
      <ImageBackground
        source={{ uri: props.artist.image }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 10 }}
        style={styles.container}
      >
        <Box>
          <CardContent>{props.artist.name}</CardContent>
        </Box>
      </ImageBackground>      
    </Card>
    </TouchableWithoutFeedback>
  );
};

export default CardArtist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
