<template>
  <!-- <div class="link">
    <a-button type="primary" @click="jumpTo(1)" class="ml">跳转到1</a-button>
    <a-button type="primary" @click="jumpTo(2)" class="ml">跳转到2</a-button>
    <a-button type="primary" @click="jumpTo(3)" class="ml">跳转到3</a-button>
    <a-button type="primary" @click="jumpTo(4)" class="ml">跳转到4</a-button>
  </div> -->
  <div class="view">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, toRefs, watch, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from "@/store-pinia/index"
import { storeToRefs } from 'pinia'

const store = useStore(),
      router = useRouter(),
      route = useRoute()

const show = ref(false)
const { count } = storeToRefs(store)
const state = reactive({
  message: '123'
})

const jumpTo = (url) => {
  router.push({
    path: `/home/${url}`
  })
}

console.log(import.meta.env); //获取环境变量
//const { message } = toRefs(state)
</script>

<style>
  @import "./home.less"

  
</style>