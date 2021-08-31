import React from "react";
import styled from "styled-components";
import { Text, View, ScrollView } from "react-native";
import theme from "../components/theme";
import CardBox from "../components/CardBox";
import CardArtist from "../components/CardArtist";
import ArtistCategory from "../components/ArtistCategory";

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

const artistCategory = {
  id: "1",
  title: "TECHNO",
  artist: [
    {
      id: "1",
      name: "Amelie Lens",
      image: "https://i.ibb.co/FVK1Txb/amelie.jpg",
    },
    {
      id: "2",
      name: "Nina Kraviz",
      image: "https://i.ibb.co/SXCSDwT/nina.jpg",
    },
    {
      id: "3",
      name: "Richie Hawtin",
      image: "https://i.ibb.co/Sm7cXgm/hawtin.jpg",
    },
    {
      id: "4",
      name: "Charlotte De White",
      image: "https://i.ibb.co/Gv525bM/charlotte.jpg",
    },
    {
      id: "5",
      name: "Sam Paganini",
      image: "https://i.ibb.co/m5vLWQR/paganini.jpg",
    },
    {
      id: "6",
      name: "Marco Carola",
      image: "https://i.ibb.co/wYScgG7/carola.jpg",
    },
    {
      id: "7",
      name: "Paul Kalkbrenner",
      image: "https://i.ibb.co/hDrsXjR/paul.jpg",
    },
  ],
};
const TechnoScreen = () => {
  return (
    <Box>
      <ArtistCategory
        title={artistCategory.title}
        artist={artistCategory.artist}
      />
    </Box>
  );

  // return (
  //   <Box>
  //     <ScrollView>
  //       <ArtistTitle>TECHNO</ArtistTitle>
  //       <CardBox
  //         navigate="SingleArtistScreen"
  //         image={require("../assets/images/techno/amelie.jpg")}
  //         text="Amelie Lens"
  //       ></CardBox>

  //       <CardBox
  //         navigate="TechnoScreen"
  //         image={require("../assets/images/techno/nina.jpg")}
  //         text="Nina Kraviz"
  //       ></CardBox>

  //       <CardBox
  //         navigate="TechnoScreen"
  //         image={require("../assets/images/techno/hawtin.jpg")}
  //         text="Richie Hawtin"
  //       ></CardBox>

  //       <CardBox
  //         navigate="TechnoScreen"
  //         image={require("../assets/images/techno/charlotte.jpg")}
  //         text="Charlotte De Whitte"
  //       ></CardBox>

  //       <CardBox
  //         navigate="TechnoScreen"
  //         image={require("../assets/images/techno/paganini.jpg")}
  //         text="Sam Paganini"
  //       ></CardBox>

  //       <CardBox
  //         navigate="TechnoScreen"
  //         image={require("../assets/images/techno/carola.jpg")}
  //         text="MarcoCarola"
  //       ></CardBox>

  //       <CardBox
  //         navigate="TechnoScreen"
  //         image={require("../assets/images/techno/paul.jpg")}
  //         text="Paul Kalkbrenner"
  //       ></CardBox>
  //     </ScrollView>
  //   </Box>
  // );
};

export default TechnoScreen;
