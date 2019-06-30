<template>
  <v-layout class="sketch5 my-4" text-xs-center justify-center wrap fill-height fluid>
    <v-flex justify-space-between xs2>
      <v-btn small color="black" fab>
        <v-icon medium class="aboutME">mdi-information</v-icon>
      </v-btn>
    </v-flex>
    <v-flex justify-space-between xs2>
      <v-btn large>LINES</v-btn>
    </v-flex>
    <v-flex pr-4 pl-4 justify-end xs8>
      <v-btn>
        <v-icon>mdi-face</v-icon>
      </v-btn>
    </v-flex>
    <v-layout text-xs-center justify-center fluid fill-height justify-space-between>
      <v-flex class="tat" xs12>
        <div class="CANVAS" id="p5Canvas5"></div>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<script>
if (process.browser) {
   var wiggle = require('@/Wiggle.js');
}
export default {
    
}
</script>