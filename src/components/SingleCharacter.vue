<script>
export default{
    name: "SingleCharacter",
    props: [
    "info"
    ],
}
</script>

<template>

    <!-- card -->
    <div class="character text-center">
        <img :src="info.image" alt="">
        <h4>{{info.name }}</h4>
        <div>{{info.status}}</div>
        <div class="font-weight-bold">{{info.species}}</div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

    h4{
        text-transform: capitalize;

        &::after{
            content: "";
            display: block;
            width: 40px;
            height: 1px;
            margin: 1rem auto;
        }
    }

    img{
    border-radius: 10px;
    overflow: hidden;
    padding-bottom: 10px;
}

</style>