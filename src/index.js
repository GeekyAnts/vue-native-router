import ReactNavigation from "react-navigation";

import RouterPluginDefault from "./routerPlugin";

export default {
  ...ReactNavigation,
  RouterPlugin: RouterPluginDefault
};

export const createNavigationContainer =
  ReactNavigation.createNavigationContainer;
export const StateUtils = ReactNavigation.StateUtils;
export const createNavigator = ReactNavigation.createNavigator;
export const createStackNavigator = ReactNavigation.createStackNavigator;
export const StackNavigator = ReactNavigation.StackNavigator;
export const createSwitchNavigator = ReactNavigation.createSwitchNavigator;
export const SwitchNavigator = ReactNavigation.SwitchNavigator;
export const createDrawerNavigator = ReactNavigation.createDrawerNavigator;
export const DrawerNavigator = ReactNavigation.DrawerNavigator;
export const createTabNavigator = ReactNavigation.createTabNavigator;
export const TabNavigator = ReactNavigation.TabNavigator;
export const createBottomTabNavigator =
  ReactNavigation.createBottomTabNavigator;
export const createMaterialBottomTabNavigator =
  ReactNavigation.createMaterialBottomTabNavigator;
export const createMaterialTopTabNavigator =
  ReactNavigation.createMaterialTopTabNavigator;
export const NavigationActions = ReactNavigation.NavigationActions;
export const StackActions = ReactNavigation.StackActions;
export const DrawerActions = ReactNavigation.DrawerActions;
export const StackRouter = ReactNavigation.StackRouter;
export const TabRouter = ReactNavigation.TabRouter;
export const SwitchRouter = ReactNavigation.SwitchRouter;
export const Transitioner = ReactNavigation.Transitioner;
export const StackView = ReactNavigation.StackView;
export const StackViewCard = ReactNavigation.StackViewCard;
export const SafeAreaView = ReactNavigation.SafeAreaView;
export const SceneView = ReactNavigation.SceneView;
export const ResourceSavingSceneView = ReactNavigation.ResourceSavingSceneView;
export const Header = ReactNavigation.Header;
export const HeaderTitle = ReactNavigation.HeaderTitle;
export const HeaderBackButton = ReactNavigation.HeaderBackButton;
export const DrawerView = ReactNavigation.DrawerView;
export const DrawerItems = ReactNavigation.DrawerItems;
export const TabView = ReactNavigation.TabView;
export const TabBarTop = ReactNavigation.TabBarTop;
export const TabBarBottom = ReactNavigation.TabBarBottom;
export const SwitchView = ReactNavigation.SwitchView;
export const withNavigation = ReactNavigation.withNavigation;
export const withNavigationFocus = ReactNavigation.withNavigationFocus;
export const RouterPlugin = RouterPluginDefault;
