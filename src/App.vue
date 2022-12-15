<script>
import axios from 'axios';
import { onMounted } from 'vue';
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'

import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    CharactersList,
  },
  data() {
    return {
      store,
    }
  },
  // Chiamata API
  methods:{ GetCharacters(){
    axios.get(store.apiURL)
    .then(res => {
      store.characterList = res.data.results;
    })
    .catch(err => {
      console.log("Errors", err)
    })
    }
  },
  // Esecuzione chiamata
  mounted(){
    this.GetCharacters();
  }
}
</script>

<template>
  <AppHeader msg="Rick and Morty App"/>
  <main>
    <CharactersList/>
  </main>
</template>

<style lang="scss">

  @use './style/general.scss';

  main{
    padding-top: 20px;
  }

</style>
