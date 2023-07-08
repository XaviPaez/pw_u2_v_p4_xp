<template>
  <h1>Este sera tu maravilloso premio</h1>

  <div class="container">
    <div class="premios">
      <ul>
        <li>Primer gran premio de $250</li>
        <li>Segundo premio de $100</li>
        <li>Tercero gran premio de $25</li>
      </ul>
      <img class="poke-premio"
        src="https://www.pngall.com/wp-content/uploads/12/Coin-Stack-Investment-PNG-HD-Image.png"
        alt="No se puede cargar la imagen"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;

  align-items: center;
}

img {
  width: 300px;
  height: 300px;
}

ul {
  margin-top: 100px;
  font-size: 30px;
  text-align: left;
  color: rgb(20, 3, 80);
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.premios {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 800px;
 

  border: solid black;
  border-radius: 10px;
}

h1 {
  font-size: 40px;
  color: black;
}
</style>