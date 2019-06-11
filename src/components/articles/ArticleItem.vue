<template>
  <li>
    {{ article.title }}
  </li>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: ['article']
}
</script>
