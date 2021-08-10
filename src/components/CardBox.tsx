import React from "react";
import { StyleSheet } from "react-native";
// import styled from 'styled-components'
import { View, Text, ImageBackground } from "react-native";

// const Card = styled(View)`
//   padding: 2em;
//   border: 1px solid;
//   background: red;
// `;

// const CardContent = styled(Text)`
//   color: #fff;
//   font-size: 2em;
// `;

interface IProps {
  text: string;
  image: any;
}

const CardBox = (props: IProps) => {
  return (
    <View>
      <ImageBackground
        source={props.image}
        resizeMode="cover"
        style={styles.container}
      >
        <Text>{props.text}</Text>
      </ImageBackground>
    </View>
  );
};

export default CardBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    resizeMode: "cover",
  },
});
