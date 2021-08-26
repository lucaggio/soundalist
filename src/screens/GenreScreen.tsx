import React from "react";
import styled from "styled-components";
import CardBox from "../components/CardBox";
import { Text, View } from "react-native";
import { Dimensions } from "react-native";
import theme from "../components/theme";

import { useNavigation } from "@react-navigation/native";
import TechnoScreen from "./TechnoScreen";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Title = styled(Text)`
  color: ${theme.colors.white};
  font-size: 15;
  margin: 0 0 20px 10px;
  font-family: ${theme.fontFamily.regular};
`;
const Box = styled(View)`
flex:1;
background: ${theme.colors.black};
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
        navigate="TechnoScreen"
        image={require("../assets/images/techno.jpg")}
        text="TECHNO"
      ></CardBox>

      <CardBox
        navigate="HouseScreen"
        image={require("../assets/images/house.jpg")}
        text="HOUSE"
      ></CardBox>

      <CardBox
        navigate="AmbientScreen"
        image={require("../assets/images/ambient.jpg")}
        text="AMBIENT"
      ></CardBox>
    </Box>
  );
};

export default GenreScreen;
