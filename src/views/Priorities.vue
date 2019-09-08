<template>
  <core-section id="Priorities">
    <v-layout wrap justify-center align-center>
    <v-flex xs12 md12 class="outer">
      <section>
        <core-heading v-text="'I prioritize:'" />
        <abstract-4 />
        <div>
          <v-expansion-panel v-model="expansion">
            <v-expansion-panel-content
              v-for="(item,i) in items"
              :key="i"
              :class="expansion !== i ? 'transparent' : 'db'"
            >
              <!--         :class="expansion !== i ? 'blue' : 'red'"      :class="expansion !== i ? 'db' : 'transparent'" -->
              <div slot="header" class="headline">
                <div v-text="item.title" />
              </div>
              <div>
                <v-card class="db">
                  <v-card-text class="priority font-weight-light">
                    <v-tooltip
                      right
                      v-if="item.link"
                      ref="tooltip"
                      v-model="tooltip"
                      close-delay="2000"
                    >
                      <!-- <template v-slot:activator="{ on }"> -->
                      <v-icon slot="activator" class="question">mdi-help-circle-outline</v-icon>

                      <!-- </template> -->
                      <span @mouseenter="tooltip=true" @mouseleave="tooltip=false">
                        <!-- @mouseenter="$refs.tooltip.closeDelay(500)" @mouseleave="$refs.tooltip.closeDelay(0)" -->
                        <a
                          href="https://www.perficientdigital.com/insights/our-research/mobile-vs-desktop-usage-study"
                        >Source</a>
                      </span>
                    </v-tooltip>
                    {{ item.summary }}
                  </v-card-text>

                  <!-- <v-icon class="question">mdi-help-circle-outline</v-icon> -->
                </v-card>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>
      </section>
    </v-flex>
    </v-layout>
  </core-section>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  data: () => ({
    expansion: 0,
    tooltip: false
  }),
  components: {
    Abstract4: () => import("@/components/Abstract4")
    // Project: () => import('@/components/Project')
  },
  computed: {
    ...mapState("app", ["schema"]),
    items() {
      return this.schema.priorities;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-expansion-panel > li {
  border-top: 1px solid rgba(#fff, 0.12) !important;
  border-radius: 1%;
}
.l {
  list-style-type: none;
  padding-top: 150px;
  font-size: 200%;
  text-decoration: none !important;
}
.eye {
  padding-left: 10px;
}
// .v-icon{
//     color: #e5a12e !important;
// }
.v-expansion-panel__container {
  //  background-color: rgba(0,0,0,.28) !important;
  opacity: 0.72 !important;
  z-index: 1;
}
// rgba(65,223,213,.42)
.question {
  // display: inline;
  font-size: large;
  margin-bottom: 2px;
}
.priority{
    font-size: 19px;

}
.outer{
  max-width: 800px;
}
</style>
