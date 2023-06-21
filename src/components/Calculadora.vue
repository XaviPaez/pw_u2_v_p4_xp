<template>
  <div class="pantalla">
    <h1>Calculadora</h1>
  </div>

  <div id="myApp3" class="container">
    <div class="calculadora">
      <label id="resultado">{{ pantalla }}</label>
      <button
        v-for="elem in miarreglo"
        :key="elem"
        v-on:click="agregarCaracter(elem)"
      >
        {{ elem }}
      </button>
      <button class="cero" v-on:click="agregarCaracter('0')">0</button>
      <button v-on:click="calcular">=</button>
      <button v-on:click="agregarCaracter('*')">*</button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
const arreglo = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "/"];

export default {
  name: "Calculadora",
  data() {
    return {
      miarreglo: arreglo,
      pantalla: "",
    };
  },

  methods: {
    agregarCaracter(caracter) {
      this.pantalla += caracter;
    },
  },
  computed: {

    calcular(){
    try{
        this.pantalla = eval(this.pantalla)
    }catch (error){
        this.pantalla= '';
    }
    }
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculadora {
  display: grid;
  grid-template-columns: repeat(4, 75px);
  grid-template-rows: repeat(5, 45px);
  background-color: rgb(56, 54, 83);
  padding: 20px;
  border-radius: 35px;
  box-shadow: 2px 2px 15px 10px rgb(0, 0, 0);
}

label {
  display: flex;
  justify-content: center;
  align-items: center;
  color: blanchedalmond;
}

.cero {
  grid-column: span 2;
}

#resultado {
  border: 2px inset rgb(255, 255, 255);
  border-radius: 20px;
  grid-column: span 4;
}

button {
  width: auto;
  height: 30px;
  font-size: 20px;
  margin-top: 20px;
  border: 2px solid #000;
  border-radius: 35px;
}

button:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(255, 0, 115);
}
</style>