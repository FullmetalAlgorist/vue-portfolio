<template>
  <core-section
    id="skills"
    justify-space-around
  >
    <abstract-2 />
    <v-flex
      xs12
      mb-5
      position="top center"
    >
      <v-layout justify-space-between>
        <core-heading >What I know.
        <p  class="pt-2 phot subheading font-weight-light font-italic">
           <v-icon class="pr-2">mdi-camera</v-icon>
           All photographs were taken by me unless otherwise noted!
          </p></core-heading>
      
         
        <blockquote
          style="max-width: 230px;"
        >

          <p class="core-subheading font-weight-light font-italic">
           I've focused on the technologies that I currently prefer, but know quite a few more, and love learning new things!
                  </p>
                  <br>
          <footer class="text-xs-center">
            <v-btn color="primary black--text">
              download résumé 
            </v-btn>
          </footer>
        </blockquote>
      </v-layout>
    </v-flex>

    
    <v-flex
      xs12
      md3
    >
      <h3 class="display-1 font-weight-medium mb-4 primary--text">
        My Education
      </h3>
      <education-card
        v-for="(degree, i) in schema.education"
        :key="i"
        :value="degree"
      />
    </v-flex>
    <v-flex
      xs12
      md4
    >
      <h3 class="display-1 font-weight-medium mb-4 primary--text">
        Mastered Technologies 
      </h3>
      <list />
      <!-- <skill
        v-for="(skill, i) in schema.skills"
        :key="i"
        :value="skill"
      /> -->
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
      Abstract2: () => import('@/components/Abstract2'),
      EducationCard: () => import('@/components/EducationCard'),
      Skill: () => import('@/components/Skill'),
      List: () => import('@/components/tagList')
    },

    computed: {
      ...mapState('app', ['schema'])
    }
  }
</script>
<style lang="scss" scoped>
.sub{
  font-size: 120%;
}
.phot{
  color: white;
}
</style>
