<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')

function login() {
  if (!username.value || !password.value) {
    alert('Veuillez remplir les deux champs.')
    return
  }

  localStorage.setItem('connected', 'true')
  router.push('/admin')
}
</script>

<template>
  <section class="web-page">
    <div class="page-title">
      <h1>Log in</h1>
      <p>Log in to access the administration area.</p>
    </div>

    <form class="form-panel" @submit.prevent="login">
      <label>Username</label>
      <input v-model="username" type="text" placeholder="Utilisateur" />

      <label>Password</label>
      <input v-model="password" type="password" placeholder="Password" />

      <button class="main-button" type="submit">Log in</button>

      <small>
        Demo only, no real authentication is used.
      </small>
    </form>
  </section>
</template>