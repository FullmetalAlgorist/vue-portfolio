<template>
  <core-section id="about-me">
    <v-layout align-center justify-center wrap>
      <abstract-1 />
      <v-flex xs12 sm7 justify-end align-center>
        <section>
          <core-heading v-text="'Who I am.'" />
          <v-layout wrap align-center>
            <core-text class="m-2">
              <p v-text="schema.basics.summary" />
              <p
                class="pl-5 subheading font-weight-light font-italic"
              >I love to live on the edge of nature and technology.</p>
            </core-text>
            <v-flex pt-3 class="text-xs-center xs12" :pb-4="$vuetify.breakpoint.smAndDown">
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
    // currentImage()  {return this.imag},
    // blah() {
    //   return 'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/0'+this.spot+'.png'
    // }
  },
  created() {
    //   window.addEventListener('scroll', this.handleScroll);
    //   // this.$nextTick(this.pinContainerScene)
    //   let how;
    //  for(let i=0; i<62; i++){
    //    how = i.toString();
    // if (i < 10){
    //     how = '0'+how;
    // }
    let img = new Image();
    img.src = require("@/assets/realFinalLow.png");
    // this.preloadImage(require('@/assets/realFinalLow.png'));
    // }
    //  ocean wildlife nature driftwood

    // .src = this.images[this.obj.curImg];
    //      this.$gsap.TweenMax.to('.whatever', 0.5,
    //      {
    //        curImg: images.length -1,
    //        roundProps: "curImg",
    //        repeat: 3,
    //        immediateRender: true,
    //       ease: Linear.easeNone,
    //       onUpdate: function() {
    //         $("#myimg")
    //       }
    //      })
    //  const scene = new this.$scrollmagic.Scene()
  },
  destroyed() {
    // Destroy ScrollMagic when our component is removed from DOM
    //this.$ksvuescr.$emit('destroy')
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
    //      pinContainerScene () {

    //          //this.$refs.imagine.src = this.images[this.obj.curImg];
    //  let memememe = new this.$gsap.TweenMax.to(this.obj, 2, {
    //        curImg: this.images.length -1,
    //        roundProps: "curImg",
    //        repeat: 0,
    //        immediateRender: true,
    //       onUpdate: () => {this.imag = this.images[this.obj.curImg]}
    //         //this.$refs.imagine.src = this.images[this.obj.curImg]
    //       })

    // let controller = new this.$scrollmagic.Controller();
    //        let scene = new this.$scrollmagic.Scene({
    //         triggerElement: "#trigger",
    //         duration: 600
    //       })
    //       .addTo(controller)
    //       .setTween(memememe)

    //  this.$ksvuescr.$emit('addScene', 'pinContainerScene', scene)

    //      },
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
</style>
