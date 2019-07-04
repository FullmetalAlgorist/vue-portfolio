<template>
  <core-section id="works">
    <abstract-4 />
    <core-heading v-text="'Recent Work!'" />
    <v-container grid-list-xl>
        
    <v-layout wrap>
      <v-flex
        v-for="site in sites"
        :key="site.id"
        xs12
        md6
        
      >
        <site
         :value="site"
          dense
       
        />
        <!-- :understate="!game.installed"
           
          static
          show-action
           :value="site" -->
      </v-flex>
    </v-layout>
  </v-container>
    <!-- <h1>hi</h1>
    <v-layout
      mb-5
      wrap
    >
      <v-flex>


      </v-flex>
    </v-layout> -->
   
    
  </core-section>
</template>

<script>
  export default {
    components: {
       Abstract4: () => import('@/components/Abstract4'),
       Site: () => import('@/components/Site')
    },
// :src="require(`@/assets/clients/${value.avat`)"
    data: () => ({
        sites: [
          {
            src: require('@/assets/clients/Screen.png')
          },
          {
            src: require('@/assets/clients/roboto.png')
          },
          {
             src: require('@/assets/clients/p.png')
          }
        ]
    })
  }
</script>
<style lang="scss">
    .redbox{
        background-color: red;
        
    }
</style>