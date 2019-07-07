<template>
  <v-hover v-model="hover">
    <v-sheet
      :color="hover || menu ? 'rgb(192,192,192,.1)' : 'rgb(192,192,192)'"
      class="transition-swing launch-action"
      height="64"
    >
      <v-layout
        align-center
        fill-height
        ma-0
      >
        <div
          class="text-uppercase fill-height d-flex align-center ml-4 grow"
          @click="launch"
        >
          {{ hoverInner || menu ? 'Settings' : 'Launch' }}
        </div>

<!-- yeah <- -->

<!-- 
        <v-hover v-model="hoverInner">
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            attach
            bottom
            class="fill-height"
            left
            min-width="100%"
            offset-y
            transition="slide-y-transition"
          >
            <v-sheet
              slot="activator"
              :color="!hover || hoverInner ? 'transparent' : 'secondary darken-2'"
              class="d-flex align-center transition-swing v-sheet--settings"
              height="64"
              width="64"
            >
              <v-icon>
                {{ `mdi-${menu ? 'close' : 'settings'}` }}
              </v-icon>
            </v-sheet> -->

            <!-- <v-list light>
              <v-list-tile
                :disabled="verifying && verifying !== value.id"
                @click="verify"
              >
                <v-list-tile-title>Verify</v-list-tile-title>
              </v-list-tile>

              <v-list-tile @click="createShortcut">
                <v-list-tile-title>Create a shortcut</v-list-tile-title>
              </v-list-tile>

              <v-list-tile @click.stop="autoUpdate = !autoUpdate">
                <v-list-tile-content>
                  <v-list-tile-title>Auto update</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-switch
                    :input-value="autoUpdate"
                    class="ml-auto justify-end"
                  />
                </v-list-tile-action>
              </v-list-tile>

              <v-list-tile @click="uninstall">
                <v-list-tile-title>Uninstall</v-list-tile-title>
                <v-list-tile-sub-title class="caption text-xs-right">
                  4.82GB
                </v-list-tile-sub-title>
              </v-list-tile>

              <v-divider />

              <v-list-tile>
                <v-list-tile-sub-title>Version</v-list-tile-sub-title>
                <v-list-tile-sub-title class="text-xs-right">
                  12032-x64
                </v-list-tile-sub-title>
              </v-list-tile>
            </v-list> -->
          <!-- </v-menu>
        </v-hover> -->

        <v-dialog
          v-model="dialog"
          max-width="400"
        >
          <!-- <v-card>
            <v-img
              :src="require(`@/assets/${value.bg}`)"
              height="200"
            >
              <v-layout
                fill-height
                justify-center
                align-center
              >
                <v-progress-circular
                  indeterminate
                  size="64"
                  color="white"
                />
              </v-layout>
            </v-img>
          </v-card> -->
        </v-dialog>
      </v-layout>
    </v-sheet>
  </v-hover>
</template>

<script>
  // Utilities
  import {
    mapActions,
    mapState,
    mapMutations
  } from 'vuex'

  export default {
    props: {
      value: {
        type: Object,
        default: () => ({})
      }
    },

    data: () => ({
      autoUpdate: true,
      dialog: false,
      hover: false,
      hoverInner: false,
      menu: false
    }),

    computed: {
      ...mapState('library', ['installed']),
      ...mapState('verify', ['verifying'])
    },

    watch: {
      dialog (val) {
        setTimeout(() => (this.dialog = false), 4000)
      }
    },

    methods: {
      ...mapActions('verify', ['verifyInstall']),
      ...mapMutations('snackbar', [
        'setSnackbar',
        'setValue'
      ]),
      ...mapMutations('library', ['setInstalled']),
      createShortcut () {
        this.menu = false
        this.setSnackbar({
          msg: 'Shortcut created'
        })
        this.setValue(true)
      },
      launch () {
        this.dialog = true
      },
      async verify () {
        this.menu = false
        this.hover = false

        await this.$nextTick()

        setTimeout(() => {
          this.verifyInstall(this.value.id)
        }, 150)
      },
      uninstall () {
        this.menu = false
        this.hover = false

        const installed = this.installed

        this.setInstalled(installed.filter(id => id !== this.value.id))
      }
    }
  }
</script>

<style lang="scss">
.launch-action .v-input--selection-controls__input {
  margin-right: 0;
}
.v-sheet--settings {
  border-bottom-right-radius: 6px;
}
</style>
