import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AppFilms from '../views/App-films.vue'
import Nowplaying from '../views/films/Nowplaying.vue'
import Comingsoon from '../views/films/Comingsoon.vue'
import AppCenter from '@/views/App-center.vue'
import Order from '@/views/Order.vue'
import Login from '@/views/Login.vue'
import AppCinemas from '../views/App-cinemas.vue'
import City from '@/views/City.vue'
import Search from '../views/Search.vue'
import Detail from '../views/Detail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: 'home',
    component: AppFilms,
    children: [
      {
        path: '/films/Nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/Comingsoon',
        component: Comingsoon
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    name: 'pandaDetail',
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/center',
    component: AppCenter,
    meta: {
      isPandaRequired: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isPandaRequired: true
    }
  },
  {
    path: '/cinemas/search',
    component: Search
  },
  {
    path: '/cinemas',
    component: AppCinemas
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '*',
    redirect: '/films'
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.isPandaRequired) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
