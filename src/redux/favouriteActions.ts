import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "./config";

export interface IFavourite {
  id: string;
  uri: string;
  image: string;
  genre: string;
  creator: string;
}

export const addFavourite = (favourite: IFavourite) => {
  return {
    type: ADD_FAVOURITE,
    payload: favourite,
  };
};

export const removeFavourite = (id: string) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: id,
  };
};
