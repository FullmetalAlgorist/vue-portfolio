<template>
  <core-section id="contact">
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
        Have a question?  Want to chat about your next project idea, or how to make your personal or business website more attractive and effective? Shoot me a message, I would love to chat!
      </core-text>

      <core-subheading class="text-uppercase mb-3">
        Send me a Message
      </core-subheading>

      <v-form v-model="valid" ref="form">
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
        <v-layout  wrap>
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
              class="ma-0 mr-4"
              color="secondarylight black--text"
              @click="resetMe"
            >
              Clear
            </v-btn>
            <v-btn
              class="ma-0"
              color="primarydark black--text"
              @click="contactMe"
            >
              Contact Me
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
    <v-flex
      xs12
      sm7
      
     
    >
      <core-subheading class="text-uppercase">
        Social Contacts
      </core-subheading>

      <social-contacts />

      <v-list
        class="transparent"
        three-line
     
      >
        <v-list-tile>
          <v-list-tile-avatar>
            <v-icon
              size="48"
              color="primary"
              class="iconic"
            >
              mdi-map-marker
            </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title  class="primary--text">
              Current Location
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ schema.basics.location.address }}<br>
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-avatar>
            <v-icon
              size="48"
              color="primary"
              class="iconic"
            >
              mdi-email
            </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="primary--text">
              Email
            </v-list-tile-title>
            <v-list-tile-sub-title v-text="schema.basics.email" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
    <v-flex
      xs12
      sm5
    >
      <v-img
        :src="require('@/assets/m.png')"
        contain
       max-width="450" 
      />
     <!--  style="top: 75px;" -->
    </v-flex>
    </v-layout>
  </core-section>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'

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
      SocialContacts: () => import('@/components/SocialContacts')
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
<style scoped>
#contact{
  padding-bottom: 0 !important;
}

.v-list__tile__content, .v-list-tile{
    justify-content: center!important;
    flex-direction: column!important;
    text-align: center!important;
    align-items: center!important;
    margin-right: 55px;
}

.v-list__tile__title, .v-list__tile__sub-title {
    text-align: center!important;
}

.iconic{
  margin-left: 10px;
}
</style>
