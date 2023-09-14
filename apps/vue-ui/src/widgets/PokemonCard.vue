<script setup lang="ts">
// import styleInject from 'style-inject';
// import css from '../../dist/style.css';

// styleInject(css)
import { ref } from 'vue'
import axios from 'axios'
// import axiosAdapter from 'axios/lib/adapters/http'
defineProps<{}>();

// let data2 = await fetch("https://api-pokemon-fr.vercel.app/api/v1/pokemon/badabouin")
//   .then((response) => response.json())
// const instance = axios.create({
//   adapter: axiosAdapter,
// })
let {data: data2} = await axios.get("https://api-pokemon-fr.vercel.app/api/v1/pokemon/badabouin")

console.log('inside3', data2.sprites.regular)

</script>

<template>
  <div class="ui-first-card">
      <p :style="{ color: 'cyan' }">pokemon</p>
    <p :style="{ color: 'cyan' }">{{ data2.sprites.regular}}</p>
    <img :src="data2.sprites.regular" alt="pokemonImg">
  </div>
</template>

<style lang="scss" scoped>
.ui-first-card {
  width: 500px;
  height: 150px;
  background-color: green;
  border-radius: 15px;
  p {
    margin: 8px;
    color: blue;
  }
}
</style>
