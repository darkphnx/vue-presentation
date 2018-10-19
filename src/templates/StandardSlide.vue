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
    padding: 1rem 5rem;
  }
</style>
