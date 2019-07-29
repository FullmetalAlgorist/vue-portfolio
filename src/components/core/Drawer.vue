<template>
<!-- app -->
  <div>
    <v-btn     
      class="toggle homer"  
      fixed
      dark
      fab
      right
      @click="goHome"
      v-if="!onHome"
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn     
      class="toggle"  
      fixed
      color="trial1--lighten"
      fab
      right
      @click="toggleMenu"
      v-if="$vuetify.breakpoint.mdAndUp && onHome"
    >
      <v-icon>{{menuIcon}}</v-icon>
    </v-btn>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndUp && show && onHome"
      app
      class="text-xs-center nav"
      permanent
      right
    >
    <v-img src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/frontPage/trianglify.png" 
    height="100%"
    class="triangles">
      <v-layout
        align-center
        column
        fill-height
        justify-center
        py-5
        class="mid"
      >
        <br>
        <div
          class="display-1 mb-2 trial2--text"
          v-text="schema.basics.name"
        />
         <br>
        <v-flex><div class="timer"></div></v-flex>
        <div
          v-for="(item, i) in items"
          :key="i"
        >
      <!-- font-weight-light is an option both above and below-->
          <v-btn
            flat
            class="text-capitalize subheading  mb-3 bb"
            @click="$vuetify.goTo(item.to)"
          >
            <span v-text="item.text" class="hi"/>
          </v-btn>
        </div>
        <div class="mt-auto">
          <social-contacts />
        </div>
      </v-layout>
      </v-img>
    </v-navigation-drawer>
  </div>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'Drawer',
    components: {
      SocialContacts: () => import('@/components/SocialContacts')
    },
    methods:{
      toggleMenu(){
        if(this.menuIcon === 'mdi-close'){
          this.menuIcon = 'mdi-menu';
        } else{
          this.menuIcon = 'mdi-close';
        }
        this.show = !this.show;
         this.$root.$emit('toggleMe', this.show);
      },
      goHome(){
      this.$router.push('/');
      this.show = false;
      this.menuIcon = 'mdi-menu'
      }
    },

    data: vm => ({
      show: false,
      menuIcon: 'mdi-menu',
      items: [
        {
          text: 'About Me',
          to: '#about-me'
        },
        {
          text: 'Portfolio',
          to: '#works'
        },
        {
          text: 'Priorities',
          to: '#Priorities'
        },
       
        {
          text: 'Processing',
          to: '#processing'
        },
        {
          text: 'Photography',
          to: '#portfolio'
        },
        
        {
          text: 'Contact',
          to: '#contact'
        }
      ]
    }),

    computed: {
      ...mapState('app', ['initials', 'schema']),
      onHome () {
        return this.$route.name === 'Home'
      }
    }
  }
</script>
<style lang="scss" scoped>
.nav{
  background-color: rgba(31, 40, 51, 0.24); //.24
padding: 0;
}
.triangles{
  //opacity: .2;
  //stroke-opacity: .2;
 //background-color: rgba(31, 40, 51, 0.94);
}
.bb{
  color: rgb(255, 255, 255);
}
.toggle{
  margin: 11px -5px 0 0;
  opacity: .7;
}
.hi{
font-size: 150%;
font-weight: 375 !important;
}
.bord{
  border: solid white 2px;
  padding-left: 10px;
  padding-right: 10px;
}
.homer{
  border: white solid 1.5px;
}
.timer {
  animation: side-to-side 4s ease-in-out reverse infinite;
  background-color: var(--v-trial1-base);
  border:solid 10vmin var(--v-primary-base);
  border-radius:50%;
  box-sizing:border-box;
  display: block;
  height:10vmin;
  margin-left:-5vmin;
  position:absolute;
  width:10vmin;
}

@keyframes side-to-side {
  0%, 100% {
    border-bottom-width:0;
    border-left-width:5vmin;
    border-right-width:0;
    border-top-width:0;
  }
  25% {
    border-bottom-width:5vmin;
    border-left-width:0;
    border-right-width:0;
    border-top-width:0;
  }
  50% {
    border-bottom-width:0;
    border-left-width:0;
    border-right-width:5vmin;
    border-top-width:0;
  }
  75% {
    border-bottom-width:0;
    border-left-width:0;
    border-right-width:0;
    border-top-width:5vmin;
  }
}
</style>
