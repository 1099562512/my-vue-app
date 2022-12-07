<template>
  <div class=''>
    <a-button type="primary" @click="showModal">弹窗12312</a-button>
    <a-modal
      :visible="isShow"
    >
      <p>12312</p>
    </a-modal>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const isShow = ref(false)
  const showModal = () => {

  }

</script>
<style lang='scss' scope>
</style>