import React from "react";
import styled from "styled-components";
import CardBox from "../components/CardBox";
import { Text, View, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import theme from "../components/theme";

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";
import TechnoScreen from "./TechnoScreen";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Title = styled(Text)`
  color: ${theme.colors.white};
  text-align:center
  font-size: 10;
  margin: 0 0 5px 10px;
  font-family: ${theme.fontFamily.regular};
`;
const Box = styled(View)`
  flex: 1;
  background: ${theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GenreScreen = () => {
  return (
    <Box>
      <LinearGradient
        colors={[`${theme.colors.black}`, `${theme.colors.pink}`]}
        start={[1, 0.9]}
        end={[4, 0]}
        style={styles.backgroundTop}
      />
      <LinearGradient
        colors={[`${theme.colors.green}`, "transparent"]}
        start={[4, 3]}
        end={[0, 1]}
        style={styles.backgroundBottomGreen}
      />
      <LinearGradient
        colors={[`${theme.colors.blue}`, "transparent", "transparent"]}
        start={[-0.5, 1]}
        end={[1, 0.5]}
        style={styles.backgroundBottomBlue}
      />

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

const styles = StyleSheet.create({
  backgroundTop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  backgroundBottomGreen: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  backgroundBottomBlue: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
});

export default GenreScreen;
