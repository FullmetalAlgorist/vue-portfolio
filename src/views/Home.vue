<template>
  <div>
    <hero :load="load"/>

    <v-container
      py-5
      px-0
      fluid
      :class="{padR: med&&show}"
      class="cont"
    >
      <about-me />
      <skills />
      <works />
      <priorities />
      <glitch />
      <!-- <Processing /> -->
      <portfolio />

      <contact />
    </v-container>
  </div>
</template>

<script>


  export default {
    components: {
      AboutMe: () => import('@/views/AboutMe'),
      Glitch: () => import('@/views/Glitch'),
      // Projects: () => import('@/components/Projects'),
      Hero: () => import('@/views/Hero'),
      //Experience: () => import('@/views/Experience'),
      Portfolio: () => import('@/views/Portfolio'),
      Priorities: () => import('@/views/Priorities'),
      //Processing: () => import('@/views/Process'),
      Skills: () => import('@/views/Skills'),
      Works:  () =>  import('@/views/Works'),
      Contact: () => import('@/views/Contact')
    },

    metaInfo () {
      return {
        title: this.$i18n.t('Home.title')
      }
    },
    computed:{
      med(){
        
        return this.$vuetify.breakpoint.mdAndUp;
      },
      loader(){
        return this.load;
      }
     
    },
mounted(){
    this.$root.$on('toggleMe', (text) => { // here you need to use the arrow function
     this.show = text;
     
    })
},
    data: () => ({
      load: false,
      show : false,
    }),
    created(){
      let self = this;
      window.addEventListener('load',(e) => {
    // waits for all data to load
    self.load = true;
    });
    }
  }
</script>
<style scoped>
.padR{
  padding: 0px 300px 0px 0px !important;
}
.cont{
  padding-bottom: 0 !important;
}
</style>

