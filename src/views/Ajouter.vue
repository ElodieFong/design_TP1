<script setup>
import FormulaireArticle from '../components/FormulaireArticle.vue'

defineEmits(['ajouter-article'])
</script>

<template>
  <section class="web-page">
    <div class="page-title">
      <h1>Add an exercise</h1>
      <p>Add an exercise to the library.</p>
    </div>

    <FormulaireArticle @ajouter="$emit('ajouter-article', $event)" />
  </section>
</template>