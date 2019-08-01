<template>
  <core-section
    id="skills"
    justify-space-between
    wrap 
    >
    <abstract-2 />
   <v-flex
      xs12
      sm7
      md4>
        <core-heading>What I know.</core-heading>
         <!-- v-bind:style='{"border":"2px solid black"}'   :font="'70px monaco'"-->
       <v-flex >
       <blockquote >
          <p class="title font-weight-light font-italic">
           I've focused on the technologies that I currently prefer, but know quite a few more, and love learning new things!</p><br>
          <footer class="text-xs-center">
            <v-btn class="font-weight-light" color="primarydark black--text">
              download résumé 
            </v-btn>
          </footer>
        </blockquote>
       </v-flex>
   </v-flex>
         <v-flex
         mb-4
         pt-4
      sm5
      md4
      
         >
       <v-flex text-xs-center>
       <tags-ball
v-bind:style='{"border":"none"}'
 :color="'#ffffff'" :width="300" :radius="60" :tags='tags'/>
       </v-flex>
         <!-- //style="max-width: 230px;"  -->
        
         </v-flex>
    <v-flex
      xs12
      md3
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
  </core-section>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'
 import TagsBall from 'vue-tags-ball'
  export default {
   
    data(){
      return{
tags: ["Nuxt.js", "Javascript", "Vue.js", "Node.js", "Vuetify.js","GIT"]
      }
    },
    components: {
      Abstract2: () => import('@/components/Abstract2'),
      EducationCard: () => import('@/components/EducationCard'),
      Skill: () => import('@/components/Skill'),
      List: () => import('@/components/tagList'),
      TagsBall
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
