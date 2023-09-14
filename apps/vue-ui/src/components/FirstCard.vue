<script setup lang="ts">
// import styleInject from 'style-inject';
// import css from '../../dist/style.css';

// styleInject(css)

defineProps<{
}>()
</script>

<template>
  <div class="ui-first-card">
    <p :style="{ 'color': 'cyan'}">test</p>
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
