import { combineReducers } from "redux";
import favouriteReducer from "./favouriteReducer";
import playerWidgetReducer from "./playerWidgetReducer";

export interface IStateMain {
  favouriteSongs: string;
  isWidgetExisting: boolean;
}
const rootReducer = combineReducers({
  favouriteSongs: favouriteReducer,
  isWidgetExisting: playerWidgetReducer,
});

export default rootReducer;
