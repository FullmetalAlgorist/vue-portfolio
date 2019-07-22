<template>
<div class="gallery">
 <div id="filters" >
      <div class="spacer"></div>
      <v-form>
      <v-radio-group v-model="ex8" row class="radioWrapper">
        <v-radio  id="all"
          name="filters" 
          @click="clickAll"
          class="radios"
          label="All"
          color="primary"
          value="All"
          ></v-radio>
        <v-radio  id="bird"
            name="filters" 
            @click="clickSeabirds"
             label="Birds"
             value="Seabirds"
             color="primary"
             class="radios"
            ></v-radio>
        <v-radio id="water"
           name="filters"
           @click="clickWater"
           class="radios"
           label="Water"
           value="Water"
           color="primary"
           />
        <v-radio id="wood"
           name="filters"
           @click="clickDriftwood" 
           class="radios"
           label="Wood"
           value="Driftwood"
           color="primary"
           />
      </v-radio-group>
     </v-form>
  </div>
  <transition-group name="thumbnailfade" tag="div" class="myPhotos">
    <img v-for="thumb in filteredImages"
         :key="thumb.id"
         @click="showLightbox(thumb.name)"
         :src="thumb.name"
         :alt="thumb.alt"
         :title="thumb.alt" 
       :class="[$vuetify.breakpoint.xs ? phone : '']"
       :lazy-src="require('@/assets/download.jpeg')"
         />
  </transition-group>
  <lightbox id="mylightbox"
      ref="lightbox"
      :images="images"
      :filter="galleryFilter"
      :timeoutDuration="5000"
  />
</div>
</template>
<script>
export default {
  data() {
    return {
      ex8: 'All',
      galleryFilter: 'all',
      st1: 'require(',
      st2: ')',
      thumbnailDir :'@/assets/gallery/',
      phone: 'phone',
 images :
 [
   
  {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_4370.jpg',
    'alt':'trees',
    'id':'image1' },
  
  {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_4390.jpg',
    'alt':'driftwood',
    'filter':'wood',
    'id':'image2'  },

   {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_4410.jpg',
    'alt':'seagull',
    'filter':'bird',
    'id':'image3'  },

   {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_4450.jpg',
    'alt':'splash',
    'filter':'water',
    'id':'image4'  },

   {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_5956.jpg',
    'alt':'another gull',
    'filter':'bird',
    'id':'image5'  },

   {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_5989.jpg',
    'alt':'eye',
    'filter':'wood',
    'id':'image6'  },

   {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_5992.jpg',
    'alt':'close-up',
    'filter':'wood',
    'id':'image7'  },

   {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_6149.jpg',
    'alt':'heron-cleaning',
    'filter':'bird',
    'id':'image8'  },

    {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_6166.jpg',
    'alt':'heron',
    'filter':'bird',
    'id':'image9' },

   {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_6184.jpg',
    'alt':'drip1',
    'filter':'water',
    'id':'image10'  },

   {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_5603.jpg',
    'alt':'little',
    'filter':'bird',
    'id':'image11'  },

   {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_6191.jpg',
    'alt':'splash',
    'filter':'water',
    'id':'image12'  },

   {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_6239.jpg',
    'alt':'flight',
    'filter':'bird',
    'id':'image13'  },

   {'name':'https://mariah-vue-scroll.s3.us-east-2.amazonaws.com/gallery/IMG_6244.jpg',
    'alt':'flight2',
    'filter':'bird',
    'id':'image14'  },

     {'name':require('@/assets/gallery/loggy.jpg'),
    'alt':'lines',
    'filter':'wood',
    'id':'image15'  },

//    {'name':require('@/assets/gallery/rock-in-wood.jpg'),
//     'alt':'close-up',
//     'filter':'wood',
//     'id':'image16'  },

//    {'name':require('@/assets/gallery/wood-close.jpg'),
//     'alt':'leaf',
//     'filter':'wood',
//     'id':'image17'  },

//     {'name':require('@/assets/gallery/circ1.jpg'),
//     'alt':'ring',
//     'filter':'wood',
//     'id':'image19'  },

//      {'name':require('@/assets/gallery/IMG_4771.jpg'),
//     'alt':'wood',
//     'filter':'wood',
//     'id':'image20'  },

//       {'name':require('@/assets/gallery/IMG_4814.jpg'),
//     'alt':'drift',
//     'filter':'wood',
//     'id':'image21'  },

//      {'name':require('@/assets/gallery/IMG_4828.jpg'),
//     'alt':'gull2',
//     'filter':'bird',
//     'id':'image22'  },

//     {'name':require('@/assets/gallery/IMG_5003.jpg'),
//     'alt':'pecker',
//     'filter':'bird',
//     'id':'image23'  },
// //
//     {'name':require('@/assets/gallery/IMG_6510.jpg'),
//     'alt':'wood',
//     'filter':'wood',
//     'id':'image24'  },

//       {'name':require('@/assets/gallery/rip.jpg'),
//     'alt':'ocean',
//     'filter':'water',
//     'id':'image25'  },

//      {'name':require('@/assets/gallery/IMG_6766.jpg'),
//     'alt':'goose',
//     'filter':'bird',
//     'id':'image26'  },

//     {'name':require('@/assets/gallery/IMG_6590.jpg'),
//     'alt':'nail',
//     'filter':'wood',
//     'id':'image27'  }
    ]
    }
  },
  methods: {
    showLightbox: function(imageName) {
      this.$refs.lightbox.show(imageName);
    },
    updateFilter(filterName) {
      this.galleryFilter = filterName;
    },
    clickAll(){
      this.updateFilter('all');
      this.ex8="All";
    },
    clickSeabirds(){
      this.updateFilter('bird');
      this.ex8="Seabirds";
    },
    clickWater(){
      this.updateFilter('water');
      this.ex8="Water";
    },
    clickDriftwood(){
      this.updateFilter('wood');
      this.ex8="Driftwood";
    }
  },
  computed: {
    filteredImages: function() {
      if (this.galleryFilter === 'all') {
        return this.images;
      } else {
        return this.images.filter(image => image.filter === this.galleryFilter);
      }
    },
    screenWidth (){
      return this.screenWidth;
    } 
  }

}
</script>

<style lang="scss" scoped>
.gallery{
  text-align: center;
}
.radios{
  margin: 5px;
   //color:#e5a12e !important;
}
.spacer{
  padding-top:35px;
 
}
.border{
  border-right: none;
  border-left: none;
}
#app {
  font-family: 'Avenir',
               Helvetica,
               sans-serif;
  text-align: center;
  margin-top: 60px;
}

body {
  border-color: #69655d;
  // color: #ece1ca;
  background-color: #676769;
}

#filters {
  margin: 0;
}

img {
   width: 300px;
  margin: 5px 5px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.4s ease;
}
.phone{
  width: 95vw !important;
}

.thumbnailfade-leave-active,
.thumbnailfade-enter-active {
  transition: all 0.4s ease;
 
}

.thumbnailfade-enter-active {
  transition-delay: 0.4s;

}

.thumbnailfade-enter,
.thumbnailfade-leave-to {

  opacity: 0;
}

.v-radio{
  //color:#e5a12e !important;
}
.v-messages{
  height: 0;
}
.radioWrapper {
 display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  }
  .myPhotos {
    margin-top: -15px;
    line-height: 1;
  }
</style>
