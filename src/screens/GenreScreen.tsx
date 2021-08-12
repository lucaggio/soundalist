import React from "react";
import styled from "styled-components";
import CardBox from "../components/CardBox";
import { Text, View } from "react-native";
import { Dimensions } from "react-native";
import theme from "../components/theme";

const height = Dimensions.get("window").height;

const Title = styled(Text)`
  color: white;
  font-size: 15;
  margin: 0 0 20px 10px;
  font-family: ${theme.fontFamily.regular};
`;
const Box = styled(View)`
flex:1;
background: #222;
display:flex;
flex-direction:column;
justify-content:center;
padding-top 50px;
`;
const GenreScreen = () => {
  return (
    <Box>
      <Title>Cosa vuoi ascoltare oggi? </Title>
      <CardBox
        image={require("../assets/images/techno.jpg")}
        text="TECHNO"
      ></CardBox>
      <CardBox
        image={require("../assets/images/house.jpg")}
        text="HOUSE"
      ></CardBox>
      <CardBox
        image={require("../assets/images/ambient.jpg")}
        text="AMBIENT"
      ></CardBox>
    </Box>
  );
};

export default GenreScreen;
