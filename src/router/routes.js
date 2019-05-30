
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        meta: {
          desc: 'IBM Watson Demo'
        }
      }, {
        path: 'listlp',
        component: () => import('pages/Listlp.vue')
      }, {
        path: 'itemlp',
        component: () => import('pages/Itemlp.vue'),
        children: [
          {
            path: 'ubersicht',
            component: () => import('pages/Ubersicht.vue'),
            meta: {
              subtitle: 'Übersichtsblatt'
            }
          }, {
            path: 'antrage',
            component: () => import('pages/Antrage.vue'),
            meta: {
              subtitle: 'Gegenüberstellung der Anträge'
            }
          }, {
            path: 'vortrage',
            component: () => import('pages/Vortrage.vue'),
            meta: {
              subtitle: 'Gegenüberstellung der Vorträge'
            }
          }, {
            path: 'prufungattribute',
            component: () => import('pages/PrufungAttribute.vue'),
            meta: {
              subtitle: 'Prüfung der Attribute'
            }
          }, {
            path: 'mundlicheverhandlung',
            component: () => import('pages/MundlicheVerhandlung.vue'),
            meta: {
              subtitle: 'Mündliche Verhandlung'
            }
          }, {
            path: 'rechtlwurdigung',
            component: () => import('pages/RechtlWurdigung.vue'),
            meta: {
              subtitle: 'Erstellen der rechtlichen Würdigung'
            }
          }
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
