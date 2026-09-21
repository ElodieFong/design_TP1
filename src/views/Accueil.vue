<script setup>
import ListeArticles from '../components/ListeArticles.vue'

defineProps({
  articles: {
    type: Array,
    required: true
  },
  categories: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="web-page home-page">
    <div class="home-intro">
      <h1>Scène Efreinée</h1>
      <p>
        Welcome to Scène Efreinée, a platform dedicated to theatre and improvisation exercises.
        Explore exercises organized by level and category to prepare your sessions, develop your
        creativity, and improve your group performance.
      </p>
    </div>
  </section>
</template>
