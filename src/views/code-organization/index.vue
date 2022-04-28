<script setup lang="ts">
import {count, addCount} from "./index";

const handleAdd = () => {
  count.value += 2;
}
</script>

<template>
  <div class="text-center">
    <p>{{ count }}</p>
    <button @click="addCount" class="mr-5">Add</button>
    <button @click="handleAdd">Add 2</button>
  </div>
</template>

<style lang="scss" scoped>
</style>
