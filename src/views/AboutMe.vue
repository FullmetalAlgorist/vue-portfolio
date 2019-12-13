<template>
  <core-section id="about-me">
    <v-layout align-center justify-center wrap>
      <abstract-1 />
      <v-flex xs12 sm7  class="me">
        <section >
          <core-heading class="z" v-text="'Who I am.'" />
          <v-layout wrap align-center>
            <core-text class="ma-1">
              <p class=" title font-weight-light  font-italic aboutMe text-xs-center" >&nbsp; &nbsp; &nbsp; {{ schema.basics.summary }}  </p>
              <br>
              <p class="family aboutMe love font-weight-light title font-italic text-xs-center"
              >If you are here for my generative art portfolio, follow the turtle!</p>
            </core-text>
            <v-flex class="text-xs-center xs12" :pb-4="$vuetify.breakpoint.smAndDown">
              <v-btn
                @click="$vuetify.goTo('#contact')"
                class="font-weight-light contactButton"
                color="primarydark black--text"
              >Contact Me!</v-btn>
            </v-flex>
          </v-layout>
        </section>
      </v-flex>
       <v-flex pa-3  xs12 sm5 fill-height align-center justify-center ma-0>
         
        <v-hover
        v-slot:default="{ hover }">
      <v-card class="r">
        <v-container grid-list-sm fluid 
        @click="toInsta"
        :style="{ cursor: 'pointer'}">
            <v-img v-if="$isMobile()" :src="turtle2"></v-img>
            <v-img  class="glitch" :src="hover ? turtle2 : turtle"></v-img>
          </v-container>
        </v-card>
        </v-hover>
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
        this.$router.push('/insta');
      },
  }
};
</script>

<style lang="scss" scoped>
.subheading {
  margin-bottom: 10px !important;
}
.me {
  z-index: 10;
}
.aboutMe{
  line-height: 130% !important;
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
</style>
