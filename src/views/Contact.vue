<template>
  <core-section id="contact" class="contactClass">
    <abstract-5   v-if="$route.name == 'Home'" />
    <v-flex xs12>
      <core-heading>Say hello!</core-heading>
    </v-flex>

    <v-flex
      xs12
      mb-4
      :pr-5="$vuetify.breakpoint.mdAndUp"
    >
      <core-subheading class="text-uppercase">
        I'm available for freelance
      </core-subheading>
      <core-text class="mb-5">
        Do you like something you see? Let's talk about it! Shoot me a message, I would love to collaborate.
      </core-text>

      <core-subheading class="text-uppercase mb-3">
        Send me a Message
      </core-subheading>

      <v-form v-model="valid" ref="form" class="formYou ">
         <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card >
        <v-card-title class="headline primary text-center"> Thank you! Your email was sent!! </v-card-title>
        <v-card-text>
          Please be patient, it might take a few days for a reply :).
        </v-card-text>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        <v-layout class="formMe" wrap>
          <v-flex xs12>
            <v-text-field
              solo-inverted
              flat
              label="Name"
              :rules="nameRules"
              v-model="Name"
          
            />
          </v-flex>
          <v-flex xs12>
            <v-text-field
              solo-inverted
              flat
              label="Email"
              :rules="emailRules"
              v-model="Email"
             
            />
          </v-flex>
          <v-flex xs12>
            <v-text-field
            v-model="Subject"
              solo-inverted
              flat
              label="Subject"
            />
          </v-flex>
          <v-flex xs12>
            <v-textarea
            v-model="Message"
              solo-inverted
              flat
              label="Message"
              :rules="messageRules"
            />
          </v-flex>
          <v-flex text-xs-right>
             <v-btn
              class="ma-0 mr-4 font-weight-light"
              color="secondarylight black--text"
              @click="resetMe"
            >
              Clear
            </v-btn>
            <v-btn
              class="ma-0 font-weight-light"
              color="primarydark black--text"
              @click="contactMe"
            >
              send
            </v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-flex>
    <v-layout wrap
     align-center
      justify-center
        fill-height
        text-xs-center
        pt-2
        >
   
    <!-- <div  max-width="500px"> -->
      
      <!-- $route.name -->

  
  
       <v-flex
      xs12
      md6 
     style="max-width: 600px;"
        class="me"
      
    >
    <!-- <p>{{$route.name}}</p> -->
        <v-img
       
       v-if="$route.name == 'Home'"
      :src="require('@/assets/realFinalLow.png')"
     
      class="me"
      /> 
     <v-card 
      v-else
     class="mb-4 second restrict" elevation="20">
      <video-background 
          class="vid"
          src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/wire720.mp4"
          poster="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/vids/stills/WIRE.jpg"
          playsWhen="canplaythrough"
        ></video-background> 
     </v-card>
    </v-flex>
    <v-flex
      xs12
      md4
    >
      <core-subheading class="text-uppercase">
        do you want more?
      </core-subheading>

      <social-contacts />
      <v-list
        class="transparent"
        three-line
     
      >
          <v-list-tile-content>
              <v-icon
              size="48"
              color="primary"
              class="iconic"
            >
              mdi-map-marker-outline
            </v-icon>
            <v-list-tile-title  class="primary--text">
              Current Location
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ schema.basics.location.address }}<br>
            </v-list-tile-sub-title>
          </v-list-tile-content>
  
         
          <v-list-tile-content>
                      <v-icon
              size="48"
              color="primary"
              class="iconic"
            >
              mdi-email-outline
            </v-icon>
            <v-list-tile-title class="primary--text">
              Email
            </v-list-tile-title>
            <v-list-tile-sub-title v-text="schema.basics.email" />
          </v-list-tile-content>
      </v-list>
         
    </v-flex>

    </v-layout>
  </core-section>
  
</template>

<script>
  // Utilities
  import VideoBackground from "vue-responsive-video-background-player";
  import {
    mapState
  } from 'vuex';
  

  export default {
    data() {
      return {
        valid: false,
        Name: '',
        Email: '',
        Subject: '',
        Message: '',
        toEmail: 'mariah.vicary@gmail.com',
        dialog : false,
        nameRules: [
          v => !!v || 'Name please!'
         ],
         emailRules: [
           v => !!v || 'Email please',
           v => /.+@.+/.test(v) || 'Please enter a valid email!'
         ],
          messageRules: [
           v => !!v || 'Say something!'
         ]
      }
    },
    components: {
      SocialContacts: () => import('@/components/SocialContacts'),
      Abstract5: () => import('@/components/Abstract5'),
      VideoBackground
    },

    computed: {
      ...mapState('app', ['schema'])
    },
    methods: {
      contactMe(){
          if(this.valid){
              console.log('Info to send: ', this.Name,
        this.Email,
        this.Subject,
        this.Message);

        Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mariah.vicary@gmail.com",
    Password : "8aedb6d1-afc8-4505-be2e-0c23e06d8978",
    To : this.toEmail,
    From : 'mariah.vicary@gmail.com',
    Subject : this.Subject,
    Body : this.Message + ' return address given: '+ this.Email
}).then(
  message => {
    if(message === 'OK'){
      this.dialog = true;
      this.$refs.form.reset()
    }else{
       alert(message);
    }
 }
);
          }
          else{
              console.log('Not Valid');
          }
      },
      resetMe(){
        this.$refs.form.reset()
      }
    }
  }
</script>
<style>
#contact{
  padding-bottom: 0 !important;
}

.v-list__tile__title, .v-list__tile__content, .me {
  align-items: center !important;
    text-align: center!important;
}
.v-list__tile__content{
  margin-bottom: 25px;
}

.iconic{
  margin-top: 5px;
  margin-bottom: 5px;
}
.vid {
  min-height:50vh;
  /* width: 100%; */
    /* max-width: 500px;   */
  
  
}
.contactClass{
  padding-top: 0 !important;
}
</style>
