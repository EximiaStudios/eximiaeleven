<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");

html {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  background-color: rgb(14, 14, 14, 0.95);
  color: rgb(253, 253, 253);
}

body {
  margin: 0;
}

#app {
  font-family: "Lato Thin", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  letter-spacing: 5px;
  line-height: 2em;
}
</style>
