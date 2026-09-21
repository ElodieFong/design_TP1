<script setup>
import Panier from '../components/Panier.vue'

defineProps({
  panier: {
    type: Array,
    required: true
  }
})

defineEmits(['retirer-panier'])
</script>

<template>
  <section class="web-page">
    <div class="page-title">
      <h1>My session</h1>
      <p>Exercises selected for the session.</p>
    </div>

    <Panier
      :articles="panier"
      @retirer="$emit('retirer-panier', $event)"
    />
  </section>
</template>