<template>
  <core-section id="skills" class="skillsClass" justify-space-between wrap align-center>
    <v-flex xs12 px-3>
    <core-heading>What I know.</core-heading>
    </v-flex>
    <abstract-2 />
   
    <v-flex sm12 md7  lg4 px-2 class="me">
      <!-- <core-heading>What I know.</core-heading> -->
      <v-layout justify-center align-center>
        <v-card class="mb-4 second restrict" elevation="20">
          <v-card-title>
            <blockquote >
              <div>          
                <p class="font-weight-light nothing text-xs-center">
                  I am comfortable with a variety of programming languages and software, 
                  I consult with clients to choose the best tech toolkit for each job based on their budget and project needs.
                  I can help modify a theme on an existing framework like 
                    <span class="tech">Weebly</span> or
                  <span class="tech">Squarespace</span> 
                 to get you up and running quickly and cheaply.
                  Or I can build you a beautiful custom website from scratch (like this page!) using 
                  <span class="tech">Vue</span>,
                  <span class="tech">Node</span> and
                  <span class="tech">Express</span>.
                  As well as anything in between using 
                  <span class="tech">Wordpress Developer Tools</span>.
                  Contact me now for a free 30 min consult on the scope of your website needs!
               <span class="techy">I love implementing emerging technologies!</span>
                </p>
                
              </div>
            </blockquote>
          </v-card-title>
        </v-card>
        </v-layout>
        </v-flex>
        <!-- on small and up... pl-4 pb-4 for this flex ^ -->
        <!-- <blockquote> -->
          <!-- <footer class="text-xs-center">
            <v-btn class="font-weight-light" color="primarydark black--text">
              download résumé 
            </v-btn>
          </footer>-->
        <!-- </blockquote>
      
    -->
   <!-- v-bind:style='{"min-width":"300px"}' -->
   <!-- :width='400'  :radius="90" -->
    
<v-flex px-3 sm12 md5 lg4>
      <div v-for="(degree, i) in schema.education" :key="i">
        <h3 class="display-1 me font-weight-medium mb-4 primary--text">{{ degree.title }}</h3>
        <education-card :value="degree" />
      </div>
    </v-flex> 
     <v-flex px-3 sm12 lg4>
          <v-layout justify-center align-center>
   <tags-ball  v-bind:style='{"border":"none", "width":"300px", "height":"300px"}' font="24px monaco" color="#4db6ac" radius="50" width="200"  :tags='tags'/>
          </v-layout>
     </v-flex>
  </core-section>
</template>

<script>
// Utilities
import { mapState } from "vuex";
import TagsBall from "vue-tags-ball";
export default {
  data() {
    return {
      tags: [
        "Nuxt",
        "JavaScript",
        "Vue.js",
        "Node.js",
        "Vuetify.js",
        "GIT",
        "WordPress",
        "TouchDesigner",
        "Gimp",
        "VSCode"
      ]
    };
  },
  components: {
    Abstract2: () => import("@/components/Abstract2"),
    EducationCard: () => import("@/components/EducationCard"),
    Skill: () => import("@/components/Skill"),
    List: () => import("@/components/tagList"),
    TagsBall
  },
  computed: {
    ...mapState("app", ["schema"])
  }
};
</script>
<style lang="scss" scoped>
.right {
  align-content: center;
  text-align: center;
}
.nothing {
  font-size: 1.2em;

}
.something {
   font-size: 1.3em;
}
.second {
  background-color: #161d25ad !important;
  //  opacity: 0.72 !important;
  border-radius: 1%;
}
.tech {
  // font-family: 'Source Code Pro', monospace;
  // font-family: 'Cutive Mono', monospace;
  // font-family: 'Poiret One', cursive;
  font-family: "Open Sans", sans-serif;
  font-size: 110%;
  font-weight: bold;
  // font-family: 'Open Sans Condensed', sans-serif;
}
.techy {
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  // font-size: 110%;
}
.me {
  z-index: 10;
}
.restrict{
    max-width: 531px;
}
.skillsClass{
  padding-bottom: 0 !important;
}
</style>
