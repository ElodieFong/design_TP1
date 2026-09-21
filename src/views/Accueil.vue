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
      <h3>Theater Association</h3>
      <div class="introBlock">
        <p>
          Welcome to Scène Efreinée, the association where everything is possible.
          <br>Do you wish to be a start, a rogue or a stone ? Then you are in the right place.
          <br><br>
          On this plateform you will find everything to organize your sessions, from improvisation exercice to actual theater training. 
          <br>Explore exercises organized by level and category to prepare your sessions, develop your creativity, and improve your group performance.
        </p>

      </div>
      
    </div>
  </section>
</template>
