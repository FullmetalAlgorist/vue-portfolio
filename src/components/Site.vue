<template>
  <v-hover v-model="hover">
    <v-card
      class="v-card--game"
      elevation="6"
     
    >
<!--  @click="toSite" -->
        <v-img
          v-bind="$attrs"
          :height="height"
          :src="value.src"
          style="border-radius: inherit;"
        >
         <!-- :style="styles" -->
          <v-layout
            align-center
            justify-center
            fill-height
            ma-0
            transition-swing
          >
            <!-- <v-img
              :src="value.src"
              contain
              max-width="180"
              style="z-index: -1;"
            /> -->
          </v-layout>
        </v-img>
     <!-- <component
        :is="Show"
      /> -->
      <show />
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    components: {
    //   InstallAction: () => import('@/components/library/InstallAction'),
      Show: () => import('@/components/goThough'),
    //   VerifyAction: () => import('@/components/library/VerifyAction')
    },
    inheritAttrs: false,
    props: {
      dense: {
        type: Boolean,
        default: false
      },
      prominent: {
        type: Boolean,
        default: false
      },
      // showAction: {
      //   type: Boolean,
      //   default: false
      // },
      static: {
        type: Boolean,
        default: false
      },
      tall: {
        type: Boolean,
        default: false
      },
    //   understate: {
    //     type: Boolean,
    //     default: false
    //   },
      value: {
        type: Object,
        default: () => ({})
      }
    },

    data: () => ({
      hover: false
    }),

    computed: {
    //   ...mapState('verify', ['verifying']),
      height () {
        // if (this.tall) return 524
        // if (this.dense) return 150
        // if (this.prominent) return 600
        // return 250
        return 524
      },
    //   styles () {
    //     let backgroundColor

    //     if (this.understate) {
    //       backgroundColor = 'rgba(117, 117, 117, .72)'
    //     } else if (!this.static && this.hover) {
    //       backgroundColor = 'rgba(255, 255, 255, .16)'
    //     }

    //     return {
    //       backgroundColor
    //     }
    //   }
    },
mounted(){

},
    methods: {
      toSite(){
        // console.log();
        // this.$route.push(this.value.link);
        window.location = this.value.link;
      }
    //   getAction (game) {
    //     let action = 'Launch'

    //     // if (this.verifying === game.id) action = 'Verify'
    //     // if (!game.installed) action = 'Install'

    //     // return `${action}Action`
    //   }
    }
  }
</script>
