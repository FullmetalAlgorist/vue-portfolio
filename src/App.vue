<template>
  <v-app dark class="myApp">
    <core-drawer />
    <v-content class="hide-overflow hi">
      <router-view /> 
    </v-content>
  </v-app>
</template>

<script>

  export default {
    components: {
      CoreDrawer: () => import('@/components/core/Drawer')
    },
    data(){
      return {
      }
    },
      watch:{//currently firing whenever route changes
    $route (to, from){
        if(from.name == 'processing'){
            this.$router.go();
// this.$store.commit('app/death');
        }
    }
}
  }
</script>

<style scoped>
  .text-decoration-none {
    text-decoration: none;
  }
  .hi{
    padding-right: 0px !important;
  }
.myApp{
  background-color: var(--v-trial1-base) !important;
}
</style>
