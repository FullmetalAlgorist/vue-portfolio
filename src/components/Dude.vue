<template>
  <v-sheet
    color="transparent"
    :class="$vuetify.breakpoint.mdAndUp && 'ma-5'"
  >
    <v-layout>
     
      <div class="pt-3 font-italic">
        <p
          class="subheading font-weight-light"
          v-text="value.quote"
        />
<!-- justify-end -->
        <v-layout
          align-center
          justify-end
        >
         <v-icon class="primary--text">mdi-star</v-icon>
          &nbsp;|&nbsp;
          <span
            class="gre--text ml-2"
            v-text="value.skills"
          />

 <v-tooltip dark fixed bottom nudge-top="100" nudge-right="10">
      <template v-slot:activator="{ on }">
          <a  v-on="on" target="_blank" href="https://mariah-nutrition-app.herokuapp.com/">
          <v-avatar
            v-if="value.avatar"
            class="ml-4 my-3 avat"
          >
            <v-img :src="require(`@/assets/clients/${value.avatar}`)"> </v-img>
          </v-avatar>
           </a>
      </template>
      <span><v-icon small>mdi-open-in-new</v-icon> Open App</span>
    </v-tooltip>
        </v-layout>
      </div>
    </v-layout>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
    x: 340,
    y: 430
  }),
    props: {
      value: {
        type: Object,
        default: () => ({
          quote: '',
          name: '',
          company: '',
          avatar: undefined
        })
      }
    },
    methods: {
      goHeroku(){
        this.$route.push('https://mariah-nutrition-app.herokuapp.com/');
      },
    moveMe(e){
      console.log('hi');
      this.x = e.clientX;
      this.y = e.clientY;
  }
    }
  }
</script>
<style scoped>
.avat{
  height: 155px !important;
    width: 155px !important;
}
</style>
