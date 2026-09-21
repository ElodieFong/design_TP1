<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['ajouter'])

const form = reactive({
  titre: '',
  categorie: 'Training',
  niveau: 'Beginner',
  nombreParticipants: '',
  duree: '',
  description: ''
})

function submit() {
  if (
    !form.titre ||
    !form.nombreParticipants ||
    !form.duree ||
    !form.description
  ) {
    alert('Please fill in all fields.')
    return
  }

  emit('ajouter', { ...form })

  form.titre = ''
  form.nombreParticipants = ''
  form.duree = ''
  form.description = ''
}
</script>

<template>
  <form class="form-panel" @submit.prevent="submit">
    <label>Exercise name</label>
    <input v-model="form.titre" type="text" placeholder="e.g. What if" />

    <label>Category</label>
    <select v-model="form.categorie">
      <option>Training</option>
      <option>Improv</option>
      <option>Theater</option>
    </select>

    <label>Level</label>
    <select v-model="form.niveau">
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Advanced</option>
    </select>

    <label>Participants</label>
    <input v-model="form.nombreParticipants" type="text" placeholder="2-5 people" />

    <label>Duration</label>
    <input v-model="form.duree" type="text" placeholder="10-15 min" />

    <label>Description</label>
    <textarea v-model="form.description" rows="6"></textarea>

    <button class="main-button" type="submit">Add</button>
  </form>
</template>