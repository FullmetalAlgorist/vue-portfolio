<template>
  <div class="parralax">
    <v-content>
      <section>
        <video-background
          src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/reblob4Small.mp4"
          poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/blob.png"
          class="vid"
          playsWhen="canplaythrough"
        ></video-background>

        
      </section>
      <section>
        <v-container grid-list-xl class="content">
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 lg4 class="z">
              <v-card class="elevation-0 transparent">
                <core-heading v-text="'Welcome to my portfolio'" />

                <v-layout wrap align-center justify-center>
                  <core-text class="ma-1">
                    <p
                      class="title font-weight-light font-italic aboutMe text-xs-center"
                    >I love to expirement with cool looking algoritms and generative natural phenomemon.  Often rendered in real time and occasionally interactive</p>
                    <v-flex class="text-xs-center xs12">
                      <v-btn
                        class="font-weight-light contactButton"
                        color="primarydark black--text"
                      >Contact Me!</v-btn>
                    </v-flex>
                    <br />
                    <!-- <br> <br> -->
                    <p
                      class="family aboutMe love font-weight-light title font-italic text-xs-center"
                    >
                    
                     <v-icon>mdi-robot</v-icon> &nbsp;&nbsp;
                     <br />I'm currently using 
                  <span class="tech">TouchDesigner</span> and <span class="tech">Processing </span> for visual design.
                      </p>
                      <!-- <p class="nothing text-xs-center">
                    <v-icon>mdi-robot</v-icon> &nbsp;&nbsp;I'm currently using 
                  <span class="tech">TouchDesigner</span> and <span class="tech">Processing </span> for visual design.
                      </p> -->
                  </core-text>
                </v-layout>
              </v-card>
            </v-flex>

            <!-- SUPERFORMULA!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
                  <v-flex xs12 lg4 md6 class="sletchMe">
                    <!-- <v-card class="elevation-0 transparent">  -->
                      <radar-component />
                    <!-- </v-card> -->
                  </v-flex>
            <!-- SUPERFORMULA!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
            <v-flex xs12 lg4 md6>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">mdi-color_lens</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Here is a live processing sketch</div>
                </v-card-title>
                <v-card-text>
                <p class="family aboutMe love font-weight-light title font-italic text-xs-center">
                   Try adding or subtracting vertices, or randomizing the formula completely by clicking GO and starting over!
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>

            <!-- --- -->
          </v-layout>
        </v-container>
      </section>
      <section>
 
       
        <video-background
          class="vid"
          src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/goodOne.mp4"
          poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/goodOne.png"
          playsWhen="canplaythrough"
        ></video-background>
    
      </section>

      <section>




        <v-container grid-list-xl class="content">
          <v-layout row wrap justify-center class="my-5">
               <v-flex xs12 sm4 >
              <v-card class="mb-4 second restrict" elevation="20">
                <v-card-title>
                  <blockquote>
                    
                    <p class="title font-weight-light font-italic aboutMe text-xs-center">      Generative Art refers to any art practice where the artist uses a system, such as a set of natural language rules a computer program, a machine, or other procedural invention, which is then set into motion with some degree of autonomy to or resulting in a complex work of art (Philip Galanter).</p>
           
                  </blockquote>
                </v-card-title>
              </v-card>
            </v-flex>
     
              <!-- <video width="100%" height="100%" autoplay controls>
  <source src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/Tychoesque.mp4"  type="video/mp4">
              </video> -->
    
                <v-flex xs12 sm6 text-xs-center>

          <video-background
          class="vid"
          src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/Tychoesque.mp4"
          poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/one.png"
          playsWhen="canplaythrough"
        ></video-background>
   </v-flex>
        <v-flex xs12 sm6 text-xs-center>

          <video-background
          class="vid"
          src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/rainbowSmall.mp4"
          poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/two.png"
          playsWhen="canplaythrough"
        ></video-background>
   </v-flex>
        <v-flex xs12 sm4 >
              <v-card class="mb-4 second restrict" elevation="20">
                <v-card-title>
                  <blockquote>
                    
                    <p class="title font-weight-light font-italic aboutMe text-xs-center">      Generative Art refers to any art practice where the artist uses a system, such as a set of natural language rules a computer program, a machine, or other procedural invention, which is then set into motion with some degree of autonomy to or resulting in a complex work of art (Philip Galanter).</p>
           
                  </blockquote>
                </v-card-title>
              </v-card>
            </v-flex>
     
              <!-- <video width="100%" height="100%" autoplay controls>
  <source src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/Tychoesque.mp4"  type="video/mp4">
              </video> -->
    
           
          </v-layout>
        </v-container>
      </section>
      <section>
        <video-background
          class="vid"
          src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/cubictho.mp4"
          poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/cube.png"
          playsWhen="canplaythrough"
        ></video-background>
      </section>

      <section>
        <v-container grid-list-xl class="content">
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="mb-4 second restrict" elevation="20">
                <v-card-title>
                  <blockquote>
                    <div>
                      <p class="font-weight-light nothing text-xs-center">
                        I am comfortable with a variety of programming languages and software,
                        I consult with clients to choose the best tech toolkit for each job based on their budget and project needs.
                        I can help modify a theme on an existing framework like
                        <span
                          class="tech"
                        >Weebly</span> or
                        <span class="tech">Squarespace</span>
                        to get you up and running quickly and cheaply.
                        Or I can build you a beautiful custom website from scratch (like this page!) using
                        <span
                          class="tech"
                        >Vue</span>,
                        <span class="tech">Node</span> and
                        <span class="tech">Express</span>.
                        As well as anything in between using
                        <span
                          class="tech"
                        >Wordpress Developer Tools</span>.
                        Contact me now for a free 30 min consult on the scope of your website needs!
                        <span
                          class="techy"
                        >I love implementing emerging technologies!</span>
                      </p>
                    </div>
                  </blockquote>
                </v-card-title>
              </v-card>
            </v-flex>
            
          </v-layout>
        </v-container>
      </section>

      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">mdi-heart</v-icon>by
              <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              and
              <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </div>
</template>

<script>
import VideoParallax from "vuetify-video-parallax";
import VideoBackground from "vue-responsive-video-background-player";
import radarComponent from "@/components/sketches/Radar.vue";
import VueCoreVideoPlayer from "vue-core-video-player";
if (process.browser) {
  var radar = require("@/Radar.js");
}
export default {
  components: {
    VideoParallax,
    VideoBackground,
    radarComponent,
    VueCoreVideoPlayer
  },
  computed: {
    med() {
      return this.$vuetify.breakpoint.mdAndUp;
    }
  },
  data: () => ({
    imagine: "@/assets/gallery/IMG_5992.jpg"
  })
};
</script>
<style lang= "scss" scoped>
.op {
  opacity: 0.8;
  background-color: #aa37b4;
  margin-top: 10px !important;
  margin-right: 23px;
}
.second {
  background-color: #161d25ad !important;
  /* //  opacity: 0.72 !important; */
  border-radius: 1%;
}
.z {
  z-index: 10;
}
.content {
  min-height: 100vh;
}
.vid {
  height: 50vh;
}
.smallerVid{
  width: 300px;
}
</style>

