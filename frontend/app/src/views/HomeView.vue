<template>
  <main>
    <HeaderPage />
    <WelcomeWrap />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderPage from "../components/HeaderPage.vue";
import WelcomeWrap from "../components/WelcomeWrap.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    HeaderPage,
    WelcomeWrap,
  },
});
</script>
