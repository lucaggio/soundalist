/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Entypo, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
} from "../../types";
import GenreScreen from "../screens/GenreScreen";
import FavouritList from "../screens/FavouritListScreen";
import TechnoScreen from "../screens/TechnoScreen";
import HouseScreen from "../screens/HouseScreen";
import AmbientScreen from "../screens/AmbientScreen";
import SingleArtistScreen from "../screens/SingleArtistScreen";
import theme from "../components/theme";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const tabNavBgColor = `${theme.colors.black}`;
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: theme.colors.white,
        activeBackgroundColor: tabNavBgColor,
        inactiveBackgroundColor: tabNavBgColor,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name="home"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Preferiti"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="hearto"
              size={24}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <TabOneStack.Screen
        name="HomeScreen"
        component={GenreScreen}
        options={{ header: () => null }}
      />

      <TabOneStack.Screen
        name="TechnoScreen"
        component={TechnoScreen}
        options={{ headerTitle: "" }}
      />

      <TabOneStack.Screen
        name="HouseScreen"
        component={HouseScreen}
        options={{ headerTitle: "" }}
      />

      <TabOneStack.Screen
        name="AmbientScreen"
        component={AmbientScreen}
        options={{ headerTitle: "" }}
      />
      <TabOneStack.Screen
        name="SingleArtistScreen"
        component={SingleArtistScreen}
        options={{ headerTitle: "" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <TabTwoStack.Screen
        name="YourListScreen"
        component={FavouritList}
        options={{ headerTitle: "" }}
      />
    </TabTwoStack.Navigator>
  );
}
