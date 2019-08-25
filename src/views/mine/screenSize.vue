<template>
    <v-layout  class="screen">
        <v-btn>{{ screenSize }} - {{ numberSize }}</v-btn>
    </v-layout>
</template>
<script>
export default {
    computed:{
        screenSize(){
            return this.$vuetify.breakpoint.name;
        },
        numberSize(){
            console.log(this.$vuetify);
            return this.$vuetify.breakpoint.width;
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