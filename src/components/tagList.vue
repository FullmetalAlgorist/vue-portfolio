<template>
  <div class="list">
    <v-layout>
        <v-flex class="text-xs-center sm6">
         
            <h4 class="grow primary--text text-uppercase mb-3 title " v-text="'Frameworks'" /> 
      <!-- :class="`${hover ? white : primary}--text`" --> 
      <!-- text-color="white" -->
      <v-hover v-for="skill in frameWorks" :key="skill.id">
                <v-chip  
                :class="`${hover ?  'primary' : 'white' }--text`" 
                class="grow"  
                outline  
                slot-scope="{ hover }">{{ skill }}</v-chip>
        </v-hover> 
        </v-flex>
        <v-flex class="text-xs-center sm6">
            <h4 class="grow text-uppercase mb-3 white-text title" v-text="'Web Development'" />
                <v-hover v-for="skill in webSkills" :key="skill.id">
                <v-chip 
                :class="`${hover ?  'white' : 'primary' }--text`" 
                class="grow "  
                slot-scope="{ hover }"  
                outline 
              >{{ skill }}</v-chip>
        </v-hover>
        </v-flex>
    </v-layout>
 </div>
</template>
<script>
export default {
    data() {
        return{
            frameWorks: ['Nuxt.js', 'Vue.js', 'Vuetify', 'Processing', 'JavaScript',],
            webSkills: ['Greensock', 'p5JS', 'NodeJS', 'GIT', 'SSR', 'SEO']
        }
    },
  methods: {
  
  }
}
</script>
<style lang="scss" scoped>
.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.3); 
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