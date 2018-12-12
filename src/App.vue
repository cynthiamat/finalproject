<template>
  <div id="app">
    <div class="red-dot letter-box">Welcome to Cynthia's Card Creator <i class="em em-laughing"></i></div>
    <div id="nav">
      <router-link to="/">Create Card</router-link> |
      <router-link to="/cardiventory">Inventory</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  @import './assets/css/main.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
