const Index = () => import(/* webpackChunkName: "index" */ './pages/index.vue')
const Client = () =>
  import(/* webpackChunkName: "client" */ './pages/client.vue')
const ClientId = () =>
  import(/* webpackChunkName: "client-id" */ './pages/client/id.vue')

export default [
  {
    name: 'index',
    path: '/',
    component: Index
  },
  {
    name: 'client',
    path: '/client',
    component: Client,
    children: [
      {
        name: 'client-id',
        path: 'id',
        component: ClientId
      }
    ]
  }
]
