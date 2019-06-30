<template>
  <core-section id="works">
    <abstract-4 />
    <v-layout
      mb-5
      wrap
    >
      <v-flex @click="toProcessing">
<v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
      </v-flex>
    </v-layout>
   
    
  </core-section>
</template>

<script>
  export default {
    components: {
       Abstract4: () => import('@/components/Abstract4')
    },
// :src="require(`@/assets/clients/${value.avat`)"
    data: () => ({
        items: [
          {
            src: require('@/assets/sketches/two.png')
          },
          {
            src: require('@/assets/sketches/four.png')
          },
          {
            src: require('@/assets/sketches/three.png')
          },
        //    {
        //     src: require('@/assets/sketches/mariah.tiff')
        //   }
        ]
    }),
    methods:{
        toProcessing(){
        this.$router.push('/processing');
      }
    }
  
  }
  
</script>
<style lang="scss">
    .redbox{
        background-color: red;
        
    }
</style>