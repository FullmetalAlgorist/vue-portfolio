    <template>
      <v-dialog
     v-model="show"
      width="500"
    >
    <v-layout text-xs-center>
      <v-card >
        <v-card-title
          class="bMe justify-center headline grey lighten-2 black--text" 
          primary-title
        >
         {{ schema.sketch[sketchMe].title }}
        </v-card-title>

        <v-card-text class="texty">
         {{ schema.sketch[sketchMe].text }}
        </v-card-text>

        <v-divider></v-divider>
        
        <v-card-actions>
        
          <p class="tips">{{ schema.sketch[sketchMe].tips }}</p>
          <v-spacer></v-spacer>
          <v-btn
            color="black"
            text
           @click.stop="show=false"
           class="mr-2 "
          >
            GOT IT!
          </v-btn>
        </v-card-actions> 
      </v-card>
      </v-layout>
    </v-dialog>   
    </template>
    <script>
      import {
    mapState
  } from 'vuex'
 
    export default {
        props: {
            value: Boolean,
            sketchMe: Number
        },
        data(){
            return {
                
            }
        },
        computed: {
       ...mapState('app', ['schema']),
            show: {
                get (){
                    return this.value
                },
                set (value) {
                    this.$emit('input', value)
                }
            }
        },
        created(){
          //console.log(this.schema.sketch[sketchMe]);
        }
        }
    </script>
    <style lang="scss" scoped>
.tips{
padding: 10px;
font-weight: bold;
text-align: center;
}
.texty{
font-size: 105%;
}
.bMe{
  font-weight: bold;
  font-size: 300% !important;
}

    </style>
    
    
    