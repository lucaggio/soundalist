import React from "react";
import { useSelector } from "react-redux";

import CategoryType from "../components/ArtistCategory";
import SpaceWidget from "../components/spaceWidget";
import { playerWidgetSelector } from "../redux/playerWidgetReducer";

const AmbientScreen = () => {
  const widgetSelector = useSelector(playerWidgetSelector);
  if (widgetSelector.existing) {
    return (
      <>
        <CategoryType type="ambient" />
        <SpaceWidget />
      </>
    );
  } else {
    return <CategoryType type="ambient" />;
  }
};

export default AmbientScreen;
