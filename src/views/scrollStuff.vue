<template>
  
</template>
<script>
export default {
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
    }}
}
</script>
