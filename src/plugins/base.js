import Vue from 'vue'
import Heading from '@/components/core/Heading'
import Section from '@/components/core/Section'
import Subheading from '@/components/core/Subheading'
import Text from '@/components/core/Text'

import VueMobileDetection from "vue-mobile-detection";
Vue.use(VueMobileDetection);

Vue.component('core-heading', Heading)
Vue.component('core-section', Section)
Vue.component('core-subheading', Subheading)
Vue.component('core-text', Text)
