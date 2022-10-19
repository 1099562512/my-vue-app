<template>
  <div class="a">
    {{ message }}
  </div>
</template>

<script setup>
import { ref, toRefs, watch, reactive } from 'vue'
import iframeDemo from '@v/iframe.vue';
import { useStore } from "@/store-pinia/index"
import { storeToRefs } from 'pinia';

const show = ref(false)

const store = useStore()
const { count, message } = storeToRefs(store)

const state = reactive({
  message: '123'
})
//console.log(import.meta.env);
//const { message } = toRefs(state)

</script>

<style>
  @import "./home.less"
</style>