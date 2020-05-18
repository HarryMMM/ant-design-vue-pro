<template>
  <div class="container">
    <Header />
    <SideMenu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SideMenu from "./SideMenu.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    SideMenu
  }
};
</script>

<style scoped lang="scss"></style>
