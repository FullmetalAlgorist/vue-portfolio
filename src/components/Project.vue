<template>
  <v-sheet
    height="100%"
    :class="$vuetify.breakpoint.mdAndUp && 'pa-5'"
    color="transparent"
  >
    <div class="text-xs-center mb-5">
      <core-subheading
        class="mb-1"
        v-text="value.name"
      />
      <span
        class="subheading"
        v-text="value.category"
      />
    </div>
    <v-layout wrap>
      <v-flex shrink>
        <div
          class="mb-3"
          style="max-width: 500px;"
        >
          <core-subheading class="mb-3">
            Project Details
          </core-subheading>
          <core-text>
            In ac felis quis tortor malesuada pretium. Phasellus dolor. Fusce fermentum odio nec arcu. Integer tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ac felis quis tortor malesuada pretium. Phasellus dolor. Fusce fermentum odio nec arcu. Integer tincidunt.
          </core-text>

          <core-subheading>
            Project Info
          </core-subheading>
          <v-list class="transparent">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="primary">
                  mdi-account
                </v-icon>
              </v-list-tile-action>
              <v-list-tile-title class="mr-2">
                Client Name
              </v-list-tile-title>
              <v-list-tile-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                the clients name
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="primary">
                  mdi-calendar
                </v-icon>
              </v-list-tile-action>
              <v-list-tile-title class="mr-2">
                Project Dates
              </v-list-tile-title>
              <v-list-tile-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                date, date
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="primary">
                  mdi-tag
                </v-icon>
              </v-list-tile-action>
              <v-list-tile-title class="mr-2">
                Project Category
              </v-list-tile-title>
              <v-list-tile-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                category, category, category
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </div>
      </v-flex>
      <v-flex
        v-if="value.src"
        class="hidden-sm-and-down"
      >
        <v-img
          :src="require(`@/assets/projects/${value.src}`)"
          height="350"
          width="500"
          contain
          class="mx-auto"
        />
      </v-flex>
    </v-layout>
  </v-sheet>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        default: () => ({
          name: '',
          category: '',
          src: undefined
        })
      }
    }
  }
</script>
