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
  /* .mdi-radiobox-blank {
    color:#e5a12e !important;
} */
.myApp{
  background-color: var(--v-trial1-base) !important;
}
</style>
