<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})

defineEmits(['ajouter-panier'])
</script>

<template>
  <RouterLink :to="`/article/${article.id}`" class="exercise-card">
    <div class="exercise-title-row">
      <h3>{{ article.titre }}</h3>
      <span>{{ article.nombreParticipants }}</span>
    </div>
    <div class="exercise-bottom">
      <span>{{ article.duree }}</span>
      <span class="small-level">{{ article.niveau }}</span>
    </div>
  </RouterLink>
</template>