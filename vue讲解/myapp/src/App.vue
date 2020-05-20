<template>
  <div>
    <HelloWorld v-if="seen"></HelloWorld>
    <InputNumber />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import InputNumber from '@/components/InputNumber'

export default {
  components: {
    HelloWorld,
    InputNumber
  },
  data() {
    return {
      seen: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.seen = false
    }, 3000)
  }
}
</script>

<style scoped>
</style>