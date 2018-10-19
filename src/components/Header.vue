<template>
  <div class='header'>
    <img src="../assets/atech.svg">
    <h1>{{ title }}</h1>
    <Progress :currentSlide="currentSlide" :slideCount="slideCount"></Progress>
  </div>
</template>

<script>
import Progress from "./Progress";

export default {
  name: "Header",
  props: {
    slideCount: Number,
    currentSlide: Number,
    title: String
  },
  components: {
    Progress
  }
}
</script>

<style>
.header {
  height: 10%;
  padding: 0px 40px;
  background-color: #017dc6;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1 {
  flex: 1 0 auto;
  margin-left: 20px;
}
.header img {
  height: 70%
}
</style>
