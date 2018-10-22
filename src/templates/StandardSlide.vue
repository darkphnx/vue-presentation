<template>
  <div class='content'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "StandardSlide",
  props: {
    title: String,
  }
}
</script>

<style>
  .content {
    padding: 0px 60px;
    height: 100%;
    margin: auto 0;
  }
</style>
