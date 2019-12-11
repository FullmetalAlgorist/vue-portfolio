<template>
  <core-section id="contact">
    <abstract-5 />
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
    <v-flex
      xs12
      sm7
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
    <v-flex
      xs12
      sm5
    >
      <v-img
        src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/frontPage/m.png"
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
      SocialContacts: () => import('@/components/SocialContacts'),
      Abstract5: () => import('@/components/Abstract5')
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

.v-list{
    /* justify-content: center !important;
   
    text-align: center !important; */
    /* align-items: center !important; */
    /* margin-right: 55px; */
}

.v-list__tile__title, .v-list__tile__content {
  align-items: center !important;
    text-align: center!important;
}
.v-list__tile__content{
    /* margin-top: 15px; */
  margin-bottom: 25px;
}
.v-avatar{
    /* justify-content: right !important;
   
    text-align: right !important;
    align-items: right !important; */
}

.iconic{
  /* margin-left: 10px;
  margin-right: 15px; */
  margin-top: 5px;
  margin-bottom: 5px;

}

/* .v-input__slot {
    background: rgba(0,0,0,.28) !important;
    
    color: white !important;
} */
/* .v-input__slot--is-focused{
background: rgba(157, 9, 9, 0.28) !important;
} */

/* .theme--dark.v-text-field--solo-inverted.v-text-field--solo > .v-input__control > .v-input__slot{
color: white !important;
} */
</style>
