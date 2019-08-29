<template>
  <v-app dark class="myApp" :style="{ height: $isMobile() ? winHeight+'px' : '100vh'}">
    <core-drawer />
    <v-content class="hide-overflow hi">
      <router-view :key="$route.fullPath"></router-view>
      <!-- <router-view />  -->
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
          console.log('watching leave route in App');
            this.$router.go();
// this.$store.commit('app/death');
        }
    }
},
 computed: {
   winHeight() {
      return window.innerHeight * 0.01 * 100;
    },
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
