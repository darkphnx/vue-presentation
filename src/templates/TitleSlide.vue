<template>
  <div class='titleContainer'>
    <div class='title'>
      <h1>{{ title }}</h1>
    </div>
    <div class='subTitle'>
      <h3>{{ subTitle }}</h3>
    </div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TitleSlide",
  props: {
    title: String,
    subTitle: String
  },
}
</script>

<style>
  .titleContainer {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .title {
    background-color: #017dc6;
    color: #fff;
    display: flex;
    flex-direction: column;
  }

  .title h1 {
    margin-top: auto;
  }

  .title, .subTitle {
    text-align: center;
  }
</style>
