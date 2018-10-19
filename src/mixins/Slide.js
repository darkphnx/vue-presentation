export default {
  name: 'Slide',
  created: function() {
    this.$emit('changeTitle', this.title);
  }
}
