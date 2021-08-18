import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";
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

interface IProps {
  navigate: string;
  text: string;
  image: any;
}

const CardBox = (props: IProps) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(`${props.navigate}`);
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Card>
        <ImageBackground
          source={props.image}
          resizeMode="cover"
          imageStyle={{ borderRadius: 10 }}
          style={styles.container}
        >
          <Box>
            <CardContent>{props.text}</CardContent>
          </Box>
        </ImageBackground>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default CardBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
