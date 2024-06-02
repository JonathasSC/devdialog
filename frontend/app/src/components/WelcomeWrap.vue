<template>
  <div class="welcome">
    <div class="content">
      <div class="text-container">
        <h1 class="title">
          Welcome to Devdialog, access the
          <router-link to="/admin">administration area</router-link>
          now.
        </h1>
        <router-link to="/admin"></router-link>
      </div>
      <div class="image-container">
        <img :src="require('../assets/img/welcome.svg')" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "WelcomeWrap",
});
</script>
<style scoped>
.welcome {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  gap: 12rem;
  max-width: 132rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  width: 38rem;
}

.text-container {
  width: 56rem;
  text-align: start;
}

.title {
  color: var(--color-slate-50);
  font-weight: bold;
  font-size: 4.4rem;
}

a {
  color: var(--color-indigo-500);
}
</style>
