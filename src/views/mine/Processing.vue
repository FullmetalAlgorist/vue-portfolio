<template>
  <div class="wrapper">
    <v-container class="sketches">
<div class="semipolar-spinner" :style="spinnerStyle">
  <div class="ring"></div>
  <div class="ring"></div>
  <div class="ring"></div>
  <div class="ring"></div>
  <div class="ring"></div>
</div>
<div class="fingerprint-spinner">
  <div class="spinner-ring"></div>
  <div class="spinner-ring"></div>
  <div class="spinner-ring"></div>
  <div class="spinner-ring"></div>
  <div class="spinner-ring"></div>
  <div class="spinner-ring"></div>
  <div class="spinner-ring"></div>
  <div class="spinner-ring"></div>
  <div class="spinner-ring"></div>
</div>
      <radar-component/>
      <next-component/>
      <tree-component/>
      <lines-component/>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    radarComponent: () => import("@/components/sketches/Radar"),
    nextComponent: () => import("@/components/sketches/Next"),
    treeComponent: () => import("@/components/sketches/Tree"),
    linesComponent: () => import("@/components/sketches/Lines")
  }
  // methods: {
  //   callbackOnP5: function(timeStr) {
  //     this.message = timeStr;
};
</script>
<style lang= "scss" scoped>
.sketchMe {
  background-color: black !important;
  margin: 60px 0;
  border-radius: 2%;
}
.wrapper {
  /* background-image: url('~@/assets/trianglifyLarge2.png'); */
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url("~@/assets/trianglifyLarge2.png");
  background-repeat: repeat-y;
  display: cover;
}

.sketches {
  max-width: 650px;
}
/* .semipolar-spinner, .semipolar-spinner * {
      box-sizing: border-box;
    }

    .semipolar-spinner {
      height: 65px;
      width: 65px;
      position: relative;
    }

    .semipolar-spinner .ring {
      border-radius: 50%;
      position: absolute;
      border: calc(65px * 0.05) solid transparent;
      border-top-color: #0b0b0b;
      border-left-color: #000000;
      animation: semipolar-spinner-animation 2s infinite;
    }

    .semipolar-spinner .ring:nth-child(1) {
      height: calc(65px - 65px * 0.2 * 0);
      width: calc(65px - 65px * 0.2 * 0);
      top: calc(65px * 0.1 * 0);
      left: calc(65px * 0.1 * 0);
      animation-delay: calc(2000ms * 0.1 * 4);
      z-index: 5;
    }

    .semipolar-spinner .ring:nth-child(2) {
      height: calc(65px - 65px * 0.2 * 1);
      width: calc(65px - 65px * 0.2 * 1);
      top: calc(65px * 0.1 * 1);
      left: calc(65px * 0.1 * 1);
      animation-delay: calc(2000ms * 0.1 * 3);
      z-index: 4;
    }

    .semipolar-spinner .ring:nth-child(3) {
      height: calc(65px - 65px * 0.2 * 2);
      width: calc(65px - 65px * 0.2 * 2);
      top: calc(65px * 0.1 * 2);
      left: calc(65px * 0.1 * 2);
      animation-delay: calc(2000ms * 0.1 * 2);
      z-index: 3;
    }

    .semipolar-spinner .ring:nth-child(4) {
      height: calc(65px - 65px * 0.2 * 3);
      width: calc(65px - 65px * 0.2 * 3);
      top: calc(65px * 0.1 * 3);
      left: calc(65px * 0.1 * 3);
      animation-delay: calc(2000ms * 0.1 * 1);
      z-index: 2;
    }

    .semipolar-spinner .ring:nth-child(5) {
      height: calc(65px - 65px * 0.2 * 4);
      width: calc(65px - 65px * 0.2 * 4);
      top: calc(65px * 0.1 * 4);
      left: calc(65px * 0.1 * 4);
      animation-delay: calc(2000ms * 0.1 * 0);
      z-index: 1;
    }

    @keyframes semipolar-spinner-animation {
      50% {
        transform: rotate(360deg) scale(0.7);
      }
    } */

    /* second spinner below (fingerprint-spinner) */
    .fingerprint-spinner, .fingerprint-spinner * {
      box-sizing: border-box;
    }

    .fingerprint-spinner {
      height: 64px;
      width: 64px;
      padding: 2px;
      overflow: hidden;
      position: relative;
    }

    .fingerprint-spinner .spinner-ring {
      position: absolute;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top-color: #000000;
      animation: fingerprint-spinner-animation 5000ms cubic-bezier(0.680, -0.750, 0.265, 1.750) infinite forwards;
      margin: auto;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }

    .fingerprint-spinner .spinner-ring:nth-child(1) {
      height: calc(60px / 9 + 0 * 60px / 9);
      width: calc(60px / 9 + 0 * 60px / 9);
      animation-delay: calc(50ms * 1);
    }

    .fingerprint-spinner .spinner-ring:nth-child(2) {
      height: calc(60px / 9 + 1 * 60px / 9);
      width: calc(60px / 9 + 1 * 60px / 9);
      animation-delay: calc(50ms * 2);
    }

    .fingerprint-spinner .spinner-ring:nth-child(3) {
      height: calc(60px / 9 + 2 * 60px / 9);
      width: calc(60px / 9 + 2 * 60px / 9);
      animation-delay: calc(50ms * 3);
    }

    .fingerprint-spinner .spinner-ring:nth-child(4) {
      height: calc(60px / 9 + 3 * 60px / 9);
      width: calc(60px / 9 + 3 * 60px / 9);
      animation-delay: calc(50ms * 4);
    }

    .fingerprint-spinner .spinner-ring:nth-child(5) {
      height: calc(60px / 9 + 4 * 60px / 9);
      width: calc(60px / 9 + 4 * 60px / 9);
      animation-delay: calc(50ms * 5);
    }

    .fingerprint-spinner .spinner-ring:nth-child(6) {
      height: calc(60px / 9 + 5 * 60px / 9);
      width: calc(60px / 9 + 5 * 60px / 9);
      animation-delay: calc(50ms * 6);
    }

    .fingerprint-spinner .spinner-ring:nth-child(7) {
      height: calc(60px / 9 + 6 * 60px / 9);
      width: calc(60px / 9 + 6 * 60px / 9);
      animation-delay: calc(50ms * 7);
    }

    .fingerprint-spinner .spinner-ring:nth-child(8) {
      height: calc(60px / 9 + 7 * 60px / 9);
      width: calc(60px / 9 + 7 * 60px / 9);
      animation-delay: calc(50ms * 8);
    }

    .fingerprint-spinner .spinner-ring:nth-child(9) {
      height: calc(60px / 9 + 8 * 60px / 9);
      width: calc(60px / 9 + 8 * 60px / 9);
      animation-delay: calc(50ms * 9);
    }

    @keyframes fingerprint-spinner-animation {
      100% {
        transform: rotate( 360deg );
      }
    }
</style>

