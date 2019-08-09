<template>
<v-content>
    <v-layout fluid class="green">
<vue-masonry-gallery class="red" :imgsArr="imgsArr" ></vue-masonry-gallery>
     <!-- @scrollReachBottom="getData" -->
    </v-layout>
</v-content>
    
   
</template>
<script>
import VueMasonryGallery from "vue-masonry-gallery";
export default {
    data(){
        return {
             imgsArr: [
    {'src':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_6166.jpg',
    'href':'google.com',
    'alt':'heron',
    'filter':'bird',
    'id':'image9' },

   {'src':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_6184.jpg',
    'href':'google.com',
    'alt':'drip1',
    'filter':'water',
    'id':'image10'  },

   {'src':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_5603.jpg',
    'href':'google.com',
    'alt':'little',
    'filter':'bird',
    'id':'image11'  },

   {'src':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_6239.jpg',
    'href':'google.com',
    'alt':'flight',
    'filter':'bird',
    'id':'image13'  }

             ],
    //   group: 0 // request param
        }
    },
    components: {
    VueMasonryGallery
  }
}
</script>
<style lang="scss" scoped>
    .green{
        background-color: green;
    }
    .red{
        background-color: red;
    }
</style>