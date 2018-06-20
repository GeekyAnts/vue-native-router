import ReactNavigation from "react-navigation";

import RouterPluginDefault from "./routerPlugin";

export default {
  ...ReactNavigation,
  RouterPlugin: RouterPluginDefault
};
export * from "react-navigation";
export { default as routerPlugin } from "./routerPlugin";
