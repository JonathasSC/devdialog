<template>
  <table cellspacing="0" cellpadding="0">
    <thead>
      <th>Collections</th>
    </thead>
    <tbody>
      <tr>
        <td>Users</td>
        <td>+</td>
      </tr>
      <tr>
        <td>Posts</td>
        <td>+</td>
      </tr>
      <tr>
        <td>Comments</td>
        <td>+</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CollectionsList",
});
</script>

<style scoped>
thead th {
  padding-bottom: 1rem;
}

th {
  font-size: 2.4rem;
  text-align: start;
  color: var(--color-slate-50);
  font-weight: bold;
}

tr:nth-child(odd) {
  background-color: var(--color-slate-950);
}

td {
  font-size: 1.8rem;
  text-align: start;
  color: var(--color-indigo-500);
  padding: 1rem;
  padding-inline: 2rem;
}

td:first-child {
  width: 64rem;
}
</style>
