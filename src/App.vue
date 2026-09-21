<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const menuOpen = ref(false)
const connected = ref(localStorage.getItem('connected') === 'true')

const articles = ref([
  {
    id: 1,
    titre: 'What if',
    categorie: 'Impro',
    niveau: 'Beginner',
    nombreParticipants: '2-5 people',
    duree: '8-10 min',
    description: 'Participants build a scene from situations introduced by “What if...?”. The goal is to develop imagination and the ability to quickly build on other participants’ ideas.'
  },
  {
    id: 2,
    titre: 'Character walk',
    categorie: 'Training',
    niveau: 'Beginner',
    nombreParticipants: '4-6 people',
    duree: '15 min',
    description: 'Participants move around the space while experimenting with different ways of walking and playing a character. The group observes and reacts to the changes.'
  },
  {
    id: 3,
    titre: 'Hi-Ho-Ha',
    categorie: 'Training',
    niveau: 'Beginner',
    nombreParticipants: '2-5 people',
    duree: '10-15 min',
    description: 'A quick exercise to develop listening, concentration, and group reflexes. Participants follow a sequence of movements and sounds.'
  },
  {
    id: 4,
    titre: 'The queue',
    categorie: 'Theater',
    niveau: 'Intermediate',
    nombreParticipants: '8-12 people',
    duree: '25-30 min',
    description: 'Participants form a line and gradually enter an improvised situation. The exercise develops character relationships and collective listening.'
  },
  {
    id: 5,
    titre: 'Maestro',
    categorie: 'Training',
    niveau: 'Advanced',
    nombreParticipants: '2-20 people',
    duree: '15-20 min',
    description: 'One participant leads the group like a conductor. The others follow their directions while maintaining their character and stage presence.'
  },
  {
    id: 6,
    titre: 'Le miroir',
    categorie: 'Training',
    niveau: 'Beginner',
    nombreParticipants: '2 people',
    duree: '5-10 min',
    description: 'Two participants stand facing each other. The first makes slow movements and the second reproduces them like a mirror.'
  },
  {
    id: 7,
    titre: 'Émotion surprise',
    categorie: 'Impro',
    niveau: 'Intermediate',
    nombreParticipants: '2-6 people',
    duree: '10 min',
    description: 'A scene is played normally, but one participant receives a different emotion that they must immediately incorporate into their performance.'
  },
  {
    id: 8,
    titre: 'La machine humaine',
    categorie: 'Training',
    niveau: 'Beginner',
    nombreParticipants: '5-15 people',
    duree: '5-10 min',
    description: 'Each participant gradually adds a movement and a sound to build a large collective machine.'
  }
])

const panier = ref([])

const categories = computed(() => [
  'Beginner',
  'Intermediate',
  'Advanced',
  'Training',
  'Impro',
  'Theater'
])

function ajouterAuPanier(article) {
  if (!panier.value.some(item => item.id === article.id)) {
    panier.value.push(article)
  }
}

function retirerDuPanier(id) {
  panier.value = panier.value.filter(item => item.id !== id)
}

function ajouterArticle(article) {
  articles.value.push({
    ...article,
    id: Date.now()
  })
  router.push('/articles')
}

function supprimerArticle(id) {
  articles.value = articles.value.filter(article => article.id !== id)
  panier.value = panier.value.filter(article => article.id !== id)
}


function connexion() {
  connected.value = true
  localStorage.setItem('connected', 'true')
  menuOpen.value = false
  router.push('/admin')
}

function deconnexion() {
  connected.value = false
  localStorage.removeItem('connected')
  menuOpen.value = false
  router.push('/')
}

function go(path) {
  menuOpen.value = false
  router.push(path)
}
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <div class="brand" @click="go('/')">
        <div class="brand-logo">🎭</div>
        <span>Scène Efreinée</span>
      </div>

      <button
        class="menu-button"
        aria-label="Open menu"
        @click="menuOpen = true"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>

    <transition name="fade">
      <div v-if="menuOpen" class="menu-overlay" @click="menuOpen = false"></div>
    </transition>

    <transition name="slide">
      <aside v-if="menuOpen" class="side-menu">
        <div class="side-menu-header">
          <strong>Menu</strong>
          <button class="close-button" @click="menuOpen = false">×</button>
        </div>

        <nav class="side-links">
          <button @click="go('/')">Home</button>
          <button @click="go('/articles')">All exercises</button>
          <button @click="go('/panier')">
            My session
            <span v-if="panier.length" class="menu-count">{{ panier.length }}</span>
          </button>
          <button @click="go('/ajouter')">Add an exercise</button>
          <button v-if="connected" @click="go('/admin')">Administration</button>
          <button v-if="!connected" @click="go('/login')">Log in</button>
          <button v-else @click="deconnexion">Log out</button>
        </nav>
      </aside>
    </transition>

    <main>
      <RouterView
        :articles="articles"
        :categories="categories"
        :panier="panier"
        @ajouter-panier="ajouterAuPanier"
        @retirer-panier="retirerDuPanier"
        @ajouter-article="ajouterArticle"
        @supprimer-article="supprimerArticle"
        @connexion="connexion"
      />
    </main>
  </div>
</template>