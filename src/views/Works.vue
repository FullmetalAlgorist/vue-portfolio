<template>
  <core-section id="works">
     <v-layout align-center justify-center wrap  class="me">
    <abstract-4 />
    <abstract-6 />
    <v-flex xs12 sm6>
      <core-heading>Recent Work</core-heading>
      <p
        class="single font-weight-light font-italic"
      >Here are some recent projects I've spent time on, click an image to launch the site!</p>
    </v-flex>
    <v-flex xs12 sm5 mb-5 mt-2 text-xs-center>
      <!-- <v-layout justify-center>
      </v-layout> -->
    </v-flex>

             <v-flex v-for="site in schema.sites" :key="site.id" sm12>                           
    <v-layout  justify-space-between wrap align-center>  
  
      
      <v-flex  xs12 md6 :class="`${(site.id==='2') ? 'order-md2' : ''}`">
        <h3 class="display-2 font-weight-medium mb-4 primary--text">{{ site.title }}</h3>
    
        <a  :href="site.link" target="_blank">
          <v-img
            :max-width="(site.id==3) ?  600 : 600"
            class="site"
            :src="site.src"
            :lazy-src="require('@/assets/'+ site.outline +'Outline.png')"
          >
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <fingerprint-spinner :animation-duration="3000" :size="128" color="white" />
              </v-layout>
            </template>
          </v-img>
        </a>
      </v-flex>
                            
      <v-flex xs12 mb-3 :class="`${(site.id==='3') ? 'md5' : 'md5'}`">
        <!-- <div > -->
         
          
      
         <!-- <a  :href="site.link" target="_blank"> -->
           <!-- src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/works/dharmaPage.png" -->
          <!-- <a  :href="site.link" target="_blank"> -->
          <v-img
            :max-width="(site.id==3) ?  600 : 750"
            class="site vcard"
            
           :src="site.src2"
          >
  <v-expansion-panel class="bb">
          <v-expansion-panel-content class="second hover font-weight-light elevation-20">
            <div slot="header" style="maxHeight: 38px;" class="f text-uppercase font-weight-light">{{site.nerdTitle}}</div>
            <div class="pa-3 f2">&nbsp;&nbsp;&nbsp;&nbsp; {{ site.nerd1 }}</div>
            <div class="pa-3 f2">&nbsp;&nbsp;&nbsp;&nbsp; {{ site.nerd2 }}</div>
                <v-btn
                :href="site.link"
                target="_blank"
                class="font-weight-light contactButton"
                color="primarydark black--text"
                large
              >Launch Site!
              </v-btn>
              <!-- </router-link> -->
          </v-expansion-panel-content>
           
           </v-expansion-panel>

  </v-img> 
<!-- </a> -->
            <!-- </div> -->
         <!-- </a> -->
        <!-- <v-expansion-panel :min-width="(site.id==3) ?  600 : 750">
          <v-expansion-panel-content class="second elevation-20 App">
            <div slot="header" class="display-1 font-weight-light">About the application</div>
            <blockquote>
              <div class="pa-3">
                <p
                  class="priority font-weight-light font-italic"
                >&nbsp;&nbsp;&nbsp;&nbsp;{{ site.infoText2 }}</p>
                <p
                  class="priority font-weight-light font-italic"
                  v-if="site.id==='2'"
                >&nbsp;&nbsp;&nbsp;&nbsp;{{ site.infoText3 }}</p>
              </div>
            </blockquote>
          </v-expansion-panel-content>
        </v-expansion-panel> -->

    
         
      </v-flex>
     
    </v-layout>
 </v-flex>
 </v-layout>
  </core-section>
</template>

<script>
import { mapState } from "vuex";
import { FingerprintSpinner } from "epic-spinners";

export default {
  components: {
    Abstract6: () => import("@/components/Abstract6"),
    Abstract4: () => import("@/components/Abstract4"),
    Abstract7: () => import("@/components/Abstract7"),
    FingerprintSpinner
  },
  data: () => ({
    // card: require('@/assets/abstract22.png'),
    //  src1: require(schema.sites.src)
  }),
  computed: {
    ...mapState("app", ["schema"])
  },
  methods: {
    toSite() {
      // this.$router.push('www.google.com');
    }
  }
};
</script>
<style scoped lang="scss" >
.bb{
  margin-top: -48px;
 
}
.f{
  font-size: 17px;
  
  //line-height: 20px;
}
.f2{
  font-size: 16px;
  line-height: 28px;
}
.expanse{
  position: absolute;
}
.gitMe {
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

.gitCard {
  height: 170px;
  border-radius: 3%;
}
.gitMe {
  z-index: -1;
  align-content: center;
  text-align: center;
  opacity: 0.4;
}
.justText {
  color: rgba(255, 255, 255, 0.906);
  margin-top: -150px;
  font-family: "Open Sans", sans-serif !important;
  font-size: 1.6em !important;
}
.site {
  // padding-top:-30px;
  // top: 45px;
  margin-top: 35px;
  margin-bottom: 30px;
}
.vcard {
  // top: 45px !important;
  overflow: visible;
}
.second {
  // background-color: #161d25ad !important;
  border-radius: 2%;
  font-family: "Open Sans", sans-serif;

  //  font-size: 1.3em !important;
  //  opacity: 0.72 !important;
}
.single {
  font-size: 1.3em;
  font-family: "Open Sans", sans-serif;
}
// #008078a8
// #2c2c2c78 dark gray maybe for top bit
.v-expansion-panel__container {
   background-color: #000000c4 !important;
  // opacity: 0.72 !important;
  z-index: 1;
  border-radius: 1%;
}
.v-expansion-panel{
  text-align: center;
  //min-height: 38px;
}
.v-image__image {
    //background-size: cover;
    top: 47px !important;
}
.App {
  background-color: #008078a8 !important;
}
.me {
  z-index: 10;
}
.priority {
  font-size: 17px;
}
.mapped {
  // transform: ;
  // max-width: 110%;
  // object-fit: cont;
}
.v-expansion-panel-header{

max-height: 38px !important;
}

.contactButton{
   font-size: 130%;
margin-bottom: 20px;
}
</style>