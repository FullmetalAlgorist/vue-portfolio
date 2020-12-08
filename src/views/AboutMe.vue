<template>
  <core-section id="about-me">
    <v-layout align-center justify-center wrap>
      <abstract-1 />
      <v-flex xs12 md6  class="z" >
          <core-heading v-text="'Who I am'" />
            <section >
          <v-layout wrap align-center justify-center>
            <core-text class="ma-1">
              <p class="font-weight-light font-italic aboutMe text-xs-center"
              :style="{ maxWidth: '650px'}"
              :class="$vuetify.breakpoint.lgAndUp ? 'headline' : 'title'"
             
              >
               {{ schema.basics.summary }}  </p>
               <v-flex class="text-xs-center xs12" >
                 <!-- :pb-4="$vuetify.breakpoint.smAndDown" -->
                  <!-- :class="expansion !== i ? 'transparent' : 'db'" -->
              <v-btn
                @click="$vuetify.goTo('#contact')"
                class="font-weight-light contactButton"
                color="primarydark black--text"
              >Contact Me!</v-btn>
            </v-flex>
            <br>
             <!-- <br> <br> -->
            </core-text>
          </v-layout>
        </section>
      </v-flex>
      <!-- :style="{ maxWidth: $vuetify.breakpoint.smOnly ?  '270px' : '340px'}" -->
       <v-flex pa-3  xs12 md5 fill-height align-center justify-center ma-0
       :style="{ maxWidth: '450px'}">
         
        <v-hover
        v-slot:default="{ hover }">
      <v-card class="r z">
        <v-container grid-list-sm fluid 
        @click="toInsta"
        :style="{ cursor: 'pointer'}">
            <v-img v-if="$isMobile()" :src="turtle2"></v-img>
            <v-img v-else class="glitch" :src="hover ? turtle2 : turtle"></v-img>
          </v-container>
        </v-card>
        </v-hover>
  <v-layout justify-center text-xs-center>
        <v-hover>
          <v-card
            class="gitCard"
            :color="`${hover ? 'rgba(65,223,213,.42)' : 'rgba(0,0,0,.28)'}`"
          
             @click="toInsta"
            slot-scope="{ hover }"
            elevation="20"
          >
            <v-card-title primary-title>
              <blockquote>
                <div>
                  <v-icon class="gitMe pulse-button">mdi-arrow-up</v-icon>
                  <p
                    class="justText headline font-weight-light font-italic pr-1"
                    :style="{ width: $vuetify.breakpoint.smOnly ?  '249px' : '249px'}"
                  >Follow the glitch turtle to check out my creative coding and motion graphics portfolio!</p>
            
                </div>
              </blockquote>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-layout>
       </v-flex>
    </v-layout>
  </core-section>
</template>
<script>
// Utilities
import { mapState } from "vuex";
import { SpringSpinner } from "epic-spinners";
export default {
  components: {
    Abstract1: () => import("@/components/Abstract1"),
    SpringSpinner
  },
  data: () => ({
    expansion: 0,
    me: require("@/assets/realFinalLow.png"),
         turtle: require('@/assets/turtleC.jpg'),
        turtle2: require('@/assets/turt_2.png')
  }),

  computed: {
    ...mapState("app", ["schema"]),
    items() {
      return this.schema.work;
    },
    socials() {
      return this.schema.basics.profiles.map(social => ({
        ...social,
        icon: this.iconMap[social.network.toLowerCase()] || "mdi-account"
      }));
    }
  },
  created() {
     let img1 = new Image();
      let img2 = new Image();
      img1.src = require('@/assets/turt_2.png');
      img2.src = require('@/assets/logoblack.png');
   
  },
  destroyed() {
  },
  methods: {
    preloadImage(url) {
      let img = new Image();
      img.src = url;
    },
    toCode() {
      this.$route.push("https://codepen.io/akcrew/");
    },
    toInsta(){
      // this.$route.push("https://akcrew-transitions.herokuapp.com/");
      
        this.$router.push('/parallax');
      },
  }
};
</script>

<style lang="scss" scoped>
.subheading {
  margin-bottom: 10px !important;
}
.z{
  z-index: 10;
}
.aboutMe{
  line-height: 130% !important;
  // max-width: 350px;
  // display: block;
}
.love{
  font-size: 1.5em !important;
}
.contactButton{
  font-size: 130%;
}
.dog{
  // margin-bottom:  -40px;
   //margin-left: 100px;
}
.family{
  font-family: 'Open Sans', sans-serif !important;
}
.r{
  border-radius: 1%;
}

.gitCard {
  margin-top: 40px;
  height: 170px;
  border-radius: 3%;
  justify-content: center;
}
.gitMe {
  z-index: -1;
  align-content: center;
  text-align: center;
  opacity: 0.4; 
  font-size: 90px !important;
  margin: 30px;
}
.pulse-button {
  z-index: 1 !important;
  position: relative;
  width: 69px;
  height: 69px;
  border: none;
  box-shadow: 0 0 0 0 rgba(249, 245, 244, 0.7);
  border-radius: 50%;
  cursor: pointer;
  -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
}
.pulse-button:hover {
  -webkit-animation: none;
  -moz-animation: none;
  -ms-animation: none;
  animation: none;
  color: black;
}

@-webkit-keyframes pulse {
  to {
    box-shadow: 0 0 0 45px rgba(249, 249, 249, 0);
  }
}
@-moz-keyframes pulse {
  to {
    box-shadow: 0 0 0 45px rgba(238, 232, 232, 0);
  }
}
@-ms-keyframes pulse {
  to {
    box-shadow: 0 0 0 45px rgba(235, 227, 226, 0);
  }
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 45px rgba(230, 223, 222, 0);
  }
}
.justText {
  color: rgba(255, 255, 255, 0.906);
  margin-top: -150px;
  font-family: "Open Sans", sans-serif !important;
  font-size: 1.6em !important;
}
</style>
