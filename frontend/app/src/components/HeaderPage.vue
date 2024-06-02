<template>
  <header class="header">
    <nav class="header__nav">
      <h1 class="header__title">DevDialog</h1>
      <LogoutBtn />
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoutBtn from "./LogoutBtn.vue";

export default defineComponent({
  components: {
    LogoutBtn,
  },
});
</script>

<style scoped>
.header__title {
  color: var(--color-slate-50);
  font-weight: bold;
}

.header {
  height: 4rem;
  display: flex;
  justify-content: center;
  background-color: var(--color-indigo-700);
}

.header__nav {
  height: 100%;
  display: flex;
  align-items: center;
  min-width: 106rem;
  justify-content: space-between;
}
</style>
