<template>
  <core-section id="skills" justify-space-between wrap align-center>
    <abstract-2 />
    <v-flex xs12 sm7  px-2 class="me">
      <core-heading>What I know.</core-heading>
      <v-layout justify-center align-center>
        <v-card class="mb-4 second restrict" elevation="20">
          <v-card-title>
            <blockquote >
              <div>          
                <p class="font-weight-light nothing text-xs-center">
                  hello
                  I am a fullstack developer and web consultant.  I advise clients based on their budget and needs, to choose the best tech for each job. 
                  I can help modify a theme on an existing framework like 
                    <span class="tech">Weebly</span> or
                  <span class="tech">Squarespace</span> 
                 to get you up and running quickly and cheaply.
                  Or I can build you a bautiful custom website from scrath using 
       <span class="tech">Vue</span> (<span class="tech">Nuxt</span> with
                  <span class="tech">Vuex</span> +
                  <span class="tech">Vuetify</span>) for front end development and a backend powered by
                  <span class="tech">Node</span>,
                  <span class="tech">Express</span> and
                  or anything inbetween using wordpress developer tools. 
                  Contact me now for a free 30 min consult on the scope of your web needs!
               <span class="techy">I love implementing emerging technologies!</span>
                </p>
                  <p class="nothing text-xs-center">
                    <v-icon>mdi-robot</v-icon> &nbsp;&nbsp;I use
                  <span class="tech">TouchDesigner</span> and <span class="tech">Processing </span> for visual design.
              </p>
              </div>
            </blockquote>
          </v-card-title>
        </v-card>
        <!-- on small and up... pl-4 pb-4 for this flex ^ -->
        <!-- <blockquote> -->
          <!-- <footer class="text-xs-center">
            <v-btn class="font-weight-light" color="primarydark black--text">
              download résumé 
            </v-btn>
          </footer>-->
        <!-- </blockquote>
      </v-layout>
    </v-flex>
    <v-flex xs12 sm5 px-3>
      <div v-for="(degree, i) in schema.education" :key="i">
        <h3 class="display-1 me font-weight-medium mb-4 primary--text">{{ degree.title }}</h3>
        <education-card :value="degree" />
      </div>
    </v-flex> -->
    
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
        "Sass",
        "GreenSock"
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
</style>
