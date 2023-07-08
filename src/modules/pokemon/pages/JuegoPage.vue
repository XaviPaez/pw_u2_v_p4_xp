<template>
  <h3>
    !Para vivir al maximo el gran juego deberas tener en cuenta las siguientes
    reglas¡
  </h3>

  <div class="reglas">
    <ul>
      <li>En el juego se tendran 3 intentos</li>
      <li>Si lo consigues en el primer intento tendras 5 puntos!</li>
      <li>Si lo consigues en el segundo intento tendras 2 puntos!</li>
      <li>Si lo consigues en el tercer intento tendras 1 puntos!</li>
      <li>
        Si no lo conseguiste en ninguno de los 3 no habras sumado y habras
        perdido
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3 {
  font-size: 32px;
  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
ul {
  list-style-type: decimal;
  justify-content: center;
  color: rgba(175, 17, 17, 0);
  opacity: 100%;
}
li {
  text-align: justify;
  color: rgb(0, 0, 0);
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  opacity: 100%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.reglas {
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid black;
  background-color: rgba(12, 1, 75, 0.5);

}
</style>