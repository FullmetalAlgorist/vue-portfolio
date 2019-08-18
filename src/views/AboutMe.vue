<template>
  <core-section id="about-me">
    <v-layout align-center justify-center wrap>
      <abstract-1 />
      <v-flex xs12 sm7 justify-end align-center>
        <section>
          <core-heading v-text="'Who I am.'" />
          <v-layout wrap align-center>
            <core-text class="ma-1">
              <p class="title font-weight-light  font-italic aboutMe" v-text="schema.basics.summary" />
              <br>
              <p class="pl-5 aboutMe love font-weight-light title font-italic"
              >I love to live on the edge of nature and technology.</p>
            </core-text>
            <v-flex class="text-xs-center xs12" :pb-4="$vuetify.breakpoint.smAndDown">
              <v-btn
                @click="$vuetify.goTo('#contact')"
                class="font-weight-light"
                color="primarydark black--text"
              >Contact Me!</v-btn>
            </v-flex>
          </v-layout>
        </section>
      </v-flex>
      <v-flex xs12 sm5 class="text-xs-center" align-center justify-center>
        <v-img max-width="450" :src="me" class="me">
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <spring-spinner :animation-duration="3000" :size="60" color="white" />
            </v-layout>
          </template>
        </v-img>
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
    me: require("@/assets/realFinalLow.png")
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
    let img = new Image();
    img.src = require("@/assets/realFinalLow.png");
  },
  destroyed() {
  },
  methods: {
    handleScroll() {
      let top;
      let bottom;
      if (this.$vuetify.breakpoint.xs) {
        top = 1335;
        bottom = 966;
      } else {
        top = 1000;
        bottom = 630;
      }
      let OldRange = top - bottom;
      let NewRange = 62 - 0;
      let NewValue;
      let newS;
      //update this based on screen size (mobile and sm work)
      //when window.scrollY goes above 966 updates this.spot to a corresponding value(00-61) till 1335
      //so first I convert 966-1335 to 0-61 then format to two digit string and update spot
      if (window.scrollY > bottom && window.scrollY < top) {
        NewValue = Math.floor(
          ((window.scrollY - bottom) * NewRange) / OldRange
        );
        newS = NewValue.toString();
        if (NewValue < 10) {
          newS = "0" + newS;
        }
        this.spot = newS;
      }
    },
    preloadImage(url) {
      let img = new Image();
      img.src = url;
    },
    toCode() {
      this.$route.push("https://codepen.io/akcrew/");
    }
  }
};
</script>

<style lang="scss" scoped>
.subheading {
  margin-bottom: -10px;
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
</style>
