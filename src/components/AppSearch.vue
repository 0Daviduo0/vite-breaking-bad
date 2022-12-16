<script>
import { store } from '../store.js';

    export default {
        name: "AppSearch",
        data() {
            return {
                store,
            }
        },
    }

</script>


<template>

    <div class="filter-container">
        <form>
            <select name="status" id="status" v-model="store.selectInput" @click.prevent="$emit('search')">
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">unknown</option>
            </select>
        </form>
    </div>


    

</template>


<style lang="scss" scoped>

    .filter-container {
        display: flex;
        justify-content: center;
        padding-bottom: 80px;
    }

</style>