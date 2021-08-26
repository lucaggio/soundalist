import React from "react";
import styled from "styled-components";
import { Text, View, ScrollView } from "react-native";
import theme from "../components/theme";
import CardBox from "../components/CardBox";
import { ArtistTitle } from "./TechnoScreen";

const Box = styled(View)`
flex:1;
background:${theme.colors.black};
padding-top 50px;
`;

const AmbientScreen = () => {
  return (
    <Box>
      <ScrollView>
        <ArtistTitle>TECHNO</ArtistTitle>
        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/ambient/carbon.jpg")}
          text="Carbon Based Lifeforms"
        ></CardBox>

        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/ambient/solar.jpg")}
          text="Solar Fields"
        ></CardBox>

        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/ambient/kiasmos.jpg")}
          text="Kiasmos"
        ></CardBox>

        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/ambient/nicolas.jpg")}
          text="Nicolas Jaar"
        ></CardBox>

        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/ambient/max.jpg")}
          text="Max Cooper"
        ></CardBox>

        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/ambient/aparde.jpg")}
          text="Aparde"
        ></CardBox>

        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/ambient/teebs.jpg")}
          text="Teebs"
        ></CardBox>
      </ScrollView>
    </Box>
  );
};

export default AmbientScreen;
