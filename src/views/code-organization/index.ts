import {ref} from "vue";

const count = ref(0)

function addCount() {
  count.value++
}

export {
  count,
  addCount
}
