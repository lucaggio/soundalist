import React from "react";
import { initialState, IState } from "./src/redux/favouriteReducer";

const context = {
  songId: null,
  setSongId: (id: string) => {},
};

export const Store = React.createContext<IState | any>(initialState);

export const AppContext = React.createContext(context);
