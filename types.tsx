/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Preferiti: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
  TechnoScreen: undefined;
  HouseScreen: undefined;
  AmbientScreen: undefined;
  SingleArtistScreen: undefined;
};

export type TabTwoParamList = {
  YourListScreen: undefined;
};

export type Song = {
  id: string;
  image: string;
  genre: string;
  creator: string;
};

export type Artist = {
  id: string;
  name: string;
  image: any;
};
