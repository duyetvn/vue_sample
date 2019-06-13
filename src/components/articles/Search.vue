<template>
  <div id="search">
    <input type="text" v-model="message" placeholder="Search an article">
    <p> Result for: {{ message }}</p>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      message: ''
    }
  },
  beforeCreate: function () {
    console.log(this.data)
  },
  watch: {
    message: function (value) {
      this.$store.dispatch('articles/setList', value)
    }
  }
}
</script>
