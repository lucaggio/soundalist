import { AnyAction } from "redux";
import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "./config";
import { IFavourite } from "./favouriteActions";
import { IStateMain } from "./rootReducer";

export interface IState {
  favourites: Array<IFavourite>;
}
export const initialState: IState = {
  favourites: [],
};

function favouriteReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(
          (favourites) => favourites.id !== action.payload
        ),
      };
    default:
      return state;
  }
}

export const favouriteSelector = (state: IStateMain) => state.favouriteSongs;

export default favouriteReducer;
