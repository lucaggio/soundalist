import * as Font from "expo-font";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import GenreScreen from "./src/screens/GenreScreen";
import TechnoScreen from "./src/screens/TechnoScreen";
import HouseScreen from "./src/screens/HouseScreen";
import AmbientScreen from "./src/screens/AmbientScreen";
import PlayerWidget from "./src/components/PlayerWidget";

import { AppContext } from "./appContext";

import Amplify from "aws-amplify";
import config from "./src/aws-exports";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";
Amplify.configure(config);

const Stack = createStackNavigator();

export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    (async () => {
      // Fonts
      await Font.loadAsync({
        "alternates-light": require("./src/assets/fonts/alternates/light.ttf"),
        "alternates-regular": require("./src/assets/fonts/alternates/regular.ttf"),
        "alternates-medium": require("./src/assets/fonts/alternates/medium.ttf"),
        "alternates-bold": require("./src/assets/fonts/alternates/bold.ttf"),

        "audiowide-regular": require("./src/assets/fonts/audiowide/audiowide-regular.ttf"),
      });
      setAppReady(true);
    })();
  }, []);
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  const [songId, setSongId] = useState<string | null>(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <AppContext.Provider
            value={{
              songId,
              setSongId: (id: string) => setSongId(id),
            }}
          >
            <Navigation colorScheme={"dark"} />
            <StatusBar />
            <PlayerWidget />
          </AppContext.Provider>
        </Provider>
      </SafeAreaProvider>

      // <GenreScreen />
      // <TechnoScreen />
      // <HouseScreen />
      // <AmbientScreen />

      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Home" component={GenreScreen} />
      //     <Stack.Screen name="Techno" component={TechnoScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}
