import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import dashboard from '../components/home/charModule/charDashboard.vue'
import user from '../components/home/charModule/charUser.vue'
import info from '../components/home/charModule/charInfo.vue'
import stats from '../components/home/charModule/charStats.vue'
import contacts from '../components/home/charModule/charContacts.vue'
import history from '../components/home/charModule/charHistory.vue'
import login from '../components/home/charModule/charLogin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard',
      component: home,
      children: [
        { path: '/dashboard', 
          name: 'dashboard',
          component: dashboard 
        },        
        { path: '/user', 
          name: 'user',
          component: user 
         },        
         { path: '/info', 
           name: 'info',
           component: info 
        },        
        { path: '/stats', 
          name: 'stats',
          component: stats 
        },        
        { path: '/contacts', 
          name: 'contacts',
          component: contacts 
        },
        { path: '/history', 
          name: 'history',
          component: history 
        },
        { path: '/login', 
          name: 'login',
          component: login 
        }
      ],
    },
    {
      path: '/blog',
      name: 'blog'
    },   
    {
      path: 'loading-mailing',
      name: 'loading-mailing'
    } 
  ]
})
