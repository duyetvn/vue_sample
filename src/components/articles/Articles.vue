<template>
  <div id="articles">
    <search></search>
    <ul>
      <article-item v-for="article in articles" v-bind:key="article.id" :article="article">
      </article-item>
    </ul>
  </div>
</template>

<script>
import ArticleItem from './ArticleItem'
import Search from './Search'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Articles',
  components: {
    ArticleItem,
    Search
  },
  computed: {
    ...mapGetters({
      articles: 'articles/articleList'
    })
  },
  methods: {
    ...mapActions({
      loadList: 'articles/setList'
    })
  },
  mounted: function () {
    this.loadList()
  }
}
</script>
