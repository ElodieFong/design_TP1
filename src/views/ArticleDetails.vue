<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  articles: {
    type: Array,
    required: true
  }
})

defineEmits(['ajouter-panier'])

const route = useRoute()

const article = computed(() =>
  props.articles.find(item => item.id === Number(route.params.id))
)
</script>

<template>
  <section class="web-page details-page">
    <RouterLink to="/articles" class="back-button">←</RouterLink>

    <div v-if="article" class="details-panel">
      <div class="details-heading">
        <h1>{{ article.titre }}</h1>
        <div class="detail-tags">
          <span>{{ article.nombreParticipants }}</span>
          <span>{{ article.duree }}</span>
        </div>
      </div>

      <div class="description-box">
        <h2>Description</h2>
        <p>{{ article.description }}</p>
      </div>

      <div class="details-info">
        <p><strong>Level:</strong> {{ article.niveau }}</p>
        <p><strong>Category:</strong> {{ article.categorie }}</p>
        <p><strong>Participants:</strong> {{ article.nombreParticipants }}</p>
        <p><strong>Duration:</strong> {{ article.duree }}</p>
      </div>

      <button
        class="main-button"
        @click="$emit('ajouter-panier', article)"
      >
        Add to my session
      </button>
    </div>

    <div v-else class="empty-message">
      This exercise does not exist.
    </div>
  </section>
</template>