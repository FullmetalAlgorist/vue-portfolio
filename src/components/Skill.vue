<template>
  <div class="mb-4">
    <h4
      class="text-uppercase mb-3 primary--text"
      v-text="value.name"
    />

    <div class="pl-4">
      <v-layout
        v-for="(skill, i) in value.keywords"
        :key="i"
        align-center
        mb-2
      >
        <v-flex xs5>
          <h5
            class="subheading"
            v-text="skill"
          />
        </v-flex>
        <v-flex xs7>
          <v-rating
            length="4"
            dense
            empty-icon="mdi-record"
            full-icon="mdi-record"
            :value="value.level"
            background-color="grey darken-4"
            readonly
          />
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        default: () => ({
          category: '',
          skills: []
        })
      }
    }
  }
</script>
