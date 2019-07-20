<template>
  <core-section 
  id="works"
  justify-space-between
  >
    <abstract-4 />
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
      <!--  -->
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
                <p  class="justText headline font-weight-light font-italic">
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
      v-for="site in sites"
      :key="site.id"
      justify-space-between wrap>
        <v-flex
        xs12
        md8>
          <h3 
          class="display-1 font-weight-medium mb-4 primary--text">
            {{ site.title }}
          </h3>
          <v-img :src="site.src"></v-img>
        </v-flex>
        <v-flex
        xs12
        md3>
          <h3 class="display-1 font-weight-medium mb-4 primary--text">
            What produce is in season?
          </h3>
          <p class="subheading font-weight-light font-italic">Produce that's in season is <b>cheaper</b>, more <b>nutritous</b> , <b>tastes better</b>, and has a <b>lower carbon footprint</b> !</p>
          <p class="subheading font-weight-light font-italic">Bookmark this app on your home  screen for quick  reference  next time you're on a Fruit & Veg run!</p>
        </v-flex>
      </v-layout>
  </core-section>
</template>

<script>
  export default {
    components: {
       Abstract4: () => import('@/components/Abstract4'),
    },
    data: () => ({
      card: require('@/assets/abstract22.png'),
        sites: [
          {
            title: 'Healthy Harvest Nutrition App',
            src: require('@/assets/appDemo.png'),
            link: 'https://mariah-nutrition-app.herokuapp.com'
          },
           {
            title: 'Parallax and photo blog',
             src: require('@/assets/clients/p.png'),
             link: 'https://akcrew-transitions.herokuapp.com/'
          },
          {
            title: 'Artist/Album search',
            src: require('@/assets/dualRobots.png'),
             link: 'https://akcrew-roboto.herokuapp.com/'
          }
        ]
    })
  }
</script>
<style lang="scss" >
   .gitMe{
    //  padding-bottom: 30px;
    // margin-bottom: 30px;
font-size: 600%;
margin: 30px;
// padding-bottom: 30px;
// opacity: .2;
   }
.pulse-button {
  
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
    // border-radius: 50%;
  // width: 150px;
height: 170px;
// color:"rgba(31,40,51,.57)";
// color="rgba(2, 196, 205, .2)"

}
.gitCard:hover{
  // height: 300px;
}
.gitMe{
 z-index: -1;
align-content: center;
text-align: center;
opacity: .7;

}
.justText{
  //  position: absolute; // Reposition logo from the natural layout
//align-content: center;
// font-weight: bold;
// font-size: 22 !important;
// color: black;
color: rgba(255, 255, 255, 0.906);
margin-top: -150px;
//  background-color: rgba(255, 255, 255, 0.7);
// border-radius:50%;
  width: 330px;
}
</style>