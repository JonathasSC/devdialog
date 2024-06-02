<template>
  <main>
    <FormSignup />
  </main>
</template>
<script lang="ts">
import FormSignup from "../components/FormSignup.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    FormSignup,
  },
});
</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
