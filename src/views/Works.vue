<template>
  <core-section id="works">
    <abstract-4 />
    <v-layout
      mb-5
      wrap
    >
      <v-flex>
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
            src: require('@/assets/clients/todo.png')
          },
          {
            src: require('@/assets/clients/space.png')
          },
          {
            src: require('@/assets/clients/Screen.png')
          }
        ]
    })
  }
</script>
<style lang="scss">
    .redbox{
        background-color: red;
        
    }
</style>