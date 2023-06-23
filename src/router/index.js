import { createRouter, createWebHistory } from 'vue-router'
import authLayouts from "@/components/layouts/authLayouts.vue";
import loginPage from "@/views/auth/loginPage.vue";
import registerPage from "@/views/auth/registerPage.vue";
import defaultLayout from "@/components/layouts/defaultLayout.vue";
import detailOrder from "@/views/pages/dashboard/detailOrder.vue";
import dashboardPage from "@/views/pages/dashboard/dashboardPage.vue";
import heroIndex from "@/views/pages/landingPage/hero/heroIndex.vue";
import serviceIndex from "@/views/pages/landingPage/service/serviceIndex.vue";
import aboutIndex from "@/views/pages/landingPage/about/aboutIndex.vue";
import membershipIndex from "@/views/pages/landingPage/membership/membershipIndex.vue";
import benefitIndex from "@/views/pages/landingPage/benefit/benefitIndex.vue";
import classIndex from "@/views/pages/landingPage/class/classIndex.vue";
import galleryIndex from "@/views/pages/landingPage/gallery/galleryIndex.vue";
import testimonyIndex from "@/views/pages/landingPage/testimonial/testimonyIndex.vue";
import footerIndex from "@/views/pages/landingPage/footer/footerIndex.vue";
import componentTester from "@/views/pages/componentTester.vue";

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
          path: '/dashboard',
          name:'dashboard',
          component: dashboardPage

        },
        {
          path: '/order-detail',
          name:'detailOrder',
          component: detailOrder,

        },
        {
          path:'/landing/hero',
          name:'heroIndex',
          component: heroIndex,
        },
        {
          path: '/landing/service',
          name: 'serviceIndex',
          component: serviceIndex,
        },
        {
          path: '/landing/about',
          name:'aboutIndex',
          component: aboutIndex
        },
        {
          path: '/landing/membership',
          name:'membershipIndex',
          component: membershipIndex,
        },
        {
          path: '/landing/benefit',
          name:'benefitIndex',
          component: benefitIndex
        },
        {
          path: '/landing/class',
          name:'classIndex',
          component: classIndex
        },
        {
          path: '/landing/gallery',
          name:'galleryIndex',
          component: galleryIndex
        },
        {
          path:'/landing/testimonial',
          name:'testimonyIndex',
          component: testimonyIndex
        },
        {
          path: '/landing/footer',
          name:'footerIndex',
          component: footerIndex
        }
      ]
    },
    {
      path: '/tester',
      name:componentTester,
      component:componentTester
    }
  ]
})

export default router
