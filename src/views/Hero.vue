<template>
  <div>
    <transition name="fade">
      <div  class="scroll-downs">
        <div v-if="blah || load" class="mousey">
          <div class="scroller"></div>
        </div>
              <orbit-spinner v-else
  :animation-duration="1200"
  :size="85"
  color="white"
/> 
      </div>
    </transition>

    <div class="circle" :style="{ height: $isMobile() ? winHeight+'px' : '100vh'}">
      <v-layout
        fill-height
        justify-start
        align-end
        text-xs-left
        :pa-5="$vuetify.breakpoint.mdAndUp"
        :pa-3="$vuetify.breakpoint.smAndDown"
        class="ppp"
      >
        <div>
          <h1
            :class="`display-${$vuetify.breakpoint.mdAndUp ? '4' : '3'}`"
            class="display-4 name text-uppercase trial2--text"
            v-text="schema.basics.name"
            :style="{ fontSize: $isMobile() ? '568% !important' : '700% !important'}"
          >
            <!-- :style="{ width: $isMobile() ? '600%' : '700%'}" -->
            <!-- :class="`display-${$vuetify.breakpoint.mdAndUp ? '4' : '3'}`" -->
          </h1>

          <div
            :class="`display-${$vuetify.breakpoint.mdAndUp ? '3' : '1'}`"
            class="text-uppercase label"
            v-text="schema.basics.label"
            :style="{ fontSize: $isMobile() ? '27px !important' : '34px !important'}"
          />
        </div>
      </v-layout>
    </div>
  </div>
</template>

<script>
// Utilities
import { mapState } from "vuex";
import { OrbitSpinner } from 'epic-spinners'
export default {
props: {
  load: Boolean
},
    data() {
    return {
      imag: "",
      blah: false,
      
    };
  },
  computed: {
    ...mapState("app", ["schema"]),
    winHeight() {
      //console.log('vh: ', vh);
      console.log("innerHeight: ", window.innerHeight);
      return window.innerHeight * 0.01 * 100;
    }
  },
  components: {
    CoreDrawer: () => import("@/components/core/Drawer"),
  OrbitSpinner
  },
  methods: {},
  created() {
    //  let img = new Image;
    //  img = 'https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/frontPage/rippleMeLow.jpg';
    // this.imag = img;
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    // let vh =
    // Then we set the value in the --vh custom property to the root of the document
    // document.documentElement.style.setProperty('--vh', `${vh}px`);
    setTimeout(() => (this.blah = true), 17000);
  }
  //
};
</script>
<style lang="scss"scoped>
.name {
  line-height: 1 !important;
  font-weight: 400;
  padding-right: 250px;
  //  font-size: 700% !important;
}
.circle {
  background-image: url("https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/frontPage/rippleMeLow.jpg");
  //  height: 100vh;
  background-size: cover;
  background-position: 63% bottom;
  //height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  // height: calc(var(--vh, 1vh) * 100);
  background-attachment: fixed;
}
.scroll-downs {
  position: absolute;
  top: 40vh;
  left: 42vw; //46vw
  // bottom: 0;
  // left: 0;
  // margin: auto;

  width: 51px;//34px;
  height: 82.5px;//55px;
}
.mousey {
  width: 4px; //3px;
  padding: 15px 22.5px; //10px 15px;
  height: 52.5px;//35px;
  border: 3px solid #1f2833;
  border-radius: 37.5px; //25?
  opacity: 0.9;
  box-sizing: content-box;
}
.scroller {
  width: 3px; //3px;
  height: 15px; //10px;
  border-radius: 25%;
  background-color: #1f2833;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% {
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
