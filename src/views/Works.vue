<template>
  <core-section 
  id="works"
  justify-space-around
  >
 <abstract-4 />
       <v-flex
      xs12
      mb-5
      position="top center"
    >
          <v-layout justify-space-between>
      <core-heading>Recent Works
   <p  class="pt-2 phot subheading font-weight-light font-italic">
Here are some recent projects I've spent time on, click an image to launch the app!
          </p></core-heading>
          <blockquote
          style="max-width: 230px;"
        >
          <p class="core-subheading font-weight-light font-italic">
           All of my code is public (including the code for this page!), want to see how something works? Check out my github.
                  </p>
                  <br>
          <footer class="text-xs-center">
            <v-btn color="primary black--text">
             Mariah's GitHub <v-icon class="pr-2">mdi-github-circle</v-icon>
            </v-btn>
          </footer>
        </blockquote>
      </v-layout>
    </v-flex>
          
          <v-layout v-for="site in sites"
        :key="site.id"
        justify-space-between wrap>
    <v-flex
      xs12
      md8
    >
      <h3 class="display-1 font-weight-medium mb-4 primary--text">
        {{ site.title }}
      </h3>
      <v-img :src="site.src"></v-img>
    </v-flex>
    <v-flex
      xs12
      md3
    >
      <h3 class="display-1 font-weight-medium mb-4 primary--text">
        What produce is in season?
      </h3>
 <p>
   Produce that's in season is <b>cheaper</b>, more <b>nutritous</b> , <b>tastes better</b>, and has a <b>lower carbon footprint</b> !
 </p>
 <p>
   Bookmark this app on your home  screen for quick  reference  next time you're on a Fruit & Veg run!
 </p>
    </v-flex>
          </v-layout>
  </core-section>
</template>

<script>
  export default {
    components: {
       Abstract4: () => import('@/components/Abstract4'),
    //   Site: () => import('@/components/Site')
    },
// :src="require(`@/assets/clients/${value.avat`)"
    data: () => ({
        sites: [
          {
            title: 'Healthy Harvest Nutrition App',
            src: require('@/assets/appDemo.png'),
            link: 'https://mariah-nutrition-app.herokuapp.com'
          },
          {
            title: 'Artist/Album search',
            src: require('@/assets/clients/roboto.png'),
             link: 'https://akcrew-roboto.herokuapp.com/'
          },
          {
            title: 'Parallax and photo blog',
             src: require('@/assets/clients/p.png'),
             link: 'https://akcrew-transitions.herokuapp.com/'
          }
        ]
    })
  }
</script>
<style lang="scss">
   .phot{
     color: white;
     font-size: 42% !important;
   }
</style>