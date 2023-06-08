import { createRouter, createWebHistory } from 'vue-router'
import authLayouts from "@/components/layouts/authLayouts.vue";
import loginPage from "@/views/auth/loginPage.vue";
import registerPage from "@/views/auth/registerPage.vue";
import defaultLayout from "@/components/layouts/defaultLayout.vue";
import detailOrder from "@/views/pages/dashboard/detailOrder.vue";
import dashboardPage from "@/views/pages/dashboard/dashboardPage.vue";
import heroIndex from "@/views/pages/landingpage/hero/heroIndex.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: authLayouts,
      children:[
        {
          path:'/auth/login',
          name:'login',
          component:loginPage
        },
        {
          path:'/auth/register',
          name:'register',
          component:registerPage
        }
      ]
    },
    {
      path:'/',
      component:defaultLayout,
      children:[
        {
          path: '/',
          name:'dashboard',
          component: dashboardPage

        },
        {
          path: '/order-detail',
          name:'detailOrder',
          component: detailOrder,

        },
        {
          path:'/hero',
          name:'heroIndex',
          component:heroIndex,
        }
      ]
    }
  ]
})

export default router
