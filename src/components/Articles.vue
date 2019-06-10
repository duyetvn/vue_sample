<template>
  <div id="articles">
    <ul>
      <li v-for="article in articles" v-bind:key="article.id">
        <Article :article="article"></Article>
      </li>
    </ul>
  </div>
</template>

<script>
import Article from './Article'
export default {
  name: 'Articles',
  components: {
    Article
  },
  data () {
    return {
      articles: [
        {id: 1, title: 'Gone with the wind'},
        {id: 2, title: 'Romeo and Julie'},
        {id: 3, title: 'Casablanca'}
      ]
    }
  }
}
</script>
