import { get } from "lodash";
const RouterPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue, options) {
    console.log(options);
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.mixin({
      beforeCreate() {
        this.navigator = options;
        this.$router = {
          params: get(this.navigator, "state.nav.routes", null)
            ? this.navigator.state.nav.routes[this.navigator.state.nav.index]
            : {},
          go: goBack => {
            if (!isNaN(goBack)) {
              goBack = Math.abs(goBack);
              while (goBack > 0) {
                goBack--;
                this.navigator._navigation.goBack(null);
              }
            }
          },
          goBack: () => {
            this.navigator._navigation.goBack(null);
          },
          push: routeName => this.navigator._navigation.navigate(routeName)
        };
      }
    });
  }
};

export default RouterPlugin;
