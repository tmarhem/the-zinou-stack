<template>
  <div>
  <PokemonCard/>
    <NuxtWelcome />
  </div>
</template>

<script  setup lang="ts">
import { PokemonCard } from 'my-vue-ui'
// import "my-vue-ui/style.css"
onMounted(async () => {
  const test = await useFetch("https://api-pokemon-fr.vercel.app/api/v1/pokemon/badabouin")
  console.log('test', test.data._rawValue)
  }
  )
</script>
