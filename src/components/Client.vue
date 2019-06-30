<template>
  <v-sheet
    color="transparent"
    :class="$vuetify.breakpoint.mdAndUp && 'ma-5'"
  >
    <v-layout>
      <v-icon
        size="48"
        color="primary"
        class="align-self-start mr-2"
      >
        mdi-pause
      </v-icon>

      <div class="pt-3 font-italic">
        <p
          class="subheading font-weight-light"
          v-text="value.quote"
        />

        <v-layout
          justify-end
          align-center
        >
          <span
            class="primary--text"
            v-text="value.name"
          />&nbsp;|&nbsp;
          <span
            class="gre--text"
            v-text="value.company"
          />
          <v-avatar
            v-if="value.avatar"
            class="ml-4"
          >
            <!-- <v-img :src="require(`@/assets/clients/${value.avatar}`)" /> -->
          </v-avatar>
        </v-layout>
      </div>
    </v-layout>
  </v-sheet>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        default: () => ({
          quote: '',
          name: '',
          company: '',
          avatar: undefined
        })
      }
    }
  }
</script>
