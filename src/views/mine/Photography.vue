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
        <v-radio  id="wildlife"
            name="filters" 
            @click="clickWildlife"
             label="Wildlife"
             value="Wildlife"
             color="primary"
             class="radios"
            ></v-radio>
        <!-- <v-radio id="ocean"
           name="filters"
           @click="clickOcean"
           class="radios"
           label="Ocean"
           value="Ocean"
           color="primary"
           /> -->
           
        <v-radio id="driftwood"
           name="filters"
           @click="clickDriftwood" 
           class="radios"
           label="Driftwood"
           value="Driftwood"
           color="primary"
           />
             <v-radio id="nature"
           name="filters"
           @click="clickNature" 
           class="radios"
           label="Nature"
           value="Nature"
           color="primary"
           />
      </v-radio-group>
     </v-form>
  </div>
   <!-- <div class="image-container wrap" > -->
  <transition-group name="thumbnailfade" tag="div" class="myPhotos">
   
    <img v-for="thumb in filteredImages"
         :key="thumb.id"
         @click="showLightbox(thumb.name)"
         :src="before+thumb.name"
         :alt="thumb.alt"
         :title="thumb.alt" 
       :class="[$vuetify.breakpoint.xs ? phone : '']"
      class="imagine"
       @contextmenu.prevent
         />
  </transition-group>
    <!-- </div> -->
  <lightbox id="mylightbox"
      ref="lightbox"
      :images="images"
      :filter="galleryFilter"
      :directory="`https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/gallery/untitled+folder/IMG_`"
      :timeoutDuration="5000">
  </lightbox>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      ex8: 'All',
      galleryFilter: 'all',
      phone: 'phone',
    
  before: 'https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/gallery/untitled+folder/IMG_',
  images: [
         {'name':'5060.JPG',
    'alt':'Lichen',
    'filter':'Nature',
    'id':'image1'},
       {'name':'5067.JPG',
    'alt':'Sea Flower',
    'filter':'Nature',
    'id':'image2'  },
     {'name':'5136.JPG',
    'alt':'City Ducks',
    'filter':'Nature',
    'id':'image3'},
     {'name':'5166.JPG',
    'alt':'Golden Log',
    'filter':'Nature',
    'id':'image4'},
       {'name':'5183.JPG',
    'alt':'Mountain Duck',
    'filter':'Nature',
    'id':'image5'  },
     {'name':'5187.JPG',
    'alt':'Flight',
    'filter':'Wildlife',
    'id':'image6'},
      
      {'name':'5208.JPG',
    'alt':'Rainier Ducks',
    'filter':'Nature',
    'id':'image7'},
       {'name':'5210.JPG',
    'alt':'Rainier',
    'filter':'Nature',
    'id':'image8'  },
     {'name':'5297.JPG',
    'alt':'Sea',
    'filter':'Nature',
    'id':'image9'},
        {'name':'5305.JPG',
    'alt':'Shipping Container',
    'filter':'Nature',
    'id':'image10'},
     {'name':'5346.JPG',
    'alt':'Wind',
    'filter':'Nature',
    'id':'image11'},
       {'name':'5367.JPG',
    'alt':'Winter Ripples',
    'filter':'Nature',
    'id':'image12'  },
      {'name':'5370.JPG',
    'alt':'Ripples',
    'filter':'Nature',
    'id':'image13'},
      {'name':'5404.JPG',
    'alt':'Winter Storm',
    'filter':'Nature',
    'id':'image14'},
     {'name':'5451.JPG',
    'alt':'Flock',
    'filter':'Wildlife',
    'id':'image15'},
       {'name':'5462.JPG',
    'alt':'Sandpiper',
    'filter':'Wildlife',
    'id':'image16'  },
  
       {'name':'5705.JPG',
    'alt':'Cool Cloud Day',
    'filter':'Nature',
    'id':'image17'  },
      {'name':'5763.JPG',
    'alt':'Murmer',
    'filter':'Wildlife',
    'id':'image18'},
       {'name':'7094.JPG',
    'alt':'Wet Rocks',
    'filter':'Nature',
    'id':'image19'  },
     {'name':'7108.JPG',
    'alt':'Cement',
    'filter':'Driftwood',
    'id':'image20'},
   
      {'name':'7111.JPG',
    'alt':'Beached Wood',
    'filter':'Driftwood',
    'id':'image21'},
     {'name':'7113.JPG',
    'alt':'Footprint',
    'filter':'Nature',
    'id':'image22'},
       {'name':'7115.JPG',
    'alt':'Clam',
    'filter':'Nature',
    'id':'image23'  },
       {'name':'7172.JPG',
    'alt':'Snowy Wood',
    'filter':'Driftwood',
    'id':'image24'  },
      {'name':'7184.JPG',
    'alt':'Rainier Ducks',
    'filter':'Driftwood',
    'id':'image25'},
     {'name':'7281.JPG',
    'alt':'West Seattle',
    'filter':'Nature',
    'id':'image26'},
       {'name':'7296.JPG',
    'alt':'Stoic',
    'filter':'Driftwood',
    'id':'image27'  },
     {'name':'7312.JPG',
    'alt':'Snowy Ferry',
    'filter':'Nature',
    'id':'image28'},
     {'name':'7315.JPG',
    'alt':'Snow',
    'filter':'Nature',
    'id':'image29'},
     {'name':'7342.JPG',
    'alt':'Snowy Branches',
    'filter':'Nature',
    'id':'image30'},
      {'name':'7372.JPG',
    'alt':'Snowy Chickadee!',
    'filter':'Wildlife',
    'id':'image31'},
     {'name':'7406.JPG',
    'alt':'Emergence',
    'filter':'Driftwood',
    'id':'image32'},
     
       {'name':'7411.JPG',
    'alt':'Snow Capped',
    'filter':'Driftwood',
    'id':'image33'  },
     {'name':'7519.JPG',
    'alt':'Two Logs',
    'filter':'Driftwood',
    'id':'image34'},
     {'name':'7551.JPG',
    'alt':'White Sand',
    'filter':'Drfitwood',
    'id':'image35'},
      {'name':'7577.JPG',
    'alt':'Icy Duck',
    'filter':'Wildlife',
    'id':'image36'},
     {'name':'7587.JPG',
    'alt':'Peak Through',
    'filter':'Driftwood',
    'id':'image37'},
    
       {'name':'7607.JPG',
    'alt':'Rings',
    'filter':'Driftwood',
    'id':'image38'  },
     {'name':'7619.JPG',
    'alt':'Just a Chickadee',
    'filter':'Wildlife',
    'id':'image39'},
     {'name':'7725.JPG',
    'alt':'Peak',
    'filter':'Driftwood',
    'id':'image40'},
       {'name':'8007.JPG',
    'alt':'Barnacle',
    'filter':'Driftwood',
    'id':'image41'  },
      {'name':'8040.JPG',
    'alt':'White Piper',
    'filter':'Wildlife',
    'id':'image42'},
     {'name':'8102.JPG',
    'alt':'Rainier Sunset',
    'filter':'Nature',
    'id':'image43'},
     {'name':'8134.JPG',
    'alt':'Ferry View',
    'filter':'Nature',
    'id':'image44'},
     {'name':'8145.JPG',
    'alt':'Space Needle',
    'filter':'Nature',
    'id':'image45'},
      {'name':'8534.JPG',
    'alt':'Cool Rock',
    'filter':'Nature',
    'id':'image46'},
       {'name':'8614.JPG',
    'alt':'River Otter',
    'filter':'Wildlife',
    'id':'image47'  },
     {'name':'8750.JPG',
    'alt':'Hummingbird',
    'filter':'Wildlife',
    'id':'image48'},
       {'name':'8793.JPG',
    'alt':'Douglas Squirrel',
    'filter':'Wildlife',
    'id':'image49'  },
     {'name':'8849.JPG',
    'alt':'Sunny Ripples',
    'filter':'Nature',
    'id':'image50'},
   {'name':'8871.JPG',
    'alt':'Wildflower',
    'filter':'Nature',
    'id':'image51'},
       {'name':'8935.JPG',
    'alt':'Seattle Rainbow',
    'filter':'Nature',
    'id':'image52'  },
       {'name':'9176.JPG',
    'alt':'Puppy!',
    'filter':'Wildlife',
    'id':'image53'  },
   
     {'name':'9243.JPG',
    'alt':'Beach Fawn',
    'filter':'Wildlife',
    'id':'image54'},
      {'name':'9338.JPG',
    'alt':'Tree Heron',
    'filter':'Wildlife',
    'id':'image55'},
       {'name':'9532.JPG',
    'alt':'Rain Drop',
    'filter':'Nature',
    'id':'image56'  },
     {'name':'9546.JPG',
    'alt':'Moss',
    'filter':'Nature',
    'id':'image57'},
  ]

    }
  },
  created(){
   // this.fillArray();
    //this.imageArray = https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/gallery/untitled+folder/c
  },
  methods: {
    showLightbox(imageName) {
      this.$refs.lightbox.show(imageName);
    },
    updateFilter(filterName) {
      this.galleryFilter = filterName;
    },
    clickAll(){
      this.updateFilter('all');
      this.ex8="All";
    },
    clickWildlife(){
      this.updateFilter('Wildlife');
      this.ex8="Wildlife";
    },
    // clickOcean(){
    //   this.updateFilter('Ocean');
    //   this.ex8="Ocean";
    // },
    clickDriftwood(){
      this.updateFilter('Driftwood');
      this.ex8="Driftwood";
    },
    clickNature(){
      this.updateFilter('Nature');
      this.ex8="Nature";
    },
    fillArray(){
//       axios.get('https://site.com/', {
//   params: {
//     Host: 'Flavio'
//   }
// })
      // https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/gallery/untitled+folder/c
      // /gallery/untitled+folder/?list-type=2
     // axios.get('https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/?list-type=2')
      //  .then(({data}) => {
          // this.imageArray = 
          // this.grams = data.data
          // this.username = data.data[0].user.username
          // this.next_url = data.pagination.next_url
      //    console.log(data);

       // })
        //.catch(function (error) {
         // console.log(error)
          // this.error = true
       // });
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
  // background-color: #67676976;
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
.image-container{
   width: 300px;
  margin: 5px 5px;
  border-radius: 3px;
  background-color: #11113220;
}
</style>
