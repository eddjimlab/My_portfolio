
const routes = [
  {
    path: '/',
    component: () => import('pages/Home.vue'),
    children: [
      { path: '', component: () => import('pages/Port.vue') }
    ]
  },
  {
    path: '/port',
    component: () => import('pages/Port.vue')
  },
  {
    path: '/about',
    component: () => import('pages/About.vue')
  },
  {
    path: '/contacts',
    component: () => import('pages/Contacts.vue')
  },
  {
    path: '/form',
    component: () => import('pages/Form.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
