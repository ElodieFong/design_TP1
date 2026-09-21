<script setup>
import { computed, ref, watch } from 'vue'
import BarreRecherche from './BarreRecherche.vue'
import ArticleItem from './ArticleItem.vue'

const props = defineProps({
  articles: {
    type: Array,
    required: true
  }
})

const recherche = ref('')
const categorie = ref('')
const page = ref(1)
const parPage = 6

const categories = computed(() => [
  'Beginner',
  'Intermediate',
  'Advanced',
  'Training',
  'Improv',
  'Theater'
])

const correspondCategorie = (article) => {
  if (!categorie.value) return true

  if (categorie.value === 'Beginner') return article.niveau === 'Beginner'
  if (categorie.value === 'Intermediate') return article.niveau === 'Intermediate'
  if (categorie.value === 'Advanced') return article.niveau === 'Advanced'

  return article.categorie === categorie.value
}

const articlesFiltres = computed(() => {
  const text = recherche.value.toLowerCase().trim()

  return props.articles.filter(article => {
    const matchText =
      !text ||
      article.titre.toLowerCase().includes(text) ||
      article.description.toLowerCase().includes(text)

    return matchText && correspondCategorie(article)
  })
})

const nombrePages = computed(() =>
  Math.max(1, Math.ceil(articlesFiltres.value.length / parPage))
)

const articlesPage = computed(() => {
  const start = (page.value - 1) * parPage
  return articlesFiltres.value.slice(start, start + parPage)
})

watch([recherche, categorie], () => {
  page.value = 1
})
</script>

<template>
  <section>
    <BarreRecherche
      :model-value="recherche"
      @update:model-value="recherche = $event"
    />

    <div class="tag-list">
      <button
        :class="{ active: categorie === '' }"
        @click="categorie = ''"
      >
        All
      </button>

      <button
        v-for="item in categories"
        :key="item"
        :class="{ active: categorie === item }"
        @click="categorie = item"
      >
        {{ item }}
      </button>
    </div>

    <div v-if="articlesPage.length" class="exercise-list">
      <ArticleItem
        v-for="article in articlesPage"
        :key="article.id"
        :article="article"
      />
    </div>

    <p v-else class="empty-message">No exercises found.</p>

    <div v-if="nombrePages > 1" class="pagination">
      <button :disabled="page === 1" @click="page--">‹</button>
      <span>{{ page }} / {{ nombrePages }}</span>
      <button :disabled="page === nombrePages" @click="page++">›</button>
    </div>
  </section>
</template>