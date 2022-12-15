<script>

    import { stringifyExpression } from '@vue/compiler-core';
import { store } from '../store.js'
    import SingleCharacter from './SingleCharacter.vue';

    export default{
        name: "CharactersList",
        components: {
            SingleCharacter,
            stringifyExpression
        },
        data() {
            return {
                store,
            }
        },
    }

</script>

<template>

    <section class="container">

        <div class="row">
            <div v-for="character in store.characterList" class="col-6 col-md-4 col-lg-3 mb-5 character_card" :key="character.id">
                <!-- Componente card -->
                <SingleCharacter :info="character"/>
            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>

.character_card{
    border: 1px black solid;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.404);
    padding-top: 10px;
    overflow: hidden;
}

</style>