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
      image:
        "https://media.resources.festicket.com/image/300x300/center/top/filters:quality(70)/www/artists/AmelieLens_New.jpg",
    },
    {
      id: "2",
      name: "Nina Kraviz",
      image: "../assets/images/techno/nina.jpg",
    },
    {
      id: "3",
      name: "Richie Hawtin",
      image: "../assets/images/techno/hawtin.jpg",
    },
    {
      id: "4",
      name: "Charlotte De White",
      image: "../assets/images/techno/charlotte.jpg",
    },
    {
      id: "5",
      name: "Sam Paganini",
      image: "../assets/images/techno/paganini.jpg",
    },
    {
      id: "6",
      name: "Marco Carola",
      image: "../assets/images/techno/carola.jpg",
    },
    {
      id: "7",
      name: "Paul Kalkbrenner",
      image: "../assets/images/techno/paul.jpg",
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
