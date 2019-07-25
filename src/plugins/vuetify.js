import Vue from 'vue'
import Vuetify, { VLayout } from 'vuetify/lib'
import { Scroll } from 'vuetify/lib/directives'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  options: {
    customProperties:true
  },
//original blues
theme: {
  trial2: '#1F2833', //MARIAH VICARY
  secondarylight: '#71737b',
  trial1: '#1F2833', //background dark
  trial3: '#10a3b3', //secondary bluer laptop color
accent: '#424242',  //Dark grey
  primary: '#4DB6AC', //only one that matters
  primarydark: '#2c9b91', //One shade darker for buttons
  next: '#1b3440',
  //darkenMyPrimary: 'rgb(255,255,255)' //my own, b/c buttons were too bright
},
  components: {
    VLayout
  },
  directives: {
    Scroll
  },
  iconfont: 'mdi'
})

//'#84CEEB'
//'#5680E9'

//brownish
// theme: {
//   trial2: '#383a3f', //MARIAH VICARY
//   trial1: '#383a3f', //background dark
//   trial3: '#895061',
//   accent: '#C1C8E4',
//   primary: '#b2a99a', 
//   next: '#1b3440'
// },

//original blues
// theme: {
//   trial2: '#0B0C10', 
//   trial1: '#1F2833',
//   trial3: '#C5C6C7',
// accent: '#66FCF1',
//   primary: '#45A29E',
//   next: '#1b3440'
// },

//purply/dark blue back
// theme: {
//   trial2: '#383a3f', //MARIAH VICARY
//   trial1: '#121227', //background dark
//   trial3: '#895061',
//   accent: '#C1C8E4',
//   primary: '#8362d9', 
//   next: '#1b3440'
  
// },