import React, { useState } from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import theme from "../../components/theme";

import { API, graphqlOperation } from "aws-amplify";
import { listArtistCategories } from "../../graphql/queries";

import ArtistCategory from "../../components/ArtistCategory/ArtistCategory";
import { useEffect } from "react";

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

interface categoryTypeProps {
  type: String;
}

const CategoryType = (props: categoryTypeProps) => {
  const [index, setIndex] = useState<number>(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const createIndex = () => {
      if (props.type === "techno") {
        setIndex(2);
      }
      if (props.type === "house") {
        setIndex(1);
      }
      if (props.type === "ambient") {
        setIndex(0);
      }
    };
    createIndex();
  }, []);

  useEffect(() => {
    const fetchArtistCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listArtistCategories));
        setCategories(data.data.listArtistCategories.items);
        console.log(categories[2].artist.items[1]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchArtistCategories();
  }, []);

  const isCategory = categories[index];

  if (!isCategory) {
    return null;
  }
  if (isCategory) {
    return (
      <Box>
        <ArtistCategory
          title={isCategory.title}
          artist={isCategory.artist.items}
        />
      </Box>
    );
  }
  return null;
};

export default CategoryType;
