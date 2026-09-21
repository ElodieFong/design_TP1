<script setup>
import ListeArticles from '../components/ListeArticles.vue'

defineProps({
  articles: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="web-page">
    <div class="page-title">
      <h1>All exercises</h1>
      <p>Find an exercise adapted to your group.</p>
    </div>

    <ListeArticles :articles="articles" />
  </section>
</template>