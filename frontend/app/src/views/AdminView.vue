<template>
  <main>
    <HeaderPage />
    <div class="content">
      <CollectionsList />
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CollectionsList from "../components/CollectionsList.vue";
import HeaderPage from "../components/HeaderPage.vue";

export default defineComponent({
  components: {
    CollectionsList,
    HeaderPage,
  },
});
</script>

<style scoped>
.content {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
