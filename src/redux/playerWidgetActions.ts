import { IS_WIDGET } from "./config";

export const isWidgetExixting = () => {
  return {
    type: IS_WIDGET,
    payload: true,
  };
};
