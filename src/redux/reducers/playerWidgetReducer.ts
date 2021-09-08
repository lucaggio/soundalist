import { AnyAction } from "redux";
import { IS_WIDGET } from "../config";
import { IStateMain } from "../rootReducer";

interface IState {
  existing: boolean;
}

const initialState: IState = {
  existing: false,
};

function playerWidgetReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case IS_WIDGET:
      return {
        ...state,
        existing: action.payload,
      };
    default:
      return state;
  }
}

export const playerWidgetSelector = (state: IStateMain) =>
  state.isWidgetExisting;

export default playerWidgetReducer;
