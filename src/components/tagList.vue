<template>
  <div class="list">
    <v-layout>
        <v-flex  class="text-xs-center">
         
            <!-- <h4 class="grow white--text text-uppercase mb-3 title " v-text="'###'" />  -->
      <!-- :class="`${hover ? white : primary}--text`" --> 
      <!-- text-color="white" -->
      <!-- :class="`${hover ?  'primary' : 'white' }--text`" slot-scope="{ hover }"-->
      <v-hover pa-1 v-for="tag in tags" :key="tag.id">
                <v-chip  
                 text-color="white"
                class="grow"  
                color="#424242bf"
                >{{ tag }}</v-chip>
        </v-hover> 
        </v-flex>
        <!-- <v-flex class="text-xs-center sm6">
            <h4 class="grow text-uppercase mb-3 white-text title" v-text="'Web Development'" />
                <v-hover v-for="skill in webSkills" :key="skill.id">
                <v-chip 
                text-color="white"
                class="grow "  
                outline 
              >{{ skill }}</v-chip>
        </v-hover>
        </v-flex> -->
    </v-layout>
 </div>
</template>
<script>
export default {
  props: {
      tags: {
        type: Array
      }
    },
    data() {
        return{
            //tags: ['Nuxt.js', 'Vue.js', 'Vuetify', 'Processing', 'JavaScript',],
            //webSkills: ['Greensock', 'p5JS', 'NodeJS', 'GIT', 'SSR', 'SEO']
        }
    },
  methods: {
  
  }
}
</script>
<style lang="scss" scoped>
.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.4); 
//color: white;
  //color:' rgb(192,192,192,.8)';
  }
  
</style>

     <!-- Other chip styles -->
     <!-- <v-chip color="primary" text-color="trial1">Other Shit</v-chip> -->
   <!-- <v-chip>
    <v-avatar class="primary">A</v-avatar>
            ANZ Bank
          </v-chip>
      
          <v-chip outline text-color="white" color="primary" >
            <v-avatar class="primary"><v-icon>mdi-code-tags</v-icon></v-avatar>
           Javascript
          </v-chip>
        -->