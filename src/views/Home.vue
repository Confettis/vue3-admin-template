<template>

</template>

<script lang="ts">
import axios from 'utils/axios'

export default {
  name: "Home",
  setup() {
    axios.get('/users/xPoet').then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
