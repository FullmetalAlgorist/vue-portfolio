<template>
  <core-section
    id="skills"
    justify-space-between
    >
    <abstract-2 />
   <v-flex
      xs12
      sm6>
        <core-heading>What I know.</core-heading>
        <!-- <p class="pt-2 subheading font-weight-light font-italic">
           <v-icon class="pr-2">mdi-camera</v-icon>
           All photographs were taken by me unless otherwise noted!
          </p> -->
       </v-flex>
       
         <v-flex
         mb-4
         pt-4
      sm5
      class="right"
         >
         <!-- //style="max-width: 230px;"  -->
        <blockquote
           >
          <p class="title font-weight-light font-italic">
           I've focused on the technologies that I currently prefer, but know quite a few more, and love learning new things!</p><br>
          <footer class="text-xs-center">
            <v-btn class="font-weight-light" color="primarydark black--text">
              download résumé 
            </v-btn>
          </footer>
        </blockquote>
         </v-flex>

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
      text-xs-center
    >
      <h3 class="display-1 font-weight-medium mb-4 primary--text">
        Mastered Technologies 
      </h3>
      <!-- v-bind:style='{"border":"2px solid black"}' -->
<tags-ball
v-bind:style='{"border":"none"}'
 :color="'#ffffff'"   :radius="60" :tags='tags'/>

      <!-- <list /> -->
        <!-- <div>
 <v-card >
    <v-img src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/frontPage/rippleMeLow.jpg"></v-img>
    <h1 slot="header">Canyons</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </v-card>
  </div> -->
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
