<template>
  <div id="article">
    <h1>{{ article.title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: ['article']
}
</script>
