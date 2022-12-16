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
                <option value="">ALL</option>
                <option value="Alive">ALIVE</option>
                <option value="Dead">DEAD</option>
                <option value="unknown">UNKNOWN</option>
            </select>
        </form>
        <div class="counter">
            {{ store.characterList.length }} CHARACTERS FOUNDED
        </div>
    </div>


    

</template>


<style lang="scss" scoped>

    .filter-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 80px;
    }

    .counter{
        background-color: rgba(255, 255, 255, 0.342);
        padding: 3px 10px;
        margin-left: 10px;
        border-radius: 10px;
        overflow: hidden;
        color: #fff;
        font-weight: 700;
    }

    #status{
        background-color: rgba(255, 255, 255, 0.342);
        padding: 3px 10px;
        border: none;
        border-radius: 10px;
        overflow: hidden;
        font-weight: 700;
    }

</style>