<template>
    <v-layout  class="screen">
        <v-btn>{{ screenSize }}</v-btn>
    </v-layout>
</template>
<script>
export default {
    computed:{
        screenSize(){
            return this.$vuetify.breakpoint.name;
        }
    }
}
</script>
<style lang="scss">
    .screen{
        position: fixed;
        z-index: 10;
    }
</style>