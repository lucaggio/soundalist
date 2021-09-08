import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import theme from "./theme";
import { StyleSheet } from "react-native";

interface IcolorTipe {
  type: string;
}
const LinearGradientComponent = (props: IcolorTipe) => {
  const color = () => {
    switch (props.type) {
      case "TECHNO" || "Techno":
        return `${theme.colors.pink}`;
      case "HOUSE" || "House":
        return `${theme.colors.red}`;
      case "AMBIENT" || "Ambient":
        return `${theme.colors.green}`;
    }
  };
  return (
    <>
      <LinearGradient
        colors={[`${theme.colors.black}`, `${color()}`]}
        start={[1, 0.9]}
        end={[4, 0]}
        style={styles.backgroundTop}
      />
      <LinearGradient
        colors={[`${theme.colors.blue}`, "transparent", "transparent"]}
        start={[-0.5, 1]}
        end={[1, 0.5]}
        style={styles.backgroundBottom}
      />
    </>
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
  backgroundBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
});
export default LinearGradientComponent;
