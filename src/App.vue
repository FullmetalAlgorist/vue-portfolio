<template>
  <v-app dark class="myApp">
    <core-drawer />
    <v-content class="hide-overflow hi">
      <router-view :key="$route.fullPath"></router-view>
      <!-- <router-view />  -->
      <v-footer class="coll">
        <v-layout row wrap align-center>
          <v-flex xs12>
             
            <div class="white--text ml-3">
              Made with
              <v-icon small class="black--text">mdi-heart-outline</v-icon> by
              <a class="white--text" href="mariah.tech" target="_blank">Mariah</a>
              using
              <a class="white--text" href="https://vuejs.org/">Vue.js</a>
            and
            <a class="white--text" href="https://vuetifyjs.com/en/">Vuetify</a>
            </div>
           
          </v-flex>
        </v-layout>
      </v-footer>
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
.coll{
  background-color: #2c9b91 !important;
}
</style>
