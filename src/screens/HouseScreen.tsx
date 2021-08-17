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

const HouseScreen = () => {
  return (
    <Box>
      <ScrollView>
        <ArtistTitle>TECHNO</ArtistTitle>
        <CardBox
          image={require("../assets/images/house/solomun.jpg")}
          text="Solomun"
        ></CardBox>

        <CardBox
          image={require("../assets/images/house/cox.jpg")}
          text="Carl Cox"
        ></CardBox>

        <CardBox
          image={require("../assets/images/house/villalobos.jpg")}
          text="Riccardo Villalobos"
        ></CardBox>

        <CardBox
          image={require("../assets/images/house/cox.jpg")}
          text="Jamie Jones"
        ></CardBox>

        <CardBox
          image={require("../assets/images/house/cox.jpg")}
          text="Fisher"
        ></CardBox>

        <CardBox
          image={require("../assets/images/house/cox.jpg")}
          text="Loco Dice"
        ></CardBox>

        <CardBox
          image={require("../assets/images/house/chris.jpg")}
          text="Chris Lake"
        ></CardBox>
      </ScrollView>
    </Box>
  );
};

export default HouseScreen;
