import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'Index',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('../views/index/index.vue'),
      },
      {
        path: '/code-organization',
        name: 'CodeOrganization',
        component: () => import('../views/code-organization/index.vue'),
      },
      {
        path: '/foo',
        name: 'Foo',
        component: () => import('../views/foo/index.vue'),
      },
      {
        path: '/bar',
        name: 'Bar',
        component: () => import('../views/bar/index.vue'),
      },
    ]
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
