<template>
<div class="outer">

   <div class=" circle"  :style="{ height: $isMobile() ? '98vh' : '100vh'}">
        
      <v-layout
        :pa-5="$vuetify.breakpoint.mdAndUp"
        :pa-3="$vuetify.breakpoint.smAndDown"
        
        >
         <v-flex v-if=" $vuetify.breakpoint.mdAndUp"
        xs2
        mr-4
        class=" proc text-xs-center"
        >
           <v-btn px-2  @mouseenter="hoverMe2=true" @mouseleave="hoverMe2=false" class=" but" :color="hoverMe ? 'white--text primarydark' : 'white--text grey' "    @click="$vuetify.goTo('#insta')">Portfolio</v-btn>
           <v-btn px-2  @mouseenter="hoverMe=true" @mouseleave="hoverMe=false" class=" but" :color="hoverMe ? 'white--text primarydark' : 'white--text grey' "  :style="{ backgroundColor: hoverMe ? '#00000061 !important' : ''}" @click="toProc">live sketches</v-btn>
        <v-img  @mouseenter="hoverMe=true" @mouseleave="hoverMe=false" :src="hoverMe ? logo2 : logo1" @click="toProc"> </v-img>  
      </v-flex>
        <v-flex >
             <!-- :class="`display-${$vuetify.breakpoint.mdAndUp ? '4' : '2'}`" -->
             
         <h1
            class="name text-uppercase"
            :style="{ fontSize: $vuetify.breakpoint.lgAndUp ? '700% !important' : '368% !important'}"
            :class="`${$vuetify.breakpoint.lgAndUp ? 'topMe' : 'bottomMe'}`"
          > 
            <!-- :style="{ width: $isMobile() ? '600%' : '700%'}" -->
            <!-- :class="`display-${$vuetify.breakpoint.mdAndUp ? '4' : '3'}`" -->
       Generative Art and Algorithmic Design
          </h1>
        </v-flex>
      </v-layout>   
       
    </div>
  <div id ="insta" class="insta">
    
    <!-- <h1>
      <a :href="instapage">@{{ username }} on instagram</a>
    </h1> -->
    <template v-if="grams.length > 0">
      <div v-for="(gram, index) in grams" :key="index" @contextmenu.prevent>
      
                <!-- <div class="project-name"></div>-->
        <!-- <v-icon medium @click="showTags=!showTags" class="pa-1 hash">{{ ico }}</v-icon> -->
                 <!-- <taggy
          v-if="hover"
          :tags="gram.tags"
          class="taggy"
          :style="{maxWidth: $vuetify.breakpoint.width < 790 ? '90vw' : '48vw', marginTop: $isMobile() ? '0' : '75px' }"
          :class="$vuetify.breakpoint.width > 1180 ? 'tri' : ''"
        /> -->
        <template v-if="gram.carousel_media"> 
           
          <v-carousel :cycle="false" hide-delimiters>
            <div class="portfolio-box-caption">
                  testing1
                </div>
            <div v-for="item in gram.carousel_media" :key="item.id">
              <v-carousel-item v-if="item.type== 'video'">
                <v-hover v-slot:default="{ hover }">
                  <video :controls="hover ? true : false" controlsList="nodownload" loop> 
                    <source :src="item.videos.standard_resolution.url" type="video/mp4" />
                  </video>
        
                </v-hover>
                
              </v-carousel-item>
              <v-carousel-item v-else :src="item.images.standard_resolution.url"></v-carousel-item>
            </div>
          </v-carousel>
        </template>
        <template v-else>
                    <!-- <div class="portfolio-box-caption">
                  testing2
                </div>  -->
          <v-hover v-slot:default="{ hover }">
        <div> 
         
            <video :controls="hover ? true : false" controlsList="nodownload" loop>
             
              <source :src="gram.videos.standard_resolution.url" type="video/mp4" />
            </video>
                </div>
          </v-hover>
    
        </template>
      </div>
    </template>
    <div v-else class="loading"></div>
    <div v-if="error" class="error">Sorry, the Instagrams couldn't be fetched.</div>
    <button @click="getMoreGrams">Load More</button>
  </div>
  </div>
</template>
<script>
import axios from "axios";
import { ScalingSquaresSpinner } from "epic-spinners";

export default {
  data() {
    return {
      access_token: "7280261909.1677ed0.efa32049d785431b960f6bc3fb81c351",
      url: "https://api.instagram.com/v1/users/self/media/recent/",
      username: "",
      grams: [],
      next_url: "",
      error: false,
      lazyLoad: require("@/assets/rhombus.png"),
      showTags: false,
      currentImage: true,
              logo1: require('@/assets/logo1.png'),
        logo2: require('@/assets/logoblack.png'),
        hoverMe: false,
        hoverMe2 : false
    };
  },
  components: {
    ScalingSquaresSpinner,
    Taggy: () => import("@/components/tagList")
  },
  computed: {
    instapage() {
      return "https://www.instagram.com/" + this.username;
    },
    ico() {
      if (this.showTags) {
        return "mdi-close-outline";
      } else {
        return "mdi-pound";
      }
    }
  },
  methods: {
    getGrams() {
      axios
        .get(this.url + "?access_token=" + this.access_token)
        .then(({ data }) => {
          this.grams = data.data;
          this.username = data.data[0].user.username;
          this.next_url = data.pagination.next_url;
          console.log("grams", this.grams);
        })
        .catch(function(error) {
          console.log(error);
          this.error = true;
        });
    },
    getMoreGrams() {
      axios
        .get(this.next_url)
        .then(({ data }) => {
          this.grams = this.grams.concat(data.data);
          this.next_url = data.pagination.next_url;
        })
        .catch(function(error) {
          console.log(error);
          this.error = true;
        });
    },
     toProc(){
           this.$router.push({ name: 'processing', params: {sketch: 0}})
      }
  },
  created() {
    this.getGrams();
  }
};
</script>


<style lang="scss" scoped>
.title {
  width: 100%;
  display: block;
}
.insta {
--color: #ffffffc9;
  --background: #1f1f1f;
  --spacing: 1rem;
  --speed: 1700ms;
  --fontsize: 3rem;
}
.insta {
  margin: 0;
  padding: var(--spacing);
  font-family: Karbon, Helvetica, sans-serif;
  color: var(--color);
  background: var(--background);
  z-index: -1;
  //position: relative;
}
.insta {
  height: 100%;
  display: grid;
  grid-gap: var(--spacing);
  grid-template-columns: repeat(auto-fit, minmax(375px, 2fr));
  min-height: calc(100vh - var(--spacing) * 2);
}
h1 {
  align-self: start;
}
h1,
button {
  // margin: 0;
  // padding: 0;
  grid-column: 1 / -1;
  font-size: var(--fontsize);
  line-height: 1.2;
  font-weight: 300;
  border: 4px solid var(--color);
  border-width: 4px 0;
}

button {
  border-radius: 0;
  color: var(--color);
  background: transparent;
  grid-column: 1 / -1;
  outline: none;
  cursor: pointer;
  align-self: end;
}
a {
  color: inherit;
  text-decoration: none;
  max-width: 100%;
  display: block;
  overflow: hidden;
  object-fit: cover;
  //  max-height: 325px;
}
.error {
  grid-column: 1 / -1;
  justify-self: center;
}
.loading {
  width: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 3);
  grid-column: 1 / -1;
  justify-self: center;
  align-self: center;
  background: var(--color);
  animation: load var(--speed) infinite ease-in-out;
  transform: rotate(0);
}
@keyframes load {
  100% {
    transform: rotate(360deg);
  }
}
.wait {
  width: 100%;
  //height:500px !important;
  //position: relative;
  // object-fit: contain !important;
  //background-image: cover;
  //  max-height: 95vh;
  //  max-width: 95vw;
}
//insta token
// 178334721.1677ed0.47e8323111844b6795c472347c89680f
.taggy {
  position: absolute;
  z-index: 2;
  //  margin-top: 75px;
}
.tri {
  max-width: 30vw !important;
}
.hash {
  position: absolute;
  z-index: 3;
  margin-top: 20px;
  margin-left: 20px;
  //  border:black solid 1px;
  //  border-radius: 50%;
}
iframe,
video {
  //max-width: 30vw !important;
  height: 100% !important;
  width: 100% !important;
}

.circle {
  background-image: url("https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/insta.jpg");
  //  height: 100vh;
  background-size: cover;
  // background-position:  le;
  background-position-y: 50%;
  background-position-x: 10%;
  
  //height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  // height: calc(var(--vh, 1vh) * 100);
  // background-attachment: fixed;
}
.proc{
   background-color: #0000006b;
  border-radius: 10px;
  padding: 3px;
  position: relative;

}
.but{
background-color: #9e9e9e7a !important;
  // background-color: rgba(0,0,0,.28) !important;
}
.but:hover{
  background-color: #00000061 !important;
  // background-color: rgba(0,0,0,.28) !important;
}
.name {
  line-height: 1 !important;
  color: #ffffffc9;
  padding-right: 250px;
  // font-family: 'Open Sans', sans-serif !important;
  font-weight: 350 !important;
  // padding-top: 70vh;
  
    // font-size: 200% !important;
}
.portfolio-box-caption {
    position: absolute;
    // bottom: 0;
    // display: block;
    width: 100%;
    //height: 100%;
    text-align: center;
     opacity: 1;
    z-index : 11;
    color: #fff;
    background: rgba(6, 56, 105, 0.9);
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    min-height: calc(80vh - var(--spacing)*2);
}
.portfolio-box-caption:hover {
  opacity: 1;
}

.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {
    padding: 0 15px;
    font-size: 1em;
}
.topMe{
  margin-top: 40vh;
}
.bottomMe{
margin-top: 50vh;
}

</style>
