<template>
  <p>{{ mensaje }}</p>
  <h1>Juego</h1>
  <img v-if="urlImagen" :src="urlImagen" alt="No se puede cargar la imagen" />
  <img v-if="urlImagen1" :src="urlImagen1" alt="No se puede cargar la imagen" />

  <div class="bg-dark"></div>
  <div class="contenedor">
    <p>No olvides de aplastar el boton o dar enter</p>

    <input type="text" @keyup.enter="consumirAPI()" />
    <button v-on:click="consumirAPI()">Jugar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      respuesta: "",
      urlImagen: null,
      respuesta1: "",
      urlImagen1: null,
      mensaje: "",
    };
  },

  methods: {
    async consumirAPI() {
      const rspta = await fetch("https://yesno.wtf/api").then((r) => r.json());

      const rspta1 = await fetch("https://yesno.wtf/api").then((r1) =>
        r1.json()
      );

      const { answer: answer1, image: imagen1 } = rspta1;
      this.respuesta = answer1;
      this.urlImagen = imagen1;

      const { answer, image } = rspta;
      this.respuesta1 = answer;
      this.urlImagen1 = image;
      if (this.respuesta === this.respuesta1) {
        this.mensaje = "Felicitaciones tu respuesta es " + answer;
      } else {
        this.mensaje = "Sigue intentando";
      }
    },

  },
};
</script>

<style>
h1{
  color: blue;
}
p{
  color: brown ;
  font-size: 30px;
  font-weight: bold;
  
}

img{

  border: solid rgb(32, 1, 145) 5px;
}

body{

  background-color: rgb(115, 115, 124);
}
button{

border:solid 2px black;
color: rgb(141, 141, 141);
background-color: rgb(3, 3, 61);

}

</style>