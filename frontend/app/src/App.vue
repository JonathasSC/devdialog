<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: linear-gradient(152deg, var(--color-slate-900), #020617);
  background-repeat: no-repeat;

  height: 100%;
}

nav {
  padding: 30px;
}
</style>
