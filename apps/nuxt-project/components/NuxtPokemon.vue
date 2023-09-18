<script setup lang="ts">
console.log('setupcomp')

// import styleInject from 'style-inject';
// import css from '../../dist/style.css';

// styleInject(css)
// import { ref } from 'vue'
// import axios from 'axios'
// import axiosAdapter from 'axios/lib/adapters/http'
defineProps<{}>();

// let data2 = await fetch("https://api-pokemon-fr.vercel.app/api/v1/pokemon/badabouin")
//   .then((response) => response.json())
// const instance = axios.create({
//   adapter: axiosAdapter,
// })

// let {data: data2} = await axios.get("https://api-pokemon-fr.vercel.app/api/v1/pokemon/badabouin")
let {data: data2} = await useFetch("/pokemon/absol")

console.log('fin setupcomp')
</script>

<template>
  <div class="ui-first-card">
      <p :style="{ color: 'green' }">pokemon</p>
    <p :style="{ color: 'green' }">{{ data2?.sprites?.regular}}</p>
    <img :src="data2?.sprites?.regular" alt="pokemonImg">
  </div>
</template>

<style  scoped>
.ui-first-card {
  width: 500px;
  height: 150px;
  background-color: cyan;
  border-radius: 15px;
  p {
    margin: 8px;
    color: blue;
  }
}
</style>
