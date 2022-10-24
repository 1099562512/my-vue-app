<template>
  <div class="link">
    <a-button type="primary" @click="jumpTo" class="ml">跳转到1</a-button>
    <a-button type="primary" @click="jumpTo" class="ml">跳转到2</a-button>
    <a-button type="primary" @click="jumpTo" class="ml">跳转到3</a-button>
    <a-button type="primary" @click="jumpTo" class="ml">跳转到4</a-button>
  </div>
  <div class="view">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, toRefs, watch, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from "@/store-pinia/index"
import { storeToRefs } from 'pinia'

import iframeDemo from '@v/iframe.vue';


const store = useStore(),
      router = useRouter()


const show = ref(false)
const { count } = storeToRefs(store)
const state = reactive({
  message: '123'
})

const jumpTo = () => {
  console.log(router);
}

//console.log(import.meta.env);
//const { message } = toRefs(state)
</script>

<style>
  @import "./home.less"

  
</style>