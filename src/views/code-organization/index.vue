<script setup lang="ts">
import {count, addCount} from "./index";
import {ref, watchEffect} from "vue";

const setCount = ref(0)
const performAsyncOperation = (num: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('performAsyncOperation')
      resolve(num + 100)
    }, 1000)
  })
}
const watchEffectStop = watchEffect(() => {
  setCount.value++
  console.log('watchEffect:', count.value)
})
const handleAdd = () => {
  count.value += 2;
  // 当count大于10时，停止watchEffect
  count.value >= 10 && watchEffectStop();

}
</script>

<template>
  <div class="text-center">
    <p>{{ count }},set:{{ setCount }}</p>
    <button @click="addCount" class="mr-5">Add</button>
    <button @click="handleAdd">Add 2</button>
  </div>
</template>

<style lang="scss" scoped>
</style>
