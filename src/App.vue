<template>
  <h1>APP</h1>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import request from '@/services'

export default defineComponent({
  name: 'App',
  setup() {
    request
      .post({
        url: '/login',
        data: {
          name: 'codertest',
          password: '123456'
        }
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
})
</script>

<style lang="less"></style>
