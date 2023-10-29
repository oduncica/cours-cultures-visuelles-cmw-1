<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<template>
  <div id="app">
    
    <PhotoExposition />
  </div>
</template>


<script>
import PhotoExposition from "./components/PhotoExposition.vue";

export default {
  name: "App",
  components: {
    PhotoExposition
  }
};
</script>




 -->



 <template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/photos">Voir la série de photos</router-link>
      <router-link to="/context">Contexte Historique et Artistique</router-link>
      <router-link to="/conclusion">Conclusion</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
