<template>
  <core-section id="projects">
    <abstract-4 />

    <core-heading>Recent projects.</core-heading>

    <v-layout
      mb-5
      wrap
    >
      <v-flex
        v-for="(dude, i) in dudes"
        :key="`quote-${i}`"
        xs12
        md6
      >
      <div    class="text-uppercase name" v-text="dude.name"></div>
        <duder :value="dude" />
      </v-flex>
    </v-layout>
   
    
  </core-section>
</template>

<script>
  export default {
    components: {
       Abstract4: () => import('@/components/Abstract4'),
      Duder: () => import('@/components/Dude')
    },

    data: () => ({
      dudes: [
        {
          quote: 'Check out what produce is in season with this simple colorful single page application',
          name: 'Nutritional App: ',
          skills: 'greensock, firebase',
          avatar: 'Screen.png'
        },
        {
          quote: 'Snazzy description of an app that doesnt do much but has cool route animations and authentication with cute animal pics',
          name: 'Route transition demo -- native app animation',
          skills: 'authentication, route transitions',
          avatar: 'space.png'
        },
        {
          quote: 'Mock team communications app, including ',
          name: 'Team task managment demo',
          skills: 'nuxt, material design',
          avatar: 'todo.png'
        }
        //,
        // {
        //   quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
        //   name: 'L. McCannon',
        //   company: 'Motion',
        //   avatar: 'Client4.png'
        // },
        // {
        //   quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
        //   name: 'A. Mah',
        //   company: 'Classic Cafe',
        //   avatar: 'Client5.png'
        // },
        // {
        //   quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
        //   name: 'H. Russo',
        //   company: 'Flagship',
        //   avatar: 'Client6.png'
        // }
      ],
      logos: [
        'motion.png',
        'cafe.png',
        'flagship.png',
        'biere.png'
      ]
    })
  }
</script>
