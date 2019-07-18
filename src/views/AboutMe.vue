<template>
  <core-section id="about-me" >
    <abstract-1 />
    <v-flex
      xs12
      sm6
      justify-end
    >
      <section>
        <core-heading v-text="'Who I am.'" />
        <v-layout
          wrap 
        >
            <core-text
              class="m-2"
            >
              <p v-text="schema.basics.summary" /> 
               <p  class="pl-5 phot subheading font-weight-light font-italic">
               I love to live on the edge of nature and technology.
               </p>
               </core-text>
         <v-flex class="text-xs-center xs-12">
           <v-btn href="https://codepen.io/akcrew/" color="darkenMyPrimary black--text">Check out some recent code!  <v-icon right dark>mdi-codepen</v-icon> </v-btn>
      
              </v-flex>
     <v-flex pt-3 class="text-xs-center xs12" :pb-4="$vuetify.breakpoint.smAndDown">
       <v-btn @click="$vuetify.goTo('#contact')" color="primary black--text">Contact Me!</v-btn>

     </v-flex>
     </v-layout>
      </section>
         </v-flex>
            <v-flex
    xs12
      sm6
      class="CCC"
    >
    <v-layout
     justify-center
     >
    <!-- <div class="spacer"></div> -->
      <v-img max-width="450" :src="kneel.srrc"  ></v-img>
    </v-layout>
    </v-flex>
      
 </core-section>
</template>
<script>
  // Utilities
  import {
    mapState
  } from 'vuex'
 

  export default {
    components: {
      Abstract1: () => import('@/components/Abstract1')
    },
    data: () => ({
      expansion: 0,
      //imag: {srrc: require('@/assets/gif/one.png')},
      kneel: {srrc: require('@/assets/realFinal.png')},
      images : [
        {srrc: require('@/assets/data/061.png')},
        {srrc: require('@/assets/data/060.png')},
        {srrc: require('@/assets/data/059.png')},
        {srrc: require('@/assets/data/058.png')},
        {srrc: require('@/assets/data/057.png')},
        {srrc: require('@/assets/data/056.png')},
        {srrc: require('@/assets/data/055.png')},
        {srrc: require('@/assets/data/054.png')},
        {srrc: require('@/assets/data/053.png')},
        {srrc: require('@/assets/data/052.png')},
        {srrc: require('@/assets/data/051.png')},
        {srrc: require('@/assets/data/050.png')},
        {srrc: require('@/assets/data/049.png')},
        {srrc: require('@/assets/data/048.png')},
        {srrc: require('@/assets/data/047.png')},
        {srrc: require('@/assets/data/046.png')},
        {srrc: require('@/assets/data/045.png')},
        {srrc: require('@/assets/data/044.png')},
        {srrc: require('@/assets/data/043.png')},
        {srrc: require('@/assets/data/042.png')},
        {srrc: require('@/assets/data/041.png')},
        {srrc: require('@/assets/data/040.png')},
        {srrc: require('@/assets/data/039.png')},
        {srrc: require('@/assets/data/038.png')},
        {srrc: require('@/assets/data/037.png')},
        {srrc: require('@/assets/data/036.png')},
        {srrc: require('@/assets/data/035.png')},
        {srrc: require('@/assets/data/034.png')},
        {srrc: require('@/assets/data/033.png')},
        {srrc: require('@/assets/data/032.png')},
        {srrc: require('@/assets/data/031.png')},
        {srrc: require('@/assets/data/030.png')},
        {srrc: require('@/assets/data/029.png')},
        {srrc: require('@/assets/data/028.png')},
        {srrc: require('@/assets/data/027.png')},
        {srrc: require('@/assets/data/026.png')},
        {srrc: require('@/assets/data/025.png')},
        {srrc: require('@/assets/data/024.png')},
        {srrc: require('@/assets/data/023.png')},
        {srrc: require('@/assets/data/022.png')},
        {srrc: require('@/assets/data/021.png')},
        {srrc: require('@/assets/data/020.png')},
        {srrc: require('@/assets/data/019.png')},
        {srrc: require('@/assets/data/018.png')},
        {srrc: require('@/assets/data/017.png')},
        {srrc: require('@/assets/data/016.png')},
        {srrc: require('@/assets/data/015.png')},
        {srrc: require('@/assets/data/014.png')},
        {srrc: require('@/assets/data/013.png')},
        {srrc: require('@/assets/data/012.png')},
        {srrc: require('@/assets/data/011.png')},
        {srrc: require('@/assets/data/010.png')},
        {srrc: require('@/assets/data/009.png')},
        {srrc: require('@/assets/data/008.png')},
        {srrc: require('@/assets/data/007.png')},
        {srrc: require('@/assets/data/006.png')},
        {srrc: require('@/assets/data/005.png')},
        {srrc: require('@/assets/data/004.png')},
        {srrc: require('@/assets/data/003.png')},
        {srrc: require('@/assets/data/002.png')},
        {srrc: require('@/assets/data/001.png')},
        {srrc: require('@/assets/data/000.png')}
        
      ],
      obj : {curImg: 0}
    }),

    computed: {
      ...mapState('app', ['schema']),
      items () {
        return this.schema.work
      },
      socials () {
        return this.schema.basics.profiles.map(social => ({
          ...social,
          icon: this.iconMap[social.network.toLowerCase()] || 'mdi-account'
        }))
      },
      currentImage()  {return this.imag},
    },
    created() {
      this.$nextTick(this.pinContainerScene)
     

// .src = this.images[this.obj.curImg];
//      this.$gsap.TweenMax.to('.whatever', 0.5, 
//      {
//        curImg: images.length -1,
//        roundProps: "curImg",
//        repeat: 3,
//        immediateRender: true,
//       ease: Linear.easeNone,
//       onUpdate: function() {
//         $("#myimg")
//       }
//      })
// const scene = new this.$scrollmagic.Scene()

    },
    destroyed () {
    // Destroy ScrollMagic when our component is removed from DOM
    //this.$ksvuescr.$emit('destroy')
  },
  methods: {
     pinContainerScene () {
      
         //this.$refs.imagine.src = this.images[this.obj.curImg];
 let memememe = new this.$gsap.TweenMax.to(this.obj, 2, {
       curImg: this.images.length -1,
       roundProps: "curImg",
       repeat: 0,
       immediateRender: true,
      onUpdate: () => {this.imag = this.images[this.obj.curImg]}
        //this.$refs.imagine.src = this.images[this.obj.curImg]
      })

let controller = new this.$scrollmagic.Controller();
       let scene = new this.$scrollmagic.Scene({
        triggerElement: "#trigger",
        duration: 600
      })
      .addTo(controller)
      .setTween(memememe)

 this.$ksvuescr.$emit('addScene', 'pinContainerScene', scene)

     },
     toCode(){
       this.$route.push('https://codepen.io/akcrew/');
     }
  }
  }
</script>

<style lang="scss" scoped>

.subheading{
  margin-bottom: -10px;
}
.pulse-button {

  position: relative;
  // width: 100px;
  // height: 100px;
  border: none;
  // box-shadow: 0 0 0 0 rgba(232, 76, 61, 0.7);
  // border-radius: 50%;
  // background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/173024/jonathanlarradet_copy.png);
  // background-size:cover;
  // background-repeat: no-repeat;
  cursor: pointer;
  -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
}
.pulse-button:hover 
{
  -webkit-animation: none;-moz-animation: none;-ms-animation: none;animation: none;
}

@-webkit-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
@-moz-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
@-ms-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
@keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
.phot{
font-size: 110% !important;
}
</style>
