<template>
  <core-section
    id="skills"
    justify-space-between
    >
    <abstract-2 />
   <!-- <v-flex
      xs12
      sm6>
        <core-heading>What I know.</core-heading>
        <p class="pt-2 subheading font-weight-light font-italic">
           <v-icon class="pr-2">mdi-camera</v-icon>
           All photographs were taken by me unless otherwise noted!
          </p>
       </v-flex> -->
       
         <!-- <v-flex
         mb-4
         pt-4
      sm5
      class="right"
         > -->
         <!-- //style="max-width: 230px;"  -->
        <!-- <blockquote
           >
          <p class="title font-weight-light font-italic">
           I've focused on the technologies that I currently prefer, but know quite a few more, and love learning new things!</p>
                  <br>
          <footer class="text-xs-center">
            <v-btn class="font-weight-light" color="primarydark black--text">
              download résumé 
            </v-btn>
          </footer>
        </blockquote>
         </v-flex> -->

    <v-flex
      xs12
      md4
    >
    <div
     v-for="(degree, i) in schema.education"
        :key="i">
      <h3 class="display-1 font-weight-medium mb-4 primary--text">
        {{ degree.title }}
      </h3>
      <education-card
        :value="degree"
      />
      </div>
    </v-flex>
    <v-flex
      xs12
      md4
    >
      <h3 class="display-1 font-weight-medium mb-4 primary--text">
        Mastered Technologies 
      </h3>
      <list />
        <div>
<info-card
  :frontType="front.type"
  :frontTitle="front.title"
  :frontData="front.graphData"
  :backTitle="back.title"
  :backData="back.message"/>
  </div>
      <!-- <skill
        v-for="(skill, i) in schema.skills"
        :key="i"
        :value="skill"
      /> -->
    </v-flex>
      <!-- </v-layout> -->
  </core-section>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'
 import InfoCard from 'vue-info-card'
  export default {
   
    data(){
      return{
 front: {
        title: 'Mastered Technologies',
        graphData: 'I am the body of a card Look what I can do!',
      },
      back: {
        title: 'Title maybe or the start of mstered tech',
        message: 'Nuxt.js  vue.js vueitfy processing javascript',
      },
      }
    },
    components: {
      Abstract2: () => import('@/components/Abstract2'),
      EducationCard: () => import('@/components/EducationCard'),
      Skill: () => import('@/components/Skill'),
      List: () => import('@/components/tagList'),
      InfoCard
    },

    computed: {
      ...mapState('app', ['schema'])
    }
  }
</script>
<style lang="scss" scoped>
.right{
  align-content: center;
  text-align: center;
}
</style>
