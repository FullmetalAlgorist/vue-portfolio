<template>
  <core-section id="about-me">
    <v-layout align-center justify-center wrap>
      <abstract-1 />
      <v-flex xs12 sm7  class="me">
        <section >
          <core-heading class="z" v-text="'Who I am.'" />
          <v-layout wrap align-center>
            <core-text class="ma-1">
              <p class="family title font-weight-light  font-italic aboutMe text-xs-center" >&nbsp; &nbsp; &nbsp; {{ schema.basics.summary }}  </p>
              <br>
              <p class=" aboutMe love font-weight-light title font-italic text-xs-center"
              >I love to live on the edge of nature and technology.</p>
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
      <v-flex xs12 sm5 class="text-xs-center" align-center justify-center>
        <v-img max-width="450" :src="me" class="me dog">
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
  margin-bottom:  -40px;
  margin-top: 10px;
}
.family{
  font-family: 'Open Sans', sans-serif !important;
}
</style>
