<script>
import axios from 'axios';
import { onMounted } from 'vue';
import AppHeader from './components/AppHeader.vue'
import AppSearch from './components/AppSearch.vue';
import CharactersList from './components/CharactersList.vue'

import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    CharactersList,
    AppSearch
},
  data() {
    return {
      store,
    }
  },
  // Chiamata API
  methods:{ getCharacters(){

    let searchURL = store.apiURL;
    if(store.selectInput !== ""){
      searchURL += `?${store.selectVariableName}=${store.selectInput}`
    }

    axios.get(searchURL)
    .then(res => {
      store.characterList = res.data.results;   // i dati vengono importati tramite store.*nome proprietà utilizzata da store e messi all'interno dell'array vuoto 
    })
    .catch(err => {
      console.log("Errors", err)  //mostra eventuali errori nel log della console
    })
    }
  },
  // Esecuzione chiamata
  mounted(){
    this.getCharacters();
  }
}
</script>

<template>
  <AppHeader :msg="store.titolo"/>
  <main>
    <AppSearch @search="getCharacters"/>
    <CharactersList/>
  </main>
</template>

<style lang="scss">

  @use './style/general.scss';

  main{
    padding-top: 20px;
  }

</style>
