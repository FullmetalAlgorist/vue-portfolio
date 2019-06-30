<template>
  <div class="list">
    <v-layout>
        <v-flex class="text-xs-center sm6">
            <h4 class="text-uppercase mb-3 primary--text" v-text="'Frameworks'"/>
                <v-chip v-for="skill in frameWorks" :key="skill.id" outline text-color="white" color="primary">{{ skill }}</v-chip>
        </v-flex>
        <v-flex class="text-xs-center sm6">
            <h4 class="text-uppercase mb-3 primary--text" v-text="'Web Development'" />
                <v-chip v-for="skill in webSkills" :key="skill.id" outline text-color="white" color="primary">{{ skill }}</v-chip>
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