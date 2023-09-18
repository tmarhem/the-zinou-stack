<template>
  <div>
  <!-- <PokemonCard/> -->
  <NuxtPokemon/>
  <ModuleCard/>
    <NuxtWelcome />
  </div>
</template>

<script  setup lang="ts">
console.log('setup1')

import { PokemonCard } from 'my-vue-ui'
// import "my-vue-ui/style.css"
console.log('end setup1')
</script>
