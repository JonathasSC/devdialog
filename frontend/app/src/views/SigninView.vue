<template>
  <main>
    <FormSignin />
  </main>
</template>
<script lang="ts">
import FormSignin from "../components/FormSignin.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    FormSignin,
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
