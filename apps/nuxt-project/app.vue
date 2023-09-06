<template>
  <div>
  <FirstCard/>
    <NuxtWelcome />
  </div>
</template>

<script  setup lang="ts">
import { FirstCard } from 'my-vue-ui'
// import "my-vue-ui/style.css"
onMounted(() => {console.log('test', FirstCard)})
</script>
