<script setup>
defineProps({
  articles: {
    type: Array,
    required: true
  }
})

defineEmits(['retirer'])
</script>

<template>
  <div v-if="articles.length" class="session-list">
    <div v-for="article in articles" :key="article.id" class="session-card">
      <div>
        <strong>{{ article.titre }}</strong>
        <span>{{ article.nombreParticipants }} · {{ article.duree }}</span>
      </div>
      <button @click="$emit('retirer', article.id)">Remove</button>
    </div>
  </div>

  <p v-else class="empty-message">
    No exercises selected yet.
  </p>
</template>