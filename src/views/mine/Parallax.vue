<template>
  <div class="parralax">
    <v-content>
      <section>
        <video-background
          src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/blob720.mp4"
          poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/bloop.png"
          class="vid"
          playsWhen="canplaythrough"
       
        ></video-background>

        
      </section>
      <section  >
        <v-container text-xs-center class="content mt-0">
          <v-layout row wrap justify-space-between align-center class="mt-5"> 
            <!-- spaving -->
            <v-flex xs12 lg12 xl4 class="z">
              <v-card class="elevation-0 transparent">
                <core-heading v-text="'Welcome to my creative coding portfolio'" />

                <v-layout wrap  >
                  <v-text class="ma-1" justify-space-between>
                    <p
                      class="title font-weight-light font-italic aboutMe text-xs-center"
                    >A constant work in progress... Mostly math, often inspired by nature.  I love to expirement with generative algorithms.  Here is a collection of some of my work.</p>
                    <v-flex class="text-xs-center xs12 ">
                      <v-btn
                        class="font-weight-light contactButton"
                        color="primarydark black--text"
                      >Contact Me!</v-btn>
                    </v-flex>
                    <br />
                  
                    <p
                      class="family aboutMe love font-weight-light title font-italic text-xs-center"
                    >
                    
                   
                <br>
                     <br /> I'm currently using 
                  <span class="tech">TouchDesigner</span> and <span class="tech">Processing </span> for my creative coding adventures.
                       <br>
                           <br>
                             <br>
                       <v-icon>mdi-robot</v-icon> &nbsp;&nbsp;
                         
                      </p>
                      <!-- <p class="nothing text-xs-center">
                    <v-icon>mdi-robot</v-icon> &nbsp;&nbsp;I'm currently using 
                  <span class="tech">TouchDesigner</span> and <span class="tech">Processing </span> for visual design.
                      </p> -->
                  </v-text>
                </v-layout>
              </v-card>
            </v-flex>

            <!-- SUPERFORMULA!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
                  <v-flex xs12 md6 xl4 class="order-xs2 order-md1">
                    <!-- <v-card class="elevation-0 transparent">  -->
                      <radar-component />
                    <!-- </v-card> -->
                  </v-flex>
            <!-- SUPERFORMULA!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
           
            <v-flex xs12 md5 xl4 class="order-xs1">
              <v-card class="elevation-10 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">mdi-color_lens</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center pb-3 try">Try it yourself!</div>
                </v-card-title>
                <v-card-text>
                <p class="family aboutMe love font-weight-light title font-italic text-xs-center">
                   This is a live processing sketch showing one of my favorite algorithms, the superformula. Try adding or subtracting vertices, or randomizing the formula completely by clicking GO and starting over!
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
          src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/KNEW720.mp4"
          poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/KNEW.png"
          playsWhen="canplaythrough"
        ></video-background>
    
      </section>

      <section>




        <v-container grid-list-xl class="content">
          <v-layout row wrap justify-center class="my-5">
               <v-flex xs12 sm4 xl5>
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
    
                <v-flex xs12 sm6 xl4 text-xs-center>

          <video-background
          class="vid"
          src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/TT.mp4"
          poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/REDOtho.png"
          playsWhen="canplaythrough"
        ></video-background>
   </v-flex>
        <v-flex xs12 sm6 xl4 text-xs-center>

          <video-background
          class="vid"
          src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/PARTY720.mp4"
          poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/smol4.png"
          playsWhen="canplaythrough"
        ></video-background>
   </v-flex>
        <v-flex xs12 sm4 >
              <v-card class="mb-4 second restrict" elevation="20">
                <v-card-title>
                  <blockquote>
                    
                    <p class="title font-weight-light font-italic aboutMe text-xs-center">In philosophy, systems theory, science, and art, emergence occurs when an entity is observed to have properties its parts do not have on their own. These properties or behaviors emerge only when the parts interact in a wider whole.  This particle system is a simplistic example of emergent behavior</p>
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
          src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/bubs.2.720.mp4"
          poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/bubstill.png"
          playsWhen="canplaythrough"
        ></video-background>
      </section>

      <section>
        <v-container grid-list-xl class="content">
          <v-layout row wrap justify-center class="my-5">
            <v-flex sm12>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                   <core-heading v-text="'So what?'" />
                  <!-- <div class="headline">So what?</div> -->
                </v-card-title>
                <v-card-text>
                   <p class="title font-weight-light font-italic aboutMe text-xs-center">
                 Although distilled in to eye catching loops on this page, generative art is best displayed in action. 
                 All of my work is rendered in real time and can respond to a variety of inputs.  
                 Sometimes accompanied by music, occasionally projected on to larger viewing surfaces (even a balloon once!), 
                 responsive, interactive light art is helping to incorporate technology in to the human experience.
                   </p>
                   <p class="title font-weight-light font-italic aboutMe text-xs-center">
                     Here is a music video I made to help tell the story of Lucid Sanctary Dream by Discuss.
                   </p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex sm12 lg8 >
              <!-- //width="640" height="360" -->
              <!-- <v-card class="mb-4 second restrict" elevation="20"> -->
  <div  class="vimWrap">
  <iframe class="vim" src="https://player.vimeo.com/video/453137884?color=2c9b91"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>
        <!-- <video-background 
          class="vid"
          src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/wire720.mp4"
          poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/WIRE.jpg"
          playsWhen="canplaythrough"
        ></video-background> -->
  
              <!-- </v-card> -->
            </v-flex>
                   <v-flex sm12>
              <v-card class="elevation-0 transparent">
                <!-- <v-card-title primary-title class="layout justify-center">
                  <div class="headline">More about Discuss</div>
                </v-card-title> -->
                <v-card-text>
           
<p class="family aboutMe love font-weight-light title font-italic text-xs-center">
                <br>
                     <br /> For more music from 
                  <span class="tech">Discuss</span> follow the links below!
                   <br>
                     <br />
                     
                      <br>
                     <br />
                 

  <!-- <div class="my-4"> -->
   <a
      href="spotify:artist:1ki7psR4ysYawi6yTrFUrZ"
      class="mx-2"
      title="Discuss' Spotify" >
      <v-icon class="bigMe" large> mdi-spotify</v-icon>
    </a>
       <a
      href="http://www.music.apple.com/us/artist/discuss/159761540"
      class="mx-2"
      title="Discuss' Apple Music" >
      <v-icon class="bigMe" large> mdi-apple</v-icon>
    </a>
       <a
      href="http://www.youtube.com/ekofarm"
      class="mx-2"
      title="Discuss' Youtube" >
      <v-icon class="bigMe" large> mdi-youtube</v-icon>
    </a>
       <a
      href="http://www.soundcloud.com/discuss"
      class="mx-2"
      title="Discuss' Soundcloud" >
      <v-icon class="bigMe" large> mdi-soundcloud</v-icon>
    </a>
       <a
      href="http://www.discuss.bandcamp.com"
      class="mx-2"
      title="Discuss' Bandcamp" >
      <v-icon class="bigMe" large> mdi-bandcamp</v-icon>
    </a>
  <!-- </div> -->
     </p>
<!-- 

mdi-soundcloud
mdi-apple
palette -->

                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

      </section>
<section>
            <contact />
</section>
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
    VueCoreVideoPlayer,
    Contact: () => import('@/views/Contact')
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
  min-height:50vh;
   /* max-width: 2000px;  */
  
  
}
.family{
  font-family: 'Open Sans', sans-serif !important;
}
.aboutMe{
  /* line-height: 130% !important; */
  // display: block;
}
.smallerVid{
  height: 600px;
  object-fit: contain;
}
.try{
  font-size: 318% !important;
}

.vim{
      position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
.vimWrap{
   position: relative;
    overflow: hidden;
    padding-top: 56.25%;
}
  a {
    text-decoration: none;
  }
  .bigMe:hover{
     color: var(--v-primary-base);
  }
  .tech {
  font-family: "Open Sans", sans-serif;
  font-size: 110%;
  font-weight: bold;
}
</style>

