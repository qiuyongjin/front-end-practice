<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <h1 class="text-center mt-5 px-5 text-xl py-5">{{ msg }}</h1>
  <div class="text-center">
    <router-link class="mx-3" to="/foo">Foo</router-link>
    <router-link class="mx-3" to="/bar">Bar</router-link>
    <router-link class="mx-3" to="/code-organization">代码组织</router-link>
  </div>
</template>

<style lang="scss" scoped>
</style>
