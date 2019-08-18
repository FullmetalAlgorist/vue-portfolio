<template>
  <core-section
    id="skills"
    justify-space-between
    wrap 
    align-center
    >
    <abstract-2 />
   <v-flex
      xs12
      sm7
      pr-4
      >
        <core-heading>What I know.</core-heading>
         <!-- v-bind:style='{"border":"2px solid black"}'   :font="'70px monaco'"-->
       <v-flex >
          <v-card class="mb-4 second" elevation="20">
         <v-card-title>
            <blockquote>
              <div>
                <p class=" font-weight-light nothing">
           I currently prefer Vue (Nuxt with Vuex + Vuetify) for front end development and a backend powered by Node, Express and MongoDB or Firebase, with Axios to setup API calls. </p><br> 
            <p class="subtitle font-weight-light nothing ">I have a background in Object Oriented Programming, but am very interested in implementing emerging web technologies. I love to learn new things!</p>
              </div>
            </blockquote>
</v-card-title>
        </v-card>

         <!-- on small and up... pl-4 pb-4 for this flex ^ -->
       <blockquote >
         
          <!-- <footer class="text-xs-center">
            <v-btn class="font-weight-light" color="primarydark black--text">
              download résumé 
            </v-btn>
          </footer> -->
        </blockquote>
       </v-flex>
   </v-flex>
         <!-- <v-flex
         mb-4
         pt-4
      sm5
      lg4
      :style="{ marginTop: $vuetify.breakpoint.lgAndUp ?  '-100px' : '0'}"> -->
       <!-- <v-flex text-xs-center>
       <tags-ball
          v-bind:style='{"border":"none"}'
 :color="'#ffffff'" 
 :width="300" 
 :radius="70" 
 :tags='tags'/>
       </v-flex> -->
         <!-- //style="max-width: 230px;"  -->
        
         <!-- </v-flex> -->
        
    <v-flex
      xs12
      sm5
      >
       <!-- <v-layout justify-center align-center> -->
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
        <!-- </v-layout> -->
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
 tags: ["Nuxt", "JavaScript", "Vue.js", "Node.js", "Vuetify.js","GIT", "Sass", "GreenSock"]
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
.nothing{
  font-size: 1.2em;
}
.second {
  background-color: #161d25ad !important;
  //  opacity: 0.72 !important;
  border-radius: 1%;
}
</style>
