// store.js serve a centralizzare i dati, evitando catene di dati tramite props
import { reactive } from 'vue'   //importa "reactive" già presente in vue

export const store = reactive({
    characterList: [],
    apiURL: "https://rickandmortyapi.com/api/character",
    titolo:"Rick and Morty App",
});

// i dati vengono centralizzati per poter essere importati nei vari componenti