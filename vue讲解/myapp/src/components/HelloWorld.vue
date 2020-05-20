<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello'
    }
  },
  beforeCreate() {
    console.log('1、beforeCreate')
    console.log(document.querySelector('h1'))
  },
  created() {
    console.log('2、created')
    console.log(document.querySelector('h1'))
  },
  beforeMount() {
    console.log('3、beforeMount')
    console.log(document.querySelector('h1'))
  },
  mounted() {
    console.log('4、mounted')
    console.log(document.querySelector('h1'))
    setTimeout(() => {
      this.message = 'aaa'
    }, 2000)
  },
  beforeUpdate() {
    console.log('5、beforeUpdate')
    console.log(document.querySelector('h1'))
  },
  updated() {
    console.log('6、updated')
    console.log(document.querySelector('h1'))
  },
  beforeDestroy() {
    console.log('7、beforeDestroy')
    console.log(document.querySelector('h1'))
  },
  destroyed() {
    console.log('8、destroyed')
    console.log(document.querySelector('h1'))
  }
}
</script>

<style scoped>
</style>