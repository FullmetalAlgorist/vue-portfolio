<template>
  <core-section id="Priorities">
    <v-flex
      xs12
      md12
    >
      <section >
        <core-heading v-text="'I prioritize:'" />
        <abstract-4 />
        <div>
          <v-expansion-panel
            v-model="expansion"
            popout
          >
            <v-expansion-panel-content
              v-for="(item,i) in items"
              :key="i"
              :class="expansion !== i ? 'transparent' : 'db'"
            >
              <div
                slot="header"
                class="title font-weight-light"
                color="db"
              >
                <div v-text="item.company" />
              </div>
              <div>
                <v-card color="db">
                  <v-card-text v-text="item.summary" />
                </v-card>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>
      </section>
    </v-flex>

  </core-section>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'

  export default {
    data: () => ({
      expansion: 0
    }),
components: {
      Abstract4: () => import('@/components/Abstract4'),
      // Project: () => import('@/components/Project')
    },
    computed: {
      ...mapState('app', ['schema']),
      items () {
        return this.schema.work
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-expansion-panel > li{
    border-top: 1px solid rgba(#fff, .12) !important
    }
    .l{
      list-style-type:none;
       padding-top: 150px;
       font-size: 200%;
       text-decoration: none !important;
    }
    .eye{
      padding-left: 10px;
    }
    .v-icon{
        color: #e5a12e !important;
    }
    .v-expansion-panel__container{
       border-color: red !important;
    }
</style>
