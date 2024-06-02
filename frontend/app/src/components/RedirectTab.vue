<template>
  <router-link
    :to="path"
    :style="buttonStyle"
    class="tab actived"
    v-if="isActivated"
  >
    {{ label }}
  </router-link>

  <router-link :style="buttonStyle" class="tab deactived" v-else :to="path">
    {{ label }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RedirectTab",
  props: {
    isActivated: {
      type: Boolean,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    buttonStyle() {
      const textLength: number = this.label.length;
      const paddingValue: number = textLength * 8;
      return {
        padding: `10px ${paddingValue}px !important`,
      };
    },
  },
});
</script>

<style>
.tab {
  border-radius: 0.25rem;
  text-decoration: none;
  color: var(--color-slate-50);

  display: flex;
  align-items: center;
  justify-content: center;
}

.deactived {
  background-color: var(--color-slate-800);
}
.deactived:hover {
  background-color: var(--color-slate-900);
}

.actived {
  background-color: var(--color-indigo-600);
}
.actived:hover {
  background-color: var(--color-indigo-700);
}
</style>
