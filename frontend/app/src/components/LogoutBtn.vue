<template>
  <VBtn @click="logout" icon><VIcon>mdi-exit-to-app</VIcon></VBtn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import VBtn from "vuetify";
import VIcon from "vuetify";

export default defineComponent({
  name: "LogoutBtn",
  components: {
    VBtn,
    VIcon,
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/signin");
      this.$swal({
        icon: "success",
        title: "Logout Successfully!",

        timer: 1500,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timerProgressBar: true,
      });
    },
  },
});
</script>

<style scoped>
.v-btn {
  background-color: var(--color-indigo-700) !important;
}

.v-btn:hover {
  background-color: var(--color-indigo-500) !important;
}

.v-icon {
  color: var(--color-slate-100) !important;
}
</style>
