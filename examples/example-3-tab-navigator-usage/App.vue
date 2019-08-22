<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator
} from "vue-native-router";

import HomeScreen from "./screens/HomeScreen.vue";
import DetailsScreen from "./screens/DetailsScreen.vue";
import SettingsScreen from "./screens/SettingsScreen.vue";

const IOSTabs = createBottomTabNavigator(
  {
    Details: DetailsScreen,
    Settings: SettingsScreen
  }
);

const AndroidTabs = createMaterialTopTabNavigator(
  {
    Details: DetailsScreen,
    Settings: SettingsScreen
  }
);

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    AndroidTabs,
    IOSTabs
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator }
}
</script>
