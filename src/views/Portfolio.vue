<template>
  <core-section id="portfolio">
      <v-flex xs12 sm6>
          <v-layout justify-space-between>
      <core-heading>Photography</core-heading>
      </v-layout>
      </v-flex>
    <v-flex xs12 sm6>
      <v-layout justify-space-between>
        <blockquote
          style="max-width: 450px;"
        >
          <p class="subheading font-weight-light font-italic">
            Tired of using stock photos on your website?  I would love to include my own photos as backgrounds and menu pages in the creation of your site!
          </p>
          <footer class="text-xs-center foot">
         Here are some of my recent shots!<br>
         Click an image below and be taken to my portfolio.
          </footer>
        </blockquote>
      </v-layout>
    </v-flex>
    
   <v-layout 
    @click="toPhotos"
    :style="{ cursor: 'pointer'}"
    >
    <v-flex  xs12 sm12>
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
          <v-flex
               v-for="n in 9"
              :key="n"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
<!-- 
 v-for="n in ninePhotos"
              :key="n.id" -->
<!-- ---- -->
                  <!-- :src="n.srrc"
                 :lazy-src="require('@/assets/download.jpeg')" -->
                  <v-img

                 :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                <!--  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" -->
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
  </core-section>
</template>


<script>
  export default {
    components: {
      Abstract3: () => import('@/components/Abstract3'),
      // Project: () => import('@/components/Project')
    },
computed:{
      med(){
        return this.$vuetify.breakpoint.mdAndUp;
      }
    },
    data: () => ({
      // ninePhotos: [
      
      //   {srrc: require('@/assets/gallery/loggy.jpg')},
      //   {srrc: require('@/assets/gallery/IMG_6191.jpg')},
      //   {srrc: require('@/assets/gallery/IMG_4828.jpg')},
      //   {srrc: require('@/assets/gallery/IMG_6244.jpg')},
      //   {srrc: require('@/assets/gallery/circ1.jpg')},
      //   {srrc: require('@/assets/gallery/sea.jpg')},
      //  {srrc: require('@/assets/gallery/IMG_5992.jpg')},
      //   {srrc: require('@/assets/gallery/IMG_4370.jpg')},
      //   {srrc: require('@/assets/gallery/wood-close.jpg')},
      // ]
    }),
    methods: {
      toPhotos(){
        this.$router.push('/photography');
      }
    }
  }
</script>

<style lang= "scss" scoped>
  .v-carousel__controls {
    background: transparent;
  }
  .heading{
    display: block;
  }
  .foot{
    padding-bottom: 20px;
  }
</style>
