<template>
  <core-section id="glitch">
    <!-- <abstract-3 /> -->
      <v-flex xs12 sm6 >
          <v-layout justify-space-between>
      <core-heading>Generative art</core-heading>
      </v-layout>
      </v-flex>
    <v-flex xs12 sm6>
      <v-layout justify-space-between>
        <blockquote
          style="max-width: 450px;"
        >
          <p class="subheading font-weight-light font-italic">
      I work with a computer to intentionally introduce randomness to naturally occuring algorithms, this occasionally leads to visually pleasing results.
          </p>
          <footer class="text-xs-center foot">
         Here are some of those results!
          </footer>
        </blockquote>
      </v-layout>
    </v-flex>
    
   <v-layout 
    @click="toPhotos"
    :style="{ cursor: 'pointer'}"
    >
    <v-flex xs12 sm12 >
        <v-hover
        v-slot:default="{ hover }">
      <v-card>
        <v-container grid-list-sm fluid >
            <v-img class="glitch" :src="hover ? turtle2 : turtle"></v-img>
          </v-container>
        </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </core-section>
</template>


<script>
import { FingerprintSpinner } from 'epic-spinners'
import { CirclesToRhombusesSpinner } from 'epic-spinners'
  export default {
    components: {
      Abstract3: () => import('@/components/Abstract3'),
      FingerprintSpinner,
      CirclesToRhombusesSpinner
    },
computed:{
      med(){
        return this.$vuetify.breakpoint.mdAndUp;
      }
    },
    data: () => ({
      turtle: require('@/assets/turtleC.jpg'),
                turtle2: require('@/assets/turt_2.png')
    }),
    methods: {
      toPhotos(){
        this.$router.push('/photography');
      }
    }
  }
</script>

<style lang= "scss" scoped>
  .v-carousel__controls {
    background: transparent;
  }
  .heading{
    display: block;
  }
  .foot{
    padding-bottom: 20px;
  }
  .glitch{
      /* width: 90vw; */
  }
  .v-sheet {
    background-color: rgba(0,0,0,.28) !important;
}
</style>
