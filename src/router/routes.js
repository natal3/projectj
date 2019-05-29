
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'listlp', component: () => import('pages/Listlp.vue') },
      {
        path: 'itemlp',
        component: () => import('pages/Itemlp.vue'),
        children: [
          { path: 'ubersicht', component: () => import('pages/Ubersicht.vue') },
          { path: 'antrage', component: () => import('pages/Antrage.vue') },
          { path: 'vortrage', component: () => import('pages/Vortrage.vue') }
        ]
      }
    ]
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
