import React from "react";
import styled from "styled-components";
import { Text, View, ScrollView } from "react-native";
import theme from "../components/theme";
import CardBox from "../components/CardBox";

export const ArtistTitle = styled(Text)`
  color: ${theme.colors.white};
  font-size: 40;
  text-align: center;
  margin: 60px 0 20px 0;
  font-family: ${theme.fontFamily.title};
`;

const Box = styled(View)`
flex:1;
background:${theme.colors.black};
padding-top 50px;
`;

const TechnoScreen = () => {
  return (
    <Box>
      <ScrollView>
        <ArtistTitle>TECHNO</ArtistTitle>
        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/techno/amelie.jpg")}
          text="Amelie Lens"
        ></CardBox>

        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/techno/nina.jpg")}
          text="Nina Kraviz"
        ></CardBox>

        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/techno/hawtin.jpg")}
          text="Richie Hawtin"
        ></CardBox>

        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/techno/charlotte.jpg")}
          text="Charlotte De Whitte"
        ></CardBox>

        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/techno/paganini.jpg")}
          text="Sam Paganini"
        ></CardBox>

        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/techno/carola.jpg")}
          text="MarcoCarola"
        ></CardBox>

        <CardBox
          navigate="TechnoScreen"
          image={require("../assets/images/techno/paul.jpg")}
          text="Paul Kalkbrenner"
        ></CardBox>
      </ScrollView>
    </Box>
  );
};

export default TechnoScreen;
