<template>
  <h1 class="test" ref="test">
    Works!
  </h1>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(() => {
      var tl = this.$gsap.timeline({repeat: -1, repeatDelay: 0,  ease: this.$gsap.Linear.easeInOut(2)})
      tl.to(".test", 2, {x:200}) // With css selector
      tl.to(this.$refs.test, 0.5, {x: 0}) // With refs
    })
  }
}
</script>
<style media="screen">
  .test {
    color: red;
    display: inline-block;
  }
</style>
