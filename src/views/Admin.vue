<script setup>
defineProps({
  articles: {
    type: Array,
    required: true
  }
})

defineEmits(['supprimer-article'])

function supprimer(id, emit) {
  if (confirm('Delete this exercise?')) {
    emit('supprimer-article', id)
  }
}
</script>

<template>
  <section class="web-page">
    <div class="page-title">
      <h1>Administration</h1>
      <p>Manage the available exercises.</p>
    </div>

    <div class="admin-list">
      <div v-for="article in articles" :key="article.id" class="admin-card">
        <div>
          <strong>{{ article.titre }}</strong>
          <span>{{ article.niveau }} · {{ article.nombreParticipants }}</span>
        </div>
        <button
          class="delete-button"
          @click="supprimer(article.id, $emit)"
        >
          Supprimer
        </button>
      </div>
    </div>
  </section>
</template>