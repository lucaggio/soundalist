import React, { useState } from "react";
import { useSelector } from "react-redux";

import CategoryType from "../components/ArtistCategory";
import SpaceWidget from "../components/spaceWidget";
import { playerWidgetSelector } from "../redux/playerWidgetReducer";

const TechnoScreen = () => {
  const widgetSelector = useSelector(playerWidgetSelector);
  if (widgetSelector.existing) {
    return (
      <>
        <CategoryType type="techno" />
        <SpaceWidget />
      </>
    );
  } else {
    return <CategoryType type="techno" />;
  }
};

export default TechnoScreen;
