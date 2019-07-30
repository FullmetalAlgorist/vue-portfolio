import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home')
    },
    {
      path: '/processing',
      name: 'processing',
      component: () => import('@/views/mine/Processing')
    },
    {
      path: '/photography',
      name: 'photography',
      component: () => import('@/views/mine/Photography')
    },  
    {
      path: '/parallax',
      name: 'parallax',
      component: () => import('@/views/mine/Parallax')
    },
    {
      path: '/play',
      name: 'animation',
      component: () => import('@/views/mine/Animation')
    },
    {
      path: '/insta',
      name: 'instagram',
      component: () => import('@/views/mine/Instagram')
    }

    
  ]
})

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.VUE_APP_GOOGLE_ANALYTICS) {
  Vue.use(require('vue-analytics').default, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development'
    }
  })
}

export default router
