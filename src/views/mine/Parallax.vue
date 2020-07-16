<template>
  <div class="parralax">
    <v-content>
      <section>
         <!-- <video-background
    src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/cubictho.mp4"
    style=" height: 100vh;"
 >
    <h1 style="color: white;">Hello welcome!</h1>
 </video-background> -->
  <video-background 
    src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/reblob4Small.mp4"
    poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/blob.png"
    style="max-height: 380px; height: 100vh;"
    playsWhen="canplaythrough"
>
<!-- overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"  -->
    <!-- <h1 style="color: white;">Hallo welcome!</h1> -->
</video-background>
        <!-- height="600" -->
       
  <!-- Some Html Here -->

        <!-- <v-parallax src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/goodOne.mov" > -->
          <!-- <VideoParallax height="800" img="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/frontPage/trianglifyLarge.png" src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/reblob4Small.mov"> 
          <v-layout
            column
            align-center
            class="white--text"
            justify-center
          > 
  
            <h1 class="white--text mb-2 display-1 text-xs-center">Oh hello</h1>
            <div class="subheading mb-3 text-xs-center">welcome</div>
          <v-btn
              class="lighten-2 mt-5 op"
              dark
              small
              fab
            >
            <v-icon>mdi-circle</v-icon>
            </v-btn>
          </v-layout>
          </VideoParallax> -->
        <!-- </v-parallax> -->
      </section>
      <section>
                 <v-flex xs12 sm7  class="z" >
          <core-heading v-text="'Welcome to my portfolio'" />
            
          <v-layout wrap align-center justify-center>
            <core-text class="ma-1">
              <p class=" title font-weight-light  font-italic aboutMe text-xs-center" > I'm in italics </p>
               <v-flex class="text-xs-center xs12" >
                 <!-- :pb-4="$vuetify.breakpoint.smAndDown" -->
             <!-- @click="$vuetify.goTo('#contact')" -->
              <v-btn
                class="font-weight-light contactButton"
                color="primarydark black--text"
              >Contact Me!</v-btn>
            </v-flex>
            <br>
             <!-- <br> <br> -->
              <p class="family aboutMe love font-weight-light title font-italic text-xs-center"
              >If you are here for my generative art portfolio, follow the turtle!</p>
            </core-text>
           
          </v-layout>
      
      </v-flex> 
       </section>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Here is a sampling</div>
                    </v-card-title>
                    <v-card-text>
                      <p>
                For fun I like to integrate technology with the human experience through generative and interactive visuals.
                    <v-icon>mdi-robot</v-icon> &nbsp;&nbsp;     Often based on natural phenomenon or playing with natural 
                    algorithms to create visually pleasing results.  I currently use
                  <span class="tech">TouchDesigner</span> and <span class="tech">Processing </span> for visual design.
         </p>
                    </v-card-text>
                  </v-card>
                </v-flex>
                     </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
            <!-- <v-row align="center" justify="center">
    <v-img
      src="https://bad.src/not/valid"
      lazy-src="https://picsum.photos/id/11/100/60"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="500"
      max-height="300"
    ></v-img>
            </v-row> -->
         
      </section>

      <section>
        <!-- <v-parallax src="https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax> -->
         <video-background 
   
     src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/cubictho.mp4"
    poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/cube.png"
    style="max-height: 380px; height: 100vh;"
    playsWhen="canplaythrough"
>
<!-- overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"  -->
    <!-- <h1 style="color: white;">Hallo welcome!</h1> -->
</video-background>
      </section>

      <section>
        <v-container grid-list-xl>
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
            <blockquote >
              <div>          
                <p class="font-weight-light nothing text-xs-center">
                  I am comfortable with a variety of programming languages and software, 
                  I consult with clients to choose the best tech toolkit for each job based on their budget and project needs.
                  I can help modify a theme on an existing framework like 
                    <span class="tech">Weebly</span> or
                  <span class="tech">Squarespace</span> 
                 to get you up and running quickly and cheaply.
                  Or I can build you a beautiful custom website from scratch (like this page!) using 
                  <span class="tech">Vue</span>,
                  <span class="tech">Node</span> and
                  <span class="tech">Express</span>.
                  As well as anything in between using 
                  <span class="tech">Wordpress Developer Tools</span>.
                  Contact me now for a free 30 min consult on the scope of your website needs!
               <span class="techy">I love implementing emerging technologies!</span>
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
              <v-icon class="red--text">mdi-heart</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </div>
</template>

<script>
import VideoParallax from 'vuetify-video-parallax';
import VideoBackground from 'vue-responsive-video-background-player';
  export default {
    components: {
      VideoParallax,
      VideoBackground
    },
    computed:{
      med(){
        return this.$vuetify.breakpoint.mdAndUp;
      }
    },
    data: () => ({
      imagine: '@/assets/gallery/IMG_5992.jpg'
    })
  }
</script>
<style lang= "scss" scoped>
.op{
  opacity: .8;
  background-color: #aa37b4;
  margin-top: 10px !important;
  margin-right: 23px;
}
.second {
  background-color: #161d25ad !important;
  /* //  opacity: 0.72 !important; */
  border-radius: 1%;
}
</style>

