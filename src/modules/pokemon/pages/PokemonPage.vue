<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor....</h1>

  <div v-else>
    <h1>Juego Pokemon</h1>

    <div v-if="mostrarJuego">
      <h1>Intentos: {{ intentos }}</h1>
      <h1>Puntaje: {{ puntaje }}</h1>
      <PokemonImg
        :pokemonId="pokemonCorrecto.id"
        :muestraPokemon="showPokemon"
      />

      <PokemonOps
        :opciones="pokemonArr"
        @seleccionado="revisarSeleccion($event)"
      />
    </div>

    <div v-if="puntaje >= 1 && intentos <= 3">
      <div>
        <h1 class="victoria">Puntaje: {{ puntaje }}</h1>
        <h1 class="victoria">Felicitaciones has ganado</h1>
        <PokemonImg
          :pokemonId="pokemonCorrecto.id"
          :muestraPokemon="showPokemon"
        />
      </div>

      <button class="boton" @:click="reiniciarJuego()">Nuevo Juego</button>
    </div>

    <div v-if="puntaje < 1 && intentos == 3">
      <div>
        <h1 class="derrota">El juego ha terminado, intentalo nuevamente</h1>
      </div>

      <button class="boton" @:click="reiniciarJuego()">Nuevo Juego</button>
    </div>
  </div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";

import obtenerFachadaPokemons from "../helpers/clientePokemonAPI";

console.log();
export default {
  components: {
    PokemonImg,
    PokemonOps,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: null,
      intentos: 0,
      puntaje: 0,
      showPokemon: false,
      mostrarJuego: true,
    };
  },
  methods: {
    async cargaJuegoInicial() {
      const arregloPokemons = await obtenerFachadaPokemons();
      this.pokemonArr = arregloPokemons;
      console.log(arregloPokemons);
      const indicePokemon = Math.floor(Math.random() * 4);
      this.pokemonCorrecto = this.pokemonArr[indicePokemon];
    },
    revisarSeleccion(idSeleccionado) {
      console.log("Evento del padre");
      console.log(idSeleccionado);

      if (idSeleccionado == this.pokemonCorrecto.id) {
        if (this.intentos == 1) {
          this.showPokemon = true;
          this.puntaje = this.puntaje + 2;
        } else if (this.intentos == 2) {
          this.showPokemon = true;
          this.puntaje = this.puntaje + 1;
        } else {
          this.showPokemon = true;
          this.puntaje = this.puntaje + 5;
        }
        this.mostrarJuego = false;
      } else {
       
        this.intentos++;
        this.showPokemon = false;
         if (this.intentos == 3) {
          this.mostrarJuego = false;
        }
      }
    },

    reiniciarJuego() {
      this.puntaje = 0;
      this.intentos = 0;
      this.showPokemon = false;
      this.pokemonCorrecto = null;
      this.mostrarJuego=true
      this.cargaJuegoInicial();
    },
  },
  mounted() {
    console.log("Se monto el componente");
    this.cargaJuegoInicial();
  },
};
</script>

<style scoped>


h1{
    font-size: 25px;
    color: black;
}

</style>