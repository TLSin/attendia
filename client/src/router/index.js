import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dashboard/teacher',
      name: 'dashboard-teacher',
      component: DashboardView,
    },
    {
      path: '/dashboard/student',
      name: 'dashboard-student',
      component: () => import('../views/StudentDashboardView.vue'),
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/DownloadView.vue')
    }
    ,
    {
      path: '/session',
      name: 'session',
      component: () => import('../views/SessionDashboardView.vue'),
    }
    ,
    {
      path: '/login/:mode',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      props: true,
    }
    ,
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue'),
    }
    ,
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
