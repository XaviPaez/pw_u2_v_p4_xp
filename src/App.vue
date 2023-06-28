<template>
 <Juego/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Calculadora from './components/Calculadora.vue'
 import Juego from './components/Juego.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Calculadora,
    Juego
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
