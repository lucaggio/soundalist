import { combineReducers } from "redux";
import { IFavourite } from "./favouriteActions";
import favouriteReducer from "./favouriteReducer";

export interface IStateMain {
  favouriteSongs: string;
}
const rootReducer = combineReducers({
  favouriteSongs: favouriteReducer,
});

export default rootReducer;
