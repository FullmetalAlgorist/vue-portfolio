<template>
  <core-section 
  id="works"
  justify-space-between
  >
   <abstract-6 />
    <abstract-4 /> 
    <abstract-7 />
      <v-flex
      xs12
      sm6>
        <core-heading>Recent Works</core-heading>
        <p class="subheading font-weight-light font-italic">
          Here are some recent projects I've spent time on, click an image to launch the app!
        </p>
       </v-flex>
      <v-flex
      xs12
      sm5
      mb-5
      mt-2
      text-xs-center>
        <v-layout
        justify-center >
        <v-hover>
          <v-card class="gitCard"  
          :color="`${hover ? 'rgba(65,223,213,.42)' : 'rgba(31,40,51,.57)'}`"
          href="https://github.com/FullmetalAlgorist"
          slot-scope="{ hover }"
           elevation="20">
            <v-card-title primary-title>
              <blockquote
              style="max-width: 330px;">
              <div >
                 <v-icon class="gitMe pulse-button" >mdi-github-circle</v-icon>
                <p class="justText headline font-weight-light font-italic">
                  All of my code is public (including the code for this page!), want to see how something works? Check out my github.
                </p>
                </div>
              </blockquote>
            </v-card-title>
          </v-card>
        </v-hover>
        </v-layout>
      </v-flex>
        
      <v-layout
      v-for="site in schema.sites"
      :key="site.id"
      justify-space-between wrap>
        <v-flex
        xs12
        md8>
          <h3 
          class="display-1 font-weight-medium mb-4 primary--text">
            {{ site.title }}
          </h3>
          <!-- <v-img :src="`https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/sites/appDemo.png`"></v-img>      -->
          <a :href="site.link">
            <v-img 
            class="site" 
            :src="site.src"
            :lazy-src="require('@/assets/'+ site.outline +'Outline.png')">
               <template v-slot:placeholder>
                        <v-layout
                          fill-height
                          align-center
                          justify-center
                          ma-0>
                      <!-- <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular> -->
                        <fingerprint-spinner
                          :animation-duration="3000"
                          :size="128"
                          color="#000000"/>
                      </v-layout>
                    </template>
            </v-img>
          </a>
             </v-flex>
        <v-flex
        xs12
        md3>
          <h3 class="headline font-weight-medium mb-3 white--text">
            {{ site.infoTitle }}
          </h3>
          <p class="subheading font-weight-light font-italic">{{ site.infoText1 }}</p>
          <p class="subheading font-weight-light font-italic">  {{ site.infoText2 }}</p>
          <h3 class="headline font-weight-medium mb-3 white--text">
            {{site.nerdTitle}}
          </h3>
        <p class="subheading font-weight-light">{{ site.nerds }}</p>
        </v-flex>
      </v-layout>
  </core-section>
</template>

<script>
 import {
    mapState
  } from 'vuex'
  import { FingerprintSpinner } from 'epic-spinners'


  export default {
    components: {
      Abstract6: () => import('@/components/Abstract6'),
       Abstract4: () => import('@/components/Abstract4'),
         Abstract7: () => import('@/components/Abstract7'),
       FingerprintSpinner
    },
    data: () => ({
      // card: require('@/assets/abstract22.png'),
      //  src1: require(schema.sites.src)
        
    }),
      computed: {
      ...mapState('app', ['schema'])
    },
    methods:{
      toSite(){
        // this.$router.push('www.google.com');
      }
    }
  }
</script>
<style scoped lang="scss" >
   .gitMe{
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
.pulse-button:hover 
{
  -webkit-animation: none;-moz-animation: none;-ms-animation: none;animation: none;
color:black;
}

@-webkit-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(249, 249, 249, 0);}}
@-moz-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(238, 232, 232, 0);}}
@-ms-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(235, 227, 226, 0);}}
@keyframes pulse {to {box-shadow: 0 0 0 45px rgba(230, 223, 222, 0);}}

.gitCard{
height: 170px;
}
.gitMe{
 z-index: -1;
 
align-content: center;
text-align: center;
opacity: .4;
}
.justText{
color: rgba(255, 255, 255, 0.906);
margin-top: -150px;
  width: 330px;
}
.site{
  margin-bottom: 30px;
 }
</style>