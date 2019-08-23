<template>
  <view class="container">
    <text>This is the App Details screen</text>
    <button title="Go to home screen" @press="goToHomeScreen"></button>
  </view>
</template>

<script>
export default {
  props: {
    navigation: { type: Object }
  },
  methods: {
    goToHomeScreen() {
      this.navigation.navigate("Home");
    }
  }
}
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>
