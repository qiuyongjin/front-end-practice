<script setup>
import { onMounted, reactive, ref } from 'vue'

const msg = ref([])
const webSocketUrl = 'ws://127.0.0.1:30002'
const socket = new WebSocket(webSocketUrl)
// console.log(socket.readyState)
socket.onopen = function () {
  console.log('连接成功')
}
socket.onmessage = function (event) {
  console.log(event)
  msg.value.push(event.data)
}
const sendText = ref('')
const sendMsg = () => {
  socket.send(sendText.value || '你好,Hello')
}
</script>

<template>
  <div class="root">
    <h1>WebSocket</h1>
    <input class="block bg-blue-300" v-model="sendText" />
    <button @click="sendMsg">发送消息</button>
    <div>
      <p v-for="(item,index) in msg" :key="index" v-html="item"></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {

}
</style>
